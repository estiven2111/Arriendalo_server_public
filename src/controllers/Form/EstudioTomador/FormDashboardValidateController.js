const formularioTomador = require("../../../models/Form/EstudioTomador/FormTomador");




const FormDashboardValidateController = async (req) => {
  const { id_form, num_doc, estado } = req.query;
  try {
    const form = await formularioTomador.findOneAndUpdate(
      // { $or: [{ id_form }, { num_doc }] }, // Criterio de búsqueda, // Criterio de búsqueda
      { id_form },
      { $set: { estado } }, // Cambio a aplicar
      { new: true } // Opciones (en este caso, para devolver el documento actualizado)
    );
    if (!form) {
      if (id_form || num_doc) {
        if (id_form) {
          return `el formulario con id de formulario ${id_form}  no existe.`;
        } else {
          return `el formulario con cedula de usuario ${num_doc} no existe.`;
        }
      } else {
        return `porfavor llene los campos`;
      }
    }
    const date_form = await formularioTomador.findOne({id_form})
    return `el formulario ${form.id_form} fue editado correctamente`;
  } catch (error) {
    console.log(error);
  }
};

const FormDashboardSearchController = async (req) => {
  const { id_form, id_form_tomador, num_doc, cod_inmueble, email, num_whatsapp } = req.query;
  const filter = {};

  if (id_form) {
    filter.id_form = id_form;
  }
  if (id_form_tomador) {
    filter.id_form_tomador = id_form_tomador;
  }
  if (num_doc) {
    filter.num_doc = num_doc;
  }
  if (cod_inmueble) {
    filter.cod_inmueble = cod_inmueble;
  }
  if (email) {
    filter.email = email;
  }
  if (num_whatsapp) {
    filter.num_whatsapp = num_whatsapp;
  }

  const search = await formularioTomador.find(filter);
  // const search = await formularioTomador.find({
  //   $or: [
  //     { id_form: id_form },
  //     { id_form_tomador: id_form_tomador }
  //   ]
  // });

  if (search) {
    return search;
  }
  return "buscar formulario";
};

const FormDashboardDeleteController = async (req) => {
  const { id_form } = req.query;

  const search = await formularioTomador.findOne({ id_form });
  if (search) {
    const { deletedCount } = await formularioTomador.deleteOne({ id_form });
    if (deletedCount > 0) {
      return `el formulario ${id_form} fue eliminado`;
    } else {
      return `el formulario ${id_form} no fue eliminado`;
    }
  } else {
    return `el formulario ${id_form} no exite en la base de datos`;
  }
};

module.exports = {
  FormDashboardValidateController,
  FormDashboardSearchController,
  FormDashboardDeleteController,
};
