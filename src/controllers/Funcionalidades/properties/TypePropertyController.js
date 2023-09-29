
const { forIn } = require("lodash");
const propiedades = require("../../../models/Propiedades/Property");
const TypePropertyController = async (req) => {
    // { updated_at: {$gte:"2022-04-15 18:49:24",$lte: "2023-06-30 18:49:24"} }
  
    const tipes_id = await propiedades.distinct("id_property_type");
// const properties = await propiedades.find({ city_label: { $in: tipes_id }});

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
const tipe_property = []
  for (const iterator of tipes_id) {
    tipe_property.push({opcion:tipo_inmueble[iterator],name:"tipeproperty",value:iterator})
  }
return tipe_property
  };
  
  module.exports = TypePropertyController;