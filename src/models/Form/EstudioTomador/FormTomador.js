const moment = require('moment-timezone');
const { Schema, model } = require("mongoose");

const FormTomadorShema = new Schema(
  {
    id_form: {
      type: String,
      unique: true,
      allowNull: false,
    },
    id_form_coa: {
      type: String,
      allowNull: true,
    },
    persona: {
      type: String,
      allowNull: false,
    },
    cod_inmueble: {
      type: String,
      allowNull: false,
    },
    email: {
      type: String,
      allowNull: false,
    },
    nom_completo: {
      type: String,
      allowNull: false,
    },
    tipo_doc: {
      type: String,
      allowNull: false,
    },
    num_doc: {
      type: String,
      allowNull: false,
    },
    num_whatsapp: {
      type: String,
      allowNull: false,
    },
    pais: {
      type: String,
      allowNull: false,
    },
    fechaexp_doc: {
      type: String,
      allowNull: false,
    },
    otras_personas: {
      type: String,
      allowNull: false,
    },
    datos_personas: {
      type: Array,
      allowNull: true,
    },
    mascotas: {
      type: String,
      allowNull: false,
    },
    datos_mascotas: {
      type: Array,
      allowNull: true,
    },
    autorizacion_datos: {
      type: String,
      allowNull: false,
    },
    act_economica: {
      type: String,
      allowNull: false,
    },
    datos_act_economica: {
      type: Array,
      allowNull: true,
    },
    ingresos: {
      type: String,
      allowNull: false,
    },
    egresos: {
      type: String,
      allowNull: false,
    },
    datos_referencias: {
      type: Array,
      allowNull: true,
    },
    urls_img: {
      type: Array,
      allowNull: true,
    },
    estado: {
      type: String,
      allowNull: true,
      default: "En estudio",
    },
    ref_pago:{
      type: String,
      allowNull: true,
    },
    aplica_como:{
      type: String,
      allowNull: true,
    }
  },
  {
    default_language: "spanish",
    collation: { locale: "es", strength: 2 },
    timestamps: true 
    
  }
);

// Configura la zona horaria de Colombia para las fechas
FormTomadorShema.pre('validate', function (next) {
  this.createdAt = moment().tz('America/Bogota');
  this.updatedAt = moment().tz('America/Bogota');
  next();
});

const modelFormTomador = model("formTomador", FormTomadorShema);
module.exports = modelFormTomador;
