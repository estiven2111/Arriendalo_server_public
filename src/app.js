const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./rutes/index");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");



const accountTransport = require("./account_transport.json");


const app = express();

// app.use(cors());
//? para que funcione react-admin
app.use(cors({
    exposedHeaders: ["Content-Range"],
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(fileupload())

app.use("/", router);





module.exports = app;
