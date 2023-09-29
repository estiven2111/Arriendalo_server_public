const { AllUsersController } = require("../../../controllers");

const AllUsersMiddleWare = async (req, res) => {
  try {
    const response = await AllUsersController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = AllUsersMiddleWare;
