
const { FormDashboardController } = require("../../../controllers");
const FormDashboardMiddleware = async (req, res) => {
  try {
    const response = await FormDashboardController(req,res);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = FormDashboardMiddleware;



// const { FormDashboardController } = require("../../../controllers");
// const FormDashboardMiddleware = async (req, res) => {
//   try {
//     const { data, totalCount } = await FormDashboardController(req,res);
//     //? Content-Range header for react-admin
//     res.header("Content-Range", `formularios 0-${totalCount}/${totalCount}`);
//     res.send({data});
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = FormDashboardMiddleware;

