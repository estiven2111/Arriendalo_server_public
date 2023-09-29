const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  id_user: { type: Number },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  user_type: { type: String },
  has_profile: { type: String }, //bollean o string ?
  phone: { type: Number },
  cell_phone: { type: String },
  address: { type: String },
  photo: { type: String },
  with_whatsapp: { type: Number },
  department: { type: String },
  linkedin: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  work_experience: { type: String },
  degree: { type: String },
  about: { type: String },
  password: { type: String },
  whatsapp: { type: String },
}
//!validar para creacion de db para que no tenga en cuenta las tildes
, {
  default_language: 'spanish',
  collation: { locale: 'es', strength: 2 }
});

const modelUser = model("user", userSchema);
module.exports = modelUser