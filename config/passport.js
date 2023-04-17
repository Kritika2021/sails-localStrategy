var bcrypt = require('bcrypt'),
    moment = require('moment'),
    passport = require('passport'),
    BearerStrategy = require('passport-http-bearer').Strategy,
    BasicStrategy = require('passport-http').BasicStrategy,
    LocalStrategy = require('passport-local').Strategy,
    ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy;


    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      User.findOne({id:id}, function (err, user) {
        done(err, user);
      });
    });

    /**
     * LocalStrategy
     *
     * This strategy is used to authenticate users based on a username and password.
     * Anytime a request is made to authorize an application, we must ensure that
     * a user is logged in before asking them to approve the request.
     */
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if(password == user.password){
        return done(null, true);
      }
     
      return done(null, user);
    });
  }
));

