const formularioTomador = require("../../../models/Form/EstudioTomador/FormTomador");
const formValidationController = async(req) =>{
    const {id_form} = req.query
    const fomrexist = await formularioTomador.findOne({
        id_form,
      });

    

      if (!fomrexist) {
        return `El formulario ${id_form} no existe`;
     }else{
      const respuestaDatos = {
         nombre: fomrexist.nom_completo,
         id_form: fomrexist.id_form,
         estado: fomrexist.estado
      }
        return respuestaDatos
     }
   

}

module.exports = formValidationController