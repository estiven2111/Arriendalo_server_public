const axios = require("axios");
const { deburr } = require("lodash");
const usuario = require("../../../models/Personas/User/User");
const usuarioAux = require("../../../models/Personas/User/UserAux");
const { db } = require("../../../db");
const savePropertiesController = require("../properties/savePropertiesController");
require("dotenv").config();
const { WASI_ID_COMPANY, WASI_TOKEN } = process.env;
const SaveUsersController = async () => {

   //! HORA DE EJECUCION DEL PROGRAMA

const formatoHoraColombia = new Intl.DateTimeFormat('es-CO', {
  timeZone: 'America/Bogota',
  hour12: false,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

// Obtiene la hora actual en el huso horario de Colombia
const fechaHoraActual = new Date();
const horaFormateada = formatoHoraColombia.format(fechaHoraActual);
console.log(`fecha de ejecucion creacion de USUARIOS ${horaFormateada}`);
  let collectionsAux = await db.db.listCollections().toArray();
  let collectionExistsAux = collectionsAux.some((collection) => collection.name === "userauxes");
   
   if (collectionExistsAux) {
      //!Borrar la base de datos pero solo los datos un truncate
    if (db.db.listCollections({ name: "userauxes" }).filter.name) {
     console.log("borra userauxes");
     db.dropCollection("userauxes");
   }
   }

if (true) {
  const response = await axios.get(
    `https://api.wasi.co/v1/user/all-users?id_company=${WASI_ID_COMPANY}&wasi_token=${WASI_TOKEN}`
  );

  let allProperty = [];
  allProperty = [...allProperty, response.data];
  let result = [];
  for (let i = 0; i < allProperty.length; i++) {
    let item = allProperty[i];
    for (let key in item) {
      if (key === "status" || key === "total") {
      } else {
        if (item.hasOwnProperty(key)) {
          const nombre = item[key].first_name
          const cell_phone = item[key].cell_phone
          const celeanNumber = cell_phone.replace(/\D/g, '');
           const formattedPhoneNumber = `+${celeanNumber}`;
           const message = `Hola ${nombre} me interesa obtener mas información sobre arriendalo `
           const encodedMessage = encodeURIComponent(`${message}`);
           const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
           //! el deburr lo que hace es quitar las tildes
       let normalizedName = deburr(item[key].first_name);
          result.push({
            ...item[key],
            password: `${normalizedName}Arriendalo123`,
            whatsapp:whatsappLink
          });
        }
      }
    }
  }
 let user
 let ee = 0
  const promises = result.map(async (pro) => {
    
    user = await new usuarioAux(pro);
    await user.save();
    });
    await Promise.all(promises)
//      // Consulta los documentos de y los guardo en una bariable de la usuarioAux
//  const copiaBD = await usuarioAux.find({}).exec();
//  //!validar si existe la base de datos
// // const collectionName = "properties";

// collectionsAux = await db.db.listCollections().toArray();
// collectionExistsAux = collectionsAux.some((collection) => collection.name === "userauxes");

// if (collectionExistsAux) {
//   //!Borrar la base de datos pero solo los datos un truncate
// if (db.db.listCollections({ name: "userauxes" }).filter.name) {
//  db.dropCollection("userauxes");
// }
// }


//  //!validar si existe la base de datos
// // const collectionName = "properties";

// const collections = await db.db.listCollections().toArray();
// const collectionExists = collections.some((collection) => collection.name === "users");

// if (collectionExists) {
// //!Borrar la base de datos pero solo los datos un truncate
// if (db.db.listCollections({ name: "users" }).filter.name) {

// db.dropCollection("users");
// }
// }
// //? inserto los datos de aux en la base de datos
// await usuario.insertMany(copiaBD);
await savePropertiesController()
return "Registro exitoso!!!";
 
}

}

module.exports = SaveUsersController;
