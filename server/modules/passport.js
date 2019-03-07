const Local = require('passport-local').Strategy;
const User = require('../models/User');



module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  })
  passport.use(new Local(
    function(username, password, done) {
      console.log(username, "check2")
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, {msg : 'Username is wrong'}); }
        user.verifyPassword(password, function(err, isMatched) {
          if (!isMatched) {
            return done(null, false, {msg : 'Password is wrong'})
          }
          return done(null, user, {msg : ''});
        }) 
      });
    }
  ));
}