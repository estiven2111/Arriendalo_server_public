const { CityController } = require("../../../controllers");
const CityMiddleware = async (req, res) => {
  try {
    const response = await CityController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = CityMiddleware;