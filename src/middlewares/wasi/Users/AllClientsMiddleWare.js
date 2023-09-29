const { AllClientscontroller } = require("../../../controllers");
const AllClientsMiddleWare = async (req, res) => {
  try {
    const response = await AllClientscontroller(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = AllClientsMiddleWare;
