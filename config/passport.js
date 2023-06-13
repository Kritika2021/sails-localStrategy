      let passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;
      //bcrypt = require('bcrypt-nodejs');



      passport.serializeUser(function(user, cb) {
        console.log("serialise");
        cb(null, user.id);
      });
      passport.deserializeUser(function(id, cb){
        console.log("deserialise");
        User.findOne({id}, function(err, users) {
          cb(err, users);
        });
      });



const verifyCallback = (username, password, done) => {

 User.findOne({username: username}) 
     .then((user) => {
          
           if(!user) return done(null, false, {message: 'Username not found'});

           if(password != user.password){
             return done(null, false, { message: 'Invalid Password' });
          }

          let userDetails = {
            username: user.username,
            id: user.id
          };
          //console.log(userDetails);

          return done(null, userDetails, { message: 'Login Succesful '});

    }).catch((err) =>{
          done(err);
    })
     
}

// Local Strategy
passport.use(new LocalStrategy({
    username: 'username',
    password: 'password'
    }, verifyCallback ));

       


