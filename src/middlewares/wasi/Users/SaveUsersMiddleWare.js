const { SaveUsersController } = require("../../../controllers");

const SaveUsersMiddleWare = async (req, res) => {
  try {
    const response = await SaveUsersController(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = SaveUsersMiddleWare;
