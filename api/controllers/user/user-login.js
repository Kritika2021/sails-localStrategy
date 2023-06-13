var passport = require('passport');

module.exports = {


  friendlyName: 'User login',


  description: '',


  inputs: {

    username :{
        type:'string'
    },
    password:{
        type:'string'
    }

  
  },


  exits: {

    notFound: { responseType: 'notFound' } ,
    success : {
        message : 'Successfully Response'
    },
   

  },


  fn: async function (inputs, exits) {

   // console.log("called");
   // console.log(inputs.username);
   // console.log(inputs.password);
   
         passport.authenticate('local', function(err, user, info) { 

            // console.log("Error" , err);
            // console.log("User" ,user);
            // console.log("Info" , info);
            if(err == null || info != null || info != ''){
                exits.success();
            }
            
         })(this.req, this.res);

     
}

};
