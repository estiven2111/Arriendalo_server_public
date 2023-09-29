const { Router } = require("express");
const {
  FomrTomadorMiddleware,
  formValidationMiddleware,
  FormDashboardValidateMiddleware,
  FormDashboardSearchMiddleware,
  FormDashboardDeleteMiddleware,
  FormDashboardMiddleware,
} = require("../../../middlewares");

const Formularios = Router();

Formularios.post("/aplica-tomador", FomrTomadorMiddleware);
Formularios.get("/validation", formValidationMiddleware);
Formularios.get("/tomador/dashboard", FormDashboardMiddleware); //? obtengo todos los formularios
Formularios.put("/validation-tomador/dashboard",FormDashboardValidateMiddleware)//?edito el estado del formulario
Formularios.get("/search-tomador/dashboard", FormDashboardSearchMiddleware);//? busco un formulario especifico
Formularios.delete("/delete-tomador/dashboard", FormDashboardDeleteMiddleware);//? eliminar un formulario especifico

module.exports = Formularios;
