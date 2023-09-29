const {DetailPropertyController} = require("../../../controllers")
const DetailPropertyMiddleWare = async (req,res) =>{
    try {
        const response = await DetailPropertyController(req);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = DetailPropertyMiddleWare