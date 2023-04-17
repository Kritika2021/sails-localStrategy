var passport = require('passport');

module.exports = {


  friendlyName: 'User login',


  description: '',


  inputs: {

  
  },


  exits: {

  //  notFound: { responseType: 'notFound' }

  },


  fn: async function (inputs) {

   
   passport.authenticate('local', function(err, user, info){

      console.log("Authentication called");

      if((err) || (!user)) {
        return this.res.send({
          message: info.message,
          user
        });
      }
  req.logIn(user, function(err) {
          if(err) this.res.send(err);
          return this.res.send({
            message: info.message,
            user
          });
        });
      })(this.req, this.res);
  }

};
