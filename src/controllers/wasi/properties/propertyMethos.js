const axios = require("axios");
const user = require("../../../models/Personas/User/User");

//? este metodo reorganiza todo el objeto que viene de la api para renderizar la informacion necesaria
const propertyObject = (properties) => {
  let allProperty = [];
  let page = []
  allProperty = [...allProperty, properties];
  let result = [];
  for (let i = 0; i < allProperty.length; i++) {
    let item = allProperty[i];
    for (let key in item) {
      if (key === "status" || key === "total") {
      } else {
        if (item.hasOwnProperty(key)) {
          result.push(item[key]);
        }
      }
    }
  }
 
  const promises = result.map(async (pro) => {
    const images = [];
    pro.galleries?.map((img) => {
      for (const key in img) {
        if (key !== "id") {
          images.push(img[key].url);
        }
      }
    });
  
    const tipoPropiedad = typeproperty(pro.id_property_type, pro.status_on_page_label);
    const aso = await user.find({ _id: pro.user });
  
    return {
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
      estrato: pro.stratum,
      map:pro.map,
      latitud:pro.latitude,
      longitud:pro.longitude,
      precio_arriendo: pro.rent_price_label,
      precio: pro.rent_price,
      fecha_creada: pro.created_at,
      imagenes: images,
      features: data.features,
      petfriendly: pro.petfriendly,
      amoblada: false,
      megusta: 0,
      llaves: false,
      whatsapp:pro.whatsapp,
      user:aso
    };
  });
 
const properti = Promise.all(promises)
    .then((pageProperty) => pageProperty)
    .catch((error) => {
      console.error(error);
    });

return properti
};

const typeproperty = (id_type, exclusive) => {
  let exclusivo = false;
  if (exclusive === "Outstanding") exclusivo = true;
  const tipo_inmueble = {
    1: "Casa",
    2: "Apartamento",
    3: "Local",
    4: "Oficina",
    5: "Lote / Terreno",
    6: "Lote / Terreno Comercial",
    7: "Finca",
    8: "Bodega",
    10: "Chalet",
    11: "Casa Casa Campestre",
    12: "Hoteles",
    13: "Finca - Hoteles",
    14: "Apartaestudio",
    15: "Consultorio",
    16: "Edificio",
    17: "Lote / Terreno de Playa",
    18: "Hostal",
    19: "Condominio",
    20: "Dúplex",
    21: "Penthouse",
    22: "Bungalow",
    23: "Galpon Industrial",
    24: "Casa de Playa",
    25: "Piso",
    26: "Garaje",
    27: "Cortijo",
    28: "Cabañas",
    29: "Isla",
    30: "Nave Industrial",
    31: "Campos, Chacras y Quintas",
    32: "Terreno",
    33: "Ph",
  };
  data = {
    inmueble: tipo_inmueble[id_type],
    exclusivo: exclusivo,
  };

  return data;
};

const validation = (search) => {
  const regexCity = new RegExp(
    search.replace(/[áéíóúüñnaeiou]/gi, (match) => {
      const characters = {
        á: "[aáAÁ]",
        é: "[eéEÉ]",
        í: "[iíIÍ]",
        ó: "[oóOÓ]",
        ú: "[uúUÚ]",
        ü: "[uüUÜ]",
        ñ: "[nñNÑ]",
        n: "[nñNÑ]",
        a: "[aáAÁ]",
        e: "[eéEÉ]",
        i: "[iíIÍ]",
        o: "[oóOÓ]",
        u: "[uúUÚ]",
      };
      const lowercaseMatch = match.toLowerCase();
      return characters[match] || characters[lowercaseMatch] || match;
    }),
    "gi"
  );
  return regexCity;
};

module.exports = { propertyObject, typeproperty, validation };
