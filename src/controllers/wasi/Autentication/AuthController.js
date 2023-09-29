const usuarios = require("../../../models/Personas/User/User")
const AuthController = async(req) => {
    const {email,password} = req.body;
    const user = await usuarios.findOne({email:email})

return user
}

module.exports = AuthController