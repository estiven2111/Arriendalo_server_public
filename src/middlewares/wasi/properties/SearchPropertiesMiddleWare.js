const {SearchPropertiesController} = require("../../../controllers")
const SearchPropertiesMiddleWare = async (req,res) =>{
    try {
        const response = await SearchPropertiesController(req);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = SearchPropertiesMiddleWare