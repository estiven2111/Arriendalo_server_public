const { MapsController } = require("../../../controllers");
const MapsMiddleware = async (req, res) => {
  try {
    const response = await MapsController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = MapsMiddleware;
