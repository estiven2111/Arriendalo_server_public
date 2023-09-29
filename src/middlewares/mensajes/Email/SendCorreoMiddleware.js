const { SendCorreoController } = require("../../../controllers");
const SendCorreoMiddleware = async (req, res) => {
  try {
    const response = await SendCorreoController(req,res);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = SendCorreoMiddleware;
