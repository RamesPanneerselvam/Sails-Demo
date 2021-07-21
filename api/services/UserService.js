/**
* UserService.js
**/


module.exports = {
    createUser: async function(input) {
        console.log("@Service UserService @method createUser :: Input", input);
        return await User.add(input);
    }
}