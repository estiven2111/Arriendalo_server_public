const { SendWhatsappController } = require("../../../controllers");
const SendWhatsappMiddleware = async (req, res) => {
  try {
    const response = await SendWhatsappController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = SendWhatsappMiddleware;