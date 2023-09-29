const { Router } = require("express");
const {
  PagePropertyMidllerWare,
  DetailPropertyMiddleWare,
  LandingPropertyMiddleware,
  AllPropertysMiddleWare,
  savePropertiesMiddleware,
  SearchPropertiesMiddleWare,
} = require("../../middlewares");

const propertys = Router();

propertys.get("/", PagePropertyMidllerWare);//! Obtiene todas las propiedades segun la pagina que le manden NO APLICA
propertys.get("/details", DetailPropertyMiddleWare);//? obtiene el detalle de una sola propiedad que le llega el id de la propiedad
propertys.get("/all", AllPropertysMiddleWare); //? obtiene todas las propiedades activas y destacadas guardadas en la BD
propertys.get("/save", savePropertiesMiddleware); //? Guarda las propiedades que hay en wasi deacuerdo al array del excel 
propertys.get("/newproperties",LandingPropertyMiddleware)//?filtra las propiedades mas nuevas
propertys.get("/search",SearchPropertiesMiddleWare) //? Buscar por nombre , descripcion o cual quier cosa


//! Ruta prueba OCR IMAGENES
// propertys.post("/ocr",OcrMiddeware)

module.exports = propertys;
