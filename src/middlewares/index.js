const AllUsersMiddleWare = require("./wasi/Users/AllUsersMiddleWare");
const SaveUsersMiddleWare = require("./wasi/Users/SaveUsersMiddleWare");
const AuthMiddleware = require("./wasi/Autentication/AuthMiddleware");
const AllClientsMiddleWare = require("./wasi/Users/AllClientsMiddleWare");

//todo propiedades
const AllPropertysMiddleWare = require("./wasi/properties/AllPropertysMiddleWare");
const PagePropertyMidllerWare = require("./wasi/properties/PagePropertyMidllerWare");
const LandingPropertyMiddleware = require("./wasi/properties/LandingPropertyMiddleware");
const DetailPropertyMiddleWare = require("./wasi/properties/DetailPropertyMiddleWare");
const savePropertiesMiddleware = require("./wasi/properties/savePropertiesMiddleware");

//todo filtros
const SearchPropertiesMiddleWare = require("./wasi/properties/SearchPropertiesMiddleWare");
const CityMiddleware = require("./Funcionalidades/Properties/CityMiddleware");
const TypePropertyMiddleware = require("./Funcionalidades/Properties/TypePropertyMiddleware");
const PriceMinMaxMiddleWare = require("./Funcionalidades/Properties/PriceMinMaxMiddleWare");

//todo FUNCIONALIDADES
const OcrMiddeware = require("./Funcionalidades/OCR/OcrMiddeware");
const MapsMiddleware = require("./Funcionalidades/Maps/MapsMiddleware");

//todo FORMULARIOS

const FomrTomadorMiddleware = require("./Form/EstudioTomador/FomrTomadorMiddleware");
const formValidationMiddleware = require("./Form/EstudioTomador/formValidationMiddleware");
const {FormDashboardValidateMiddleware,FormDashboardSearchMiddleware,FormDashboardDeleteMiddleware} = require("./Form/EstudioTomador/FormDashboardValidateMiddleware")
const FormDashboardMiddleware = require("./Form/EstudioTomador/FormDashboardMiddleware")

//todo MENSAJERIA

const SendWhatsappMiddleware = require("./mensajes/Whatsapp/SendWhatsappMiddleware");
const SendCorreoMiddleware = require("./mensajes/Email/SendCorreoMiddleware")

//todo PAGOS WOMPI

const WompiMiddlerware = require("./Wompi/WompiMiddlerware")

module.exports = {
  AllUsersMiddleWare,
  SaveUsersMiddleWare,
  AuthMiddleware,
  AllClientsMiddleWare,

  //todo propiedades
  AllPropertysMiddleWare,
  PagePropertyMidllerWare,
  LandingPropertyMiddleware,
  DetailPropertyMiddleWare,
  savePropertiesMiddleware,

  //todo filtros
  SearchPropertiesMiddleWare,
  CityMiddleware,
  TypePropertyMiddleware,
  PriceMinMaxMiddleWare,

  //todo FUNCIONALIDADES
  OcrMiddeware,
  MapsMiddleware,

  //todo formularios
  FomrTomadorMiddleware,
  formValidationMiddleware,
  FormDashboardValidateMiddleware,
  FormDashboardSearchMiddleware,
  FormDashboardDeleteMiddleware,
  FormDashboardMiddleware,

  //todo MENSAJERIA

  SendWhatsappMiddleware,
  SendCorreoMiddleware,

  //todo PAGOS WOMPIP

  WompiMiddlerware,
};
