const User = require('../models/User');
const passport = require('passport')


module.exports = {
	createUser: (req, res) => {
		const newUser = new User({
			...req.body,
			isAdmin: false
		});

		newUser.save((err, user) => {
			if(err) res.send(err)
				res.json(user)
		})
	},

	loginUser: (req, res, next) => {
		passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { 
        return res.status(404).json({
          msg: 'Invalid Username or Password',
          success: false
        }) 
      }
      req.login(user, function(err) {
        if (err) {
         return next(err); 
       }
        return res.status(200).json({
          user,
          success: true
        })
      });
    })(req, res, next);
	},
 

	// isLoggedIn : (req, res, next) => {
	//   if(req.user) {
	//     User.findOne({_id : req.user._id}, (err, data) => {
	//       if(data) {
	//         res.json({
	//           msg: `${data.username} is loggedin`
	//         })
	//       } else {
	//         res.status(404).json({
	//           msg : "Please Sign Up. You are not logged in."
	//         })
	//       }
	//     })
	//   }
	// },

	isLoggedIn: (req, res, next) => {
	console.log(req.session.passport.user, "session store")
	if(req.session.passport.user){
		return next()
	}
	return res.status(404).json({
		msg: "user Not login"
	})
	},

	loggedOut: (req, res) => {
		req.session.destroy();	
		res.status(200).json({
			msg: "Session is removed & User Is LoggedOut"
		})
	}

}