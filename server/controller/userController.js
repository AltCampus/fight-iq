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
					res.json({message:'Username exists already'});
			}else{

				User.find({email : newUser.email}, function (err, user) {
					if (user.length){
							res.json({message:'Email exists already'});
					}else{

						newUser.save((err, user) => {
							if(err) res.send(err)
								res.json({
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

	loginUser: (req, res, next) => {
		passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { 
        return res.status(404).json({
          message: 'Invalid Username or Password',
          success: false
        }) 
      }
      req.login(user, function(err) {
        if (err) {
         return next(err); 
       }
        return res.status(200).json({
          user: user.username,
          success: true
        })
      });
    })(req, res, next);
	},
 

	isLoggedIn: (req, res, next) => {
	if(req.session.passport.user){
		return next()
	}
	return res.status(404).json({
		success : false,
		message: "user Not login"
	})
	},

	loggedOut: (req, res) => {
		req.session.destroy();	
		res.status(200).json({
			success: true,
			message: "Session is removed & User Is LoggedOut"
		})
	},


	// isAdmin: (req, res, next) => {
	// 	User.findOne({ req.body.username }, function(err, user) {
  //     if (err) { return next(err); }

  //     if (!user) { 
  //       // Do something - the user does not exist
  //     }

  //     if (!user.admin) { 
  //       // Do something - the user exists but is no admin user
  //     }

  //     // Hand over control to passport
  //     next();
  //   });
	// 	}


}