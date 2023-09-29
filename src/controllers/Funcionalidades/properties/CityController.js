const propiedades = require("../../../models/Propiedades/Property");
const CityController = async (req) => {
    // { updated_at: {$gte:"2022-04-15 18:49:24",$lte: "2023-06-30 18:49:24"} }
  
    const cities = await propiedades.distinct("city_label");
// const properties = await propiedades.find({ city_label: { $in: cities }});
for (const iterator of cities) {
    
}
const cities_ = []
  for (const iterator of cities) {
    cities_.push({name:iterator,value:iterator})
  }
return cities_
  };
  
  module.exports = CityController;