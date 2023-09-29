const { Router } = require("express");
const users = require("./wasi/users");
const propertys = require("./wasi/propertys");
const funciones = require("./Funcionalidades/funciones");
const Formularios = require("./Form/EstudioTomador/FormToamdor");
const messenger = require("./mensajes/SendWhatsapp");
// const puppeteer = require("puppeteer");

const router = Router();

router.use("/usersWasi", users);
router.use("/property", propertys);
router.use("/function", funciones);
router.use("/formulario", Formularios);
router.use("/mensajes", messenger);


module.exports = router;
