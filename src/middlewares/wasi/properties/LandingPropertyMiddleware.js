const { LandingPropertyController } = require("../../../controllers");
const LandingPropertyMiddleware = async (req, res) => {
  try {
    const response = await LandingPropertyController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = LandingPropertyMiddleware;
