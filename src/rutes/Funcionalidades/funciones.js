const { Router } = require("express");
const {
  OcrMiddeware,
  MapsMiddleware,
  CityMiddleware,
  TypePropertyMiddleware,
  PriceMinMaxMiddleWare,
  WompiMiddlerware,
} = require("../../middlewares");
const funciones = Router();

funciones.post("/ocr", OcrMiddeware);
funciones.get("/keyMap", MapsMiddleware);
funciones.get("/cities", CityMiddleware);
funciones.get("/tipes", TypePropertyMiddleware);
funciones.get("/minmax", PriceMinMaxMiddleWare);
funciones.post("/wompi", WompiMiddlerware);

module.exports = funciones;
