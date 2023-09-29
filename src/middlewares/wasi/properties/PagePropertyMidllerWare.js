const { PagePropertyController } = require("../../../controllers");
const PagePropertyMidllerWare = async(req, res) => {
  try {
    const response = await PagePropertyController(req);
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = PagePropertyMidllerWare;
