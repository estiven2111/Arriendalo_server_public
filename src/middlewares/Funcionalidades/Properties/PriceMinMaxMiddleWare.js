const { PriceMinMaxController } = require("../../../controllers");
const PriceMinMaxMiddleWare = async (req, res) => {
  try {
    const response = await PriceMinMaxController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = PriceMinMaxMiddleWare;