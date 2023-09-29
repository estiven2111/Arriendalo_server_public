const axios = require("axios");
require("dotenv").config();
const { typeproperty } = require("./propertyMethos");
const { db } = require("../../../db");
const propiedades = require("../../../models/Propiedades/Property");
const user = require("../../../models/Personas/User/User");
const { WASI_ID_COMPANY, WASI_TOKEN } = process.env;

const PagePropertyController = async (req) => {
  //! NO SE HACE LLAMADOS DESDE EL FRONT NO BORRAR AUN
  const { page } = req.query;
 
  let allProperty = [];
  let result = [];
  let pageProperty = [];
  let cont;
  let response;
  if (db.db.listCollections({ name: "properties" }).filter.name) {
    console.log("borra");
    db.dropCollection("properties");
  }
  for (let m = 0; m < 1; m++) {
    cont = 0;
    response = await axios.get(
      `https://api.wasi.co/v1/property/search?id_company=${WASI_ID_COMPANY}&wasi_token=${WASI_TOKEN}&id_status_on_page=5&skip=${m}`
    );

    allProperty = [...allProperty, response.data];
  }
  for (let i = 0; i < allProperty.length; i++) {
    let item = allProperty[i];

    for (let key in item) {
      if (key === "status" || key === "total") {
      } else {
        if (item.hasOwnProperty(key)) {
          const idResponsable = await user.findOne({
            id_user: item[key].id_user,
          });

          const nombre = idResponsable.first_name
       const id_propiedad = item[key].id_property
       const cell_phone = idResponsable.cell_phone
       const linkText = "Haz clic aquí"
       const linkURL = `https://arriendalo.com.co/propiedades/${id_propiedad}`
       const celeanNumber = cell_phone.replace(/\D/g, '');
        const formattedPhoneNumber = `+${celeanNumber}`;
        const message = `hola ${nombre} me intresa obtener informacion sobre la propiedad con codigo ${id_propiedad}`
        const encodedMessage = encodeURIComponent(`${message}\n${linkText}: ${linkURL}`);
        const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
        // const whatsappLink = `https://api.whatsapp.com/send?phone=${celeanNumber}&text=${encodedMessage}`;
          
          const userupdate = await user.updateOne(
            { id_user: idResponsable.id_user },
            { whatsapp: whatsappLink }
          );
          item[key] = {
            ...item[key],
            mascotas: false,
            amoblada: false,
            llaves: false,
            admin: false,
            user: idResponsable._id,
          };

          const exis = await propiedades.findOne({
            id_property: item[key].id_property,
          });
          if (exis) {
            console.log("existe.", item[key].id_property);
          } else {
            const property = await new propiedades(item[key]);
            await property.save();
            result.push(item[key]);
          }
        }
      }
    }
  }

  let images = [];
  result.map(async (pro) => {
    pro.galleries?.map((img) => {
      for (const key in img) {
        if (key !== "id") {
          images.push(img[key].url);
        }
      }
    });

    const tipoPropiedad = typeproperty(
      pro.id_property_type,
      pro.status_on_page_label
    );
    pageProperty.push({
      id_propiedad: pro.id_property,
      titulo: pro.title, //? devuelve el nombre de la ubicacion
      codigo: pro.id_property,
      tipo: tipoPropiedad.inmueble,
      direccion: pro.address,
      ciudad: pro.city_label,
      barrio: pro.zone_label,
      habitaciones: pro.bedrooms,
      metros_cuadrados: pro.area, //? se manejan 3 arear contruida,terreno y privada
      area_contruida: pro.built_area,
      area_privada: pro.private_area,
      exclusivo: tipoPropiedad.exclusivo,
      garajes: pro.garages,
      baños: pro.bathrooms,
      piso: pro.floor,
      estracto: pro.stratum,
      map: pro.map,
      latitud: pro.latitude,
      longitud: pro.longitude,
      precio_arriendo: pro.rent_price_label,
      fecha_creada: pro.created_at,
      imagenes: images,

    });
    images = [];
  });

  return allProperty;
};

module.exports = PagePropertyController;
