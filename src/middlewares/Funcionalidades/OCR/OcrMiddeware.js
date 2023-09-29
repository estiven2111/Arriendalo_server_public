const { OcrController } = require("../../../controllers");
const OcrMiddeware = async (req, res) => {
  try {
    const response = await OcrController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = OcrMiddeware;
