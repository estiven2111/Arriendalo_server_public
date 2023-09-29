//api.wasi.co/v1/property/get/#id_property
const cheerio = require("cheerio");
const axios = require("axios");
const propiedades = require("../../../models/Propiedades/Property");
const user = require("../../../models/Personas/User/User");
require("dotenv").config();
const { typeproperty } = require("./propertyMethos");
const { ObjectId } = require("bson");
const { WASI_ID_COMPANY, WASI_TOKEN } = process.env;
const DetailPropertyController = async (req) => {
  const { id } = req.query;
  // const response = await axios.get(
  //   `https://api.wasi.co/v1/property/get/${id}?id_company=${WASI_ID_COMPANY}&wasi_token=${WASI_TOKEN}`
  // );
  // const pro = response.data;
  const pro = await propiedades.findOne({ id_property: id });
 
  
  if (pro) {
  const aso = await user.find({ _id: pro.user });
    let images = [];
  pro.galleries?.map((img) => {
    for (const key in img) {
      if (key !== "id") {
        images.push(img[key].url);
      }
    }
  });

  //todo limpieza de observaciones me quita todo el texto html
  const observaciones = await cheerio.load(pro.observations);
  let textoLimpio = observaciones.text();
  textoLimpio = textoLimpio.replace(/(\n|\\)/g, "");
  textoLimpio = textoLimpio.replace(/(&quot;)/g, '"');
  textoLimpio = textoLimpio.replace(/(\")/g, "");

  const tipoPropiedad = typeproperty(
    pro.id_property_type,
    pro.status_on_page_label
  );

  const detailproperty = {
    id_propiedad: pro.id_property,
    responsable: pro.id_user,
    titulo: pro.title, //? devuelve el nombre de la ubicacion
    codigo: pro.id_property,
    tipo: tipoPropiedad.inmueble,
    direccion: pro.address,
    ciudad: pro.city_label,
    barrio: pro.zone_label,
    habitaciones: pro.bedrooms,
    observaciones:textoLimpio,
    metros_cuadrados: pro.area, //? se manejan 3 arear contruida,terreno y privada
    area_contruida: pro.built_area,
    area_privada: pro.private_area,
    exclusivo: tipoPropiedad.exclusivo,
    garajes: pro.garages,
    baños: pro.bathrooms,
    piso: pro.floor,
    estrato: pro.stratum,
    mapa: pro.map,
    latitud: pro.latitude,
    longitud: pro.longitude,
    precio_arriendo: pro.rent_price_label,
    fecha_creada: pro.created_at,
    imagenes: images,
    features: pro.features,
    petfriendly: pro.petfriendly,
    amoblada: pro.amoblada,
    megusta: pro.megusta,
    llaves: pro.llaves,
    whatsapp:pro.whatsapp,
    user:aso
  };

  return detailproperty;
  }else{
    return false
  }
  
};

module.exports = DetailPropertyController;