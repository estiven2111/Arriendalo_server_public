const propiedades = require("../../../models/Propiedades/Property");
const PriceMinMaxController = async (req) => {
    
    const price = await propiedades.distinct("rent_price");

const maxValue = Math.max(...price);
const minValue = Math.min(...price);
const maxmin = [minValue,maxValue]
return maxmin
  };
  
  module.exports = PriceMinMaxController;