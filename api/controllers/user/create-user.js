var bcrypt = require('bcrypt');
const salt = 10;
const password = "admin@123";

module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {
    username : {
      type:'string'
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    let data = await User.create({ username : inputs.username , password : password });
    console.log("User is created " + data);



  }


};
