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
     passport.use(
     new LocalStrategy(

     function (username, password, done) {

        // console.log(username);
        // console.log(password);


         process.nextTick(


         function () {
             User.findOne({
                 username : username
             }).exec(function (err, user) {

                 //console.log(user);

                 if (err) {
                     console.log("Passport file called"); 
                     console.log(err);
                     return;
                 }

                 if (!user) {
                     console.log("no user found");
                     return;
                 }


                //  if( password == user.password) {
                //     return done(null, user);
                // }else{
                //     return done( null, false, { message: 'Invalid password' });
                // }
                
                 console.log(user.password);
                 console.log(password);
                 if (user.password != password) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }

            return done(null, user);
                // bcrypt.compare(password, user.password, function (err, res) {

                   

                //   if (!res){
                //      console.log("PAssword code");
                //     return  {
                //       message: 'Invalid Password'
                //     };
                // }
                //   var returnUser = {
                //     username: user.username,
                //     createdAt: user.createdAt,
                //     id: user.id
                //   };
                //   return done(null, returnUser, {


                //     message: 'Logged In Successfully'
                //   });
                // });
      })
    });
  }
));