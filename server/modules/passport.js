const Local = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
    // done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new Local(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, {message : 'Wrong Username. Please Check The Username!'}); }
        user.verifyPassword(password, function(err, isMatched) {
          if (!isMatched) {
            return done(null, false, {message : 'Wrong Password. Please Check The Password And Try Again!'})
          }
          return done(null, user, {message : ''});
        }) 
      });
    }
  ));
  
}