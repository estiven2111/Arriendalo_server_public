const propiedades = require("../../../models/Propiedades/Property");
const { propertyObject, validation } = require("./propertyMethos");
const user = require("../../../models/Personas/User/User");
const SearchPropertiesController = async (req) => {
  const {
    searchs,
    petfriendly,
    exclusive,
    bathrooms,
    garages,
    bedrooms,
    stratum,
    pricemin,
    pricemax,
    areamin,
    areamax,
    priceMinMax,
    tipeproperty,
    ciudad,
    habitaciones,
    tipo,
  } = req.query;

  let property;
  let activas;
  let condition = [];
  activas = [
    { status_on_page_label: "Active" },
    { status_on_page_label: "Outstanding" },
  ];

  if (!ciudad && !habitaciones && !tipo) {
    
   
    if (
      searchs ||
      petfriendly === true ||
      exclusive ||
      bathrooms ||
      garages ||
      bedrooms ||
      stratum ||
      tipeproperty ||
      priceMinMax ||
      pricemin ||
      pricemax
      ) {
        let filters = {};
        if (searchs) {
          const searchV = validation(searchs);
          // filters.city_label = { $regex: new RegExp(searchV, "i") } 
          filters.observations = { $regex: new RegExp(searchV, "i") } 
        }
        if (petfriendly === true) {
          filters.mascotas = petfriendly;
        }

        if (exclusive) {
          filters.status_on_page_label = exclusive;
        }

        if (bathrooms) {
          const bathroomsFilter = {};

          if (bathrooms === "5") {
            bathroomsFilter.$gte = Number(bathrooms);
            filters.bathrooms = bathroomsFilter;
          } else {
            filters.bathrooms = bathrooms;
          }
        }

        if (garages) {
          const garagesFilter = {};

          if (garages === "3") {
            garagesFilter.$gte = Number(garages);
            filters.garages = garagesFilter;
          } else {
            filters.garages = garages;
          }
        }

        if (bedrooms) {
          const bedroomsFilter = {};

          if (bedrooms === "5") {
            bedroomsFilter.$gte = Number(bedrooms);
            filters.bedrooms = bedroomsFilter;
          } else {
            filters.bedrooms = bedrooms;
          }
        }

        if (stratum) {
          const stratumFilter = {};

          if (stratum === "6") {
            stratumFilter.$gte = Number(stratum);
            filters.stratum = stratumFilter;
          } else {
            filters.stratum = stratum;
          }
        }
        if (tipeproperty) {
          filters.id_property_type = tipeproperty;
        }

        
        if (pricemin || pricemax) {
          // condition.push({
          //   rent_price: { $gte: parseInt(pricemin), $lte: parseInt(pricemax) },
          // });
          filters.rent_price = { $gte: parseInt(pricemin), $lte: parseInt(pricemax) }
        }
        condition.push(filters);
        property = await propiedades
        .find({ $and: [{ $or: activas }, { $or: condition }] })
        .sort(priceMinMax ? { rent_price: Number(priceMinMax) } : {});
      return propertyObject(property);
      }
    
  } 
  // else {
   if (ciudad || habitaciones || tipo) {
    const filtered = {};
    if (ciudad !== "") {
      filtered.city_label = { $regex: new RegExp(validation(ciudad), "i") };
    }

    if (habitaciones !== "") {
      filtered.bedrooms = habitaciones;
    }

    if (tipo !== "") {
      filtered.id_property_type = tipo;
    }
    property = await propiedades.find({ $or: [filtered] })
    .sort(priceMinMax ? { rent_price: Number(priceMinMax) } : {});
    return propertyObject(property);
   }
 
  property = await propiedades.find({ $or: activas })
  .sort(priceMinMax ? { rent_price: Number(priceMinMax) } : {});
  return propertyObject(property);
};

module.exports = SearchPropertiesController;

// //? de esta forma busco valores que tenga la concidencia exacta enre esos valores
// const property = await propiedades.find({ rent_price:{$in: [1,0]} });

// //?  me devuelve los valores menores a 3000000
// const property = await propiedades.find({ rent_price:{$lt: 3000000} });

// //? operador AND poniendo la coma le pongo que sea an dentro del mismo {} de la consulta
// const property = await propiedades.find({ "OTRO ATRIBUTO STRING": 0 , rent_price:{$lt: 3000000} });

// //? OPERADOR OR   {$or[ {consulta } ] }
// const propertya = await propiedades.find({ $or:[{"OTRO ATRIBUTO STRING": 0 }, {rent_price: {$lt:3000000}} ]});

// //? COMBINACION DE AND Y OR
// const propertyA = await propiedades.find({"ATRIBUTO":"RESULT", $or:[{"OTRO ATRIBUTO STRING": 0 }, {rent_price: {$lt:3000000}} ]});

// //? PARA BUSCAR DENTRO DE UN ARRAY EJEMPLO FEACTURE O GALLERY pero debe de tener todos los campos no basta solo con una
// const propertyA = await propiedades.find({ "Feacture" : ["valor","valor"] });

// //? PARA BUSCAR EN EL ARRAY Y QUE CON UNA EXACTITUD ME DEVUELVA TODOS LOS VALORES DE LA COLLECION
// const propertyA = await propiedades.find({ "Feacture" : {$all:["valor","valor"]} });

// //? PARA BUSCAR DENTRO DE UN OBJ DENTRO DE LA COLLECCION PERO PONIENDO TODOS LOS ATRIBUTOS ADYACENTES
// const propertyA = await propiedades.find({ "Feacture" : {"ATRIBUTO":"VALOR","ATRIBUTO2":"VALOR2"} });

// //? PARA BUSCAR DENTRO DEL OBJETO Y UN DATO ESPECIFICO SE PONE
// const propertyA = await propiedades.find({ "Feacture.ATRIBUTO" : "VALOR" });

// //?REGEX SIRVE COMO OPERADOR LIKE QUE TIENE ENCUENTA CUALQUIER LETRA DESPUES DE LA PRIMERA
// const propertyA = await propiedades.find({
//   status: 'A',
//   $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }]
// });
