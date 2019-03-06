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
          msg: 'Invalid Username or Password'
        }) 
      }
      req.login(user, function(err) {
        if (err) {
         return next(err); 
       }
        return res.status(200).json({
          user 
        })
      });
    })(req, res, next);
	}

}