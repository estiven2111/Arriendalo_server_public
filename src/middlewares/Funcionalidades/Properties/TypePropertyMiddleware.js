const { TypePropertyController } = require("../../../controllers");
const TypePropertyMiddleware = async (req, res) => {
  try {
    const response = await TypePropertyController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = TypePropertyMiddleware;