const {savePropertiesController} = require("../../../controllers")
const savePropertiesMiddleware = async(req, res) => {
    try {
      const response = await savePropertiesController(req);
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = savePropertiesMiddleware;