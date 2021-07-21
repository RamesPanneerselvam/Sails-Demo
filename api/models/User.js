/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const UserController = require("../controllers/UserController");

module.exports = {

  attributes: {

    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
  },


  add: async function(input){
    console.log("@Model User @method add :: Input", input);
    return await User.create(input);
  }
};

