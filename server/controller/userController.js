const User = require('../models/User');
const passport = require('passport')


module.exports = {
	createUser: (req, res) => {
		const newUser = new User({
			...req.body,
			isAdmin: false
		});

		User.find({username : newUser.username}, function (err, user) {
			if (user.length){
					return res.json({message:'Username exists already',success:false});
			}else{

				User.find({email : newUser.email}, function (err, user) {
					if (user.length){
							return res.json({message:'Email exists already',success:false});
					}else{

						newUser.save((err, user) => {
							if(err) return res.json({message:err,success:false});
								return res.status(201).json({
									user: user.username,
									success: true,
									message: "User Created Successfully"
								})
						})		
					}
			});		
			}
	});
	},

	loginUser: function(req, res, next) {
	  passport.authenticate('local', function(err, user, {message}) {
	    if (err) { return next(err); }
	    if (!user) { return res.json({
	    	success: false,
	    	message
	    }); }
	    req.logIn(user, function(err) {
	      if (err) { return next(err); }
	      return res.status(200).json({
	      	user: user.username,
					message: "Successfully login",
					success: true
	      });
	    });
	  })(req, res, next);
	},
 

	isLoggedIn: (req, res, next) => {
	if(req.session.passport){
		return next();
	}
	else {
	return res.status(404).json({
		success : false,
		message: "user Not login"
	})}
	},

	loggedOut: (req, res) => {
		req.session.destroy();	
		res.status(200).json({
			success: true,
			message: "Session is removed & User Is LoggedOut"
		})
	},

	isUser: (req, res) => {
		const user = req.session.passport;
		if(user){
			User.findOne({_id: user.user}, (err, user) => res.status(200).json({
				login: "success",
				user:user.username
			}))
		}
		else 
		return res.status(404).json({
			success : false,
			message: "user Not login"
		})
	},


	isAdmin: (req, res, next) => {
		const sessionUser = req.session.passport;
		if(sessionUser){
			User.findOne({_id: sessionUser.user}, (err, user) =>{
				 if(user.isAdmin === true) return next();
				 else {
					return res.status(404).json({
						success : false,
						message: "User is not Admin"
					})}
			})
		}
		else 
		return res.status(404).json({
			success : false,
			message: "user Not login"
		})
		}


}
