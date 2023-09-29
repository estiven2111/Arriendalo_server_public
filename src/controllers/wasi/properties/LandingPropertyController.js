const propiedades = require("../../../models/Propiedades/Property");
const {propertyObject} = require("./propertyMethos");
const LandingPropertyController = async (req) => {

  const property = await propiedades.find().sort({ updated_at: -1 }).limit(10); // ? me obtiene el elemento de la coleccion

  return propertyObject(property);
};

module.exports = LandingPropertyController;
