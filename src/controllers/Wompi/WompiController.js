const crypto = require('crypto');
require("dotenv").config();
const {PUB_PROD} = process.env
const WompiController = async(req) =>{
    const referencia = req.body
    const claveWasi = PUB_PROD
    referencia.monto = 5000000 // 50 mil con decimales
    const moneda = "COP"
    var cadenaConcatenada = `${referencia.id_form}${referencia.monto}${moneda}${claveWasi}`
   
    //Ejemplo
    const encondedText = new TextEncoder().encode(cadenaConcatenada);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); 
   
    referencia.security = hashHex
    referencia.key = claveWasi
    return referencia
}

module.exports = WompiController