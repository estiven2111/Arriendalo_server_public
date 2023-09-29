
const  {WompiController}  = require("../../controllers")
const WompiMiddlerware = async (req, res) => {
  try {
    const response = await WompiController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = WompiMiddlerware;