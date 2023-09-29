const formularioTomador = require("../../../models/Form/EstudioTomador/FormTomador");
const FormDashboardController = async(req) =>{

    const form = await formularioTomador.find()
    return form

}

module.exports = FormDashboardController

// const formularioTomador = require("../../../models/Form/EstudioTomador/FormTomador");

// const FormDashboardController = async(req) => {
//     const forms = await formularioTomador.find();
//     // const totalCount = await formularioTomador.countDocuments();
    
//     // console.log("entro al controladorrrrrr", forms)
//     // debe tener una propiedad 'id'. Uso el id_form para esto, //! Ajustar en todos los controladores
//     const formattedForms = forms.map(form => ({
//         id: form.id_form,
//         ...form.toObject()
//     }));

//     const response = {
//         data: formattedForms,
//         total: totalCount
//     }
//     console.log(response);

//     return {
//         data: formattedForms,
//         totalCount
//     };
// }

// module.exports = FormDashboardController;
