

const { FormDashboardValidateController, FormDashboardSearchController,FormDashboardDeleteController } = require("../../../controllers");
const FormDashboardValidateMiddleware = async (req, res) => {
  try {
    const response = await FormDashboardValidateController(req,res);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FormDashboardSearchMiddleware = async (req, res) => {
  try {
    const response = await FormDashboardSearchController(req,res);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FormDashboardDeleteMiddleware = async (req, res) => {
  try {
    const response = await FormDashboardDeleteController(req,res);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {FormDashboardValidateMiddleware,FormDashboardSearchMiddleware,FormDashboardDeleteMiddleware};
