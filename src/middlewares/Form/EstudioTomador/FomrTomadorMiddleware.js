const { FomrTomadorController } = require("../../../controllers");
const FomrTomadorMiddleware = async (req, res) => {
  try {
    const response = await FomrTomadorController(req,res);
    // res.status(200).json(response);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = FomrTomadorMiddleware;
