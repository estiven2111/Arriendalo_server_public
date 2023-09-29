const mongoose = require("mongoose");
require("dotenv").config();
const { DBUSER, DBPASSWORD, DBNAME } = process.env;
const db = mongoose.connection;
mongoose
  .connect(
    `mongodb+srv://${DBUSER}:${DBPASSWORD}@${DBNAME}/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => console.log(err)); //? llamar el error de conexion una forma
//! on se ejecuta siempre  y once se ejecuta una vez
db.once("open", () => {
  console.log("conectado");
});
db.on("error", () => {
  //? llamar el error de conexion otra forma
  console.log("error de conexion a mongose");
});

module.exports = { db, mongoose};
//todo  ******************************************************
