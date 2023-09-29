const axios = require("axios");
const cheerio = require("cheerio");
const { typeproperty } = require("./propertyMethos");
const { db } = require("../../../db");
const propiedades = require("../../../models/Propiedades/Property");
const propiedadesAux = require("../../../models/Propiedades/PropertyAux");
const usuarioAux = require("../../../models/Personas/User/UserAux");
const user = require("../../../models/Personas/User/User");
require("dotenv").config();
const { WASI_ID_COMPANY, WASI_TOKEN } = process.env;

const savePropertiesController = async (req) => {
  let allProperty = [];
  let result = [];
  let pageProperty = [];
  let cont = 0;
  let response;
try {


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
  let fechaHoraActual = new Date();
  let horaFormateada = formatoHoraColombia.format(fechaHoraActual);
  console.log(`fecha de ejecucion creacion de PROPIEDADES ${horaFormateada}`);
  let collections
 let  collectionExists
  let collectionsAux = await db.db.listCollections().toArray();
 let collectionExistsAux = collectionsAux.some((collection) => collection.name === "propertyauxes");
  
  if (collectionExistsAux) {
     //!Borrar la base de datos pero solo los datos un truncate
   if (db.db.listCollections({ name: "propertyauxes" }).filter.name) {
    console.log("borra propertyauxes");
    db.dropCollection("propertyauxes");
  }
  }
 


// //! validar si hay datos en la base de datos
// // const collectionNames = "properties";
// const collection = db.collection("properties");

// const document = await collection.findOne();


// //!validar si la base de datos tiene datos y obtener el numero de datos
// const collectionName = "properties";
// const collection2 = db.collection(collectionName);

// const count = await collection2.countDocuments();

// console.log(`La cantidad de documentos en la colección ${collectionName} es: ${count}`);


  for (let m = 0; m < 200; m++) {
    cont = 0;
    response = await axios.get(
      `https://api.wasi.co/v1/property/search?id_company=${WASI_ID_COMPANY}&wasi_token=${WASI_TOKEN}&id_status_on_page=5&skip=${m}`
      // `https://api.wasi.co/v1/property/search?id_company=${WASI_ID_COMPANY}&wasi_token=${WASI_TOKEN}&skip=${m}`
    );
    if (Object.keys(response.data).length <= 2) {
      break
    }else{
       allProperty = [...allProperty, response.data];
    }
  }
  for (let i = 0; i < allProperty.length; i++) {
    let item = allProperty[i];

    for (let key in item) {
      if (key === "status" || key === "total") {
      } else {
        if (item.hasOwnProperty(key)) {
          const idResponsable = await usuarioAux.findOne({
            id_user: item[key].id_user,
          });
      
        const observacion = await cheerio.load(item[key].observations);
        let textoLimpio = observacion.text();
        textoLimpio = textoLimpio.replace(/(\n|\\)/g, "");
        textoLimpio = textoLimpio.replace(/(&quot;)/g, '"');
        textoLimpio = textoLimpio.replace(/(\")/g, "");

       const nombre = idResponsable.first_name
       const id_propiedad = item[key].id_property
       const cell_phone = idResponsable.cell_phone
       const linkText = "Haz clic aquí"
       const linkURL = `https://arriendalo.com.co/propiedades/${id_propiedad}`
       const celeanNumber = cell_phone.replace(/\D/g, '');
        const formattedPhoneNumber = `+${celeanNumber}`;
        const message = `hola ${nombre} me intresa obtener informacion sobre la propiedad con codigo ${id_propiedad}`
        const encodedMessage = encodeURIComponent(`${message}\n${linkText}: ${linkURL}`);
        // const imageUrl = 'URL_DE_LA_IMAGEN'; // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen que deseas enviar
        // const whatsappLinkWithImage = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}&img=${encodeURIComponent(imageUrl)}`;
        const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
          
          // const userupdate = await user.updateOne(
          //   { id_user: idResponsable.id_user },
          //   { whatsapp: whatsappLink }
          // );
          // console.log(userupdate)
          const banos = item[key].bathrooms.replace(">","")
          const habi = item[key].bedrooms.replace(">","")
          item[key] = {
            ...item[key],
            observations: textoLimpio,
            rent_price:Number(item[key].rent_price),
            bathrooms:Number(banos),
            bedrooms:Number(habi),
            garages:Number(item[key].garages),
            floor:Number(item[key].floor),
            stratum:Number(item[key].stratum),
            petfriendly: false,
            amoblada: false,
            llaves: false,
            admin: false,
            whatsapp: whatsappLink,
            user: idResponsable._id,
            
          };

          const exis = await propiedadesAux.findOne({
            id_property: item[key].id_property,
          });
          if (exis) {
          } else {
            const property = await new propiedadesAux(item[key]);
            await property.save();
            result.push(item[key]);
          }
        }
      }
    }
  }
   // Consulta los documentos de y los guardo en una bariable de la propertyaux
  const copiaBD = await propiedadesAux.find({}).exec();
  
    //!validar si existe la base de datos
  // const collectionName = "properties";

   collectionsAux = await db.db.listCollections().toArray();
   collectionExistsAux = collectionsAux.some((collection) => collection.name === "propertyauxes");
  
  if (collectionExistsAux) {
     //!Borrar la base de datos pero solo los datos un truncate
   if (db.db.listCollections({ name: "propertyauxes" }).filter.name) {
    console.log("borra propertyauxes");
    db.dropCollection("propertyauxes");
  }
  }
  



     // Consulta los documentos de y los guardo en una bariable de la usuarioAux
     const copiaBDUser = await usuarioAux.find({}).exec();
     //!validar si existe la base de datos
    // const collectionName = "properties";
    
    collectionsAux = await db.db.listCollections().toArray();
    collectionExistsAux = collectionsAux.some((collection) => collection.name === "userauxes");
    
    if (collectionExistsAux) {
      //!Borrar la base de datos pero solo los datos un truncate
    if (db.db.listCollections({ name: "userauxes" }).filter.name) {
     console.log("borra userauxes");
     db.dropCollection("userauxes");
    }
    }
    
    
     //!validar si existe la base de datos
    // const collectionName = "properties";
    
     collections = await db.db.listCollections().toArray();
     collectionExists = collections.some((collection) => collection.name === "users");
    
    if (collectionExists) {
    //!Borrar la base de datos pero solo los datos un truncate
    if (db.db.listCollections({ name: "users" }).filter.name) {
    console.log("borra users");
    db.dropCollection("users");
    }
    }
    //? inserto los datos de aux en la base de datos
    await user.insertMany(copiaBDUser);

    //!validar si existe la base de datos
  // const collectionName = "properties";

  collections = await db.db.listCollections().toArray();
  collectionExists = collections.some((collection) => collection.name === "properties");
 
 if (collectionExists) {
    //!Borrar la base de datos pero solo los datos un truncate
  if (db.db.listCollections({ name: "properties" }).filter.name) {
   console.log("borra properties");
   db.dropCollection("properties");
 }
 }
 //? inserto los datos de aux en la base de datos
    await propiedades.insertMany(copiaBD);

    fechaHoraActual = new Date();
    horaFormateada = formatoHoraColombia.format(fechaHoraActual);

    console.log(`FINALIZACION DE ACTUALIZACION DE DATOS ${horaFormateada}`);
   return "Datos guardados con exito";
} catch (error) {
  return `error en la creacion de la base datos ${error}`
}

};

module.exports = savePropertiesController;
  