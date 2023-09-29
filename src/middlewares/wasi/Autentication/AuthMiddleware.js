const { AuthController } = require("../../../controllers");
const AuthMiddleware = async (req, res) => {
  try {
    const response = await AuthController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = AuthMiddleware;