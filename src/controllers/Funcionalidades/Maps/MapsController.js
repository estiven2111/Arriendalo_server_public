require("dotenv").config()
const axios = require("axios")
const {KEY_MAPS} = process.env
const MapsController = async (req) =>{
// const pet =await  axios.get(`https://maps.googleapis.com/maps/api/js?key=${KEY_MAPS}&callback=initMap`);
// console.log("respuesta",pet)
// const googleMapsResponse = await axios.get(
//     `https://maps.googleapis.com/maps/api/js?key=${KEY_MAPS}&callback=initMap`, // Cambiar la URL según tu necesidad
//     {
//       params: {
//         key: 'TU_CLAVE_DE_API', // Agrega aquí tu clave de Google Maps
//         query: 'Lugar que deseas buscar' // Parámetros de búsqueda
//       }
//     }
//   );
//  const googleMapsScript = document.createElement("script");
    const  googleMapsScript =
        // "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnFS0Lau3P23hTkDA9nzajVKlfAyppYW8&callback=initMap&v=weekly";
      (`https://maps.googleapis.com/maps/api/js?key=${KEY_MAPS}&callback=initMap`);
       
      
    return googleMapsScript
}

module.exports = MapsController