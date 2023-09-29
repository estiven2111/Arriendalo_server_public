const {AllPropertyController} = require("../../../controllers")
const AllPropertysMiddleWare =async (req,res) => {
try {
    const response = await AllPropertyController();
    res.status(200).json(response)
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

module.exports = AllPropertysMiddleWare
