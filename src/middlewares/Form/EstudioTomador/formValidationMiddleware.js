const { formValidationController } = require("../../../controllers");
const formValidationMiddleware = async (req, res) => {
  try {
    const response = await formValidationController(req,res);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = formValidationMiddleware;
