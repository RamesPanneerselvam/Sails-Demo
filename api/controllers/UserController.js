/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    createUser: async function (req, res) {
        console.log("@ controller UserController @createUser", req.body);

        try {
            let result = await UserService.createUser(req.body);
            return res.json(result);

        } catch (err) {
            console.log("@controller UserController @createUser Error", err);
            res.badRequest(err);
        }
    }

};

