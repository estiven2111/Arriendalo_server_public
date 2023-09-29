const { Schema, model } = require("mongoose");
const { modelUser } = require("../Personas/User/User");

const PropertyShema = new Schema({
  id_property: {
    type: Number,
    unique: true
  },
  id_company: {
    type: Number,
  },
  id_user: {
    type: Number,
  },
  for_sale: {
    type: Boolean,
  },
  for_rent: {
    type: Boolean,
  },
  for_transfer: {
    type: Boolean,
  },
  for_temporary_rent: {
    type: Boolean,
  },
  id_property_type: {
    type: Number,
  },
  id_country: {
    type: Number,
  },
  country_label: {
    type: String,
  },
  id_region: {
    type: Number,
  },
  region_label: {
    type: String,
  },
  id_city: {
    type: Number,
  },
  city_label: {
    type: String,
  },
  id_location: {
    type: Number,
  },
  location_label: {
    type: String,
  },
  id_zone: {
    type: Number,
  },
  zone_label: {
    type: String,
  },
  id_currency: {
    type: Number,
  },
  iso_currency: {
    type: String,
  },
  iso_currency: {
    type: String,
  },
  title: {
    type: String,
  },
  address: {
    type: String,
  },
  area: {
    type: String,
  },
  id_unit_area: {
    type: String,
  },
  unit_area_label: {
    type: String,
  },
  built_area: {
    type: String,
  },
  id_unit_built_area: {
    type: String,
  },
  unit_built_area_label: {
    type: String,
  },
  private_area: {
    type: String,
  },
  id_unit_private_area: {
    type: String,
  },
  unit_private_area_label: {
    type: String,
  },
  maintenance_fee: {
    type: String,
  },
  maintenance_fee_label: {
    type: String,
  },
  sale_price: {
    type: String,
  },
  sale_price_label: {
    type: String,
  },
  rent_price: {
    type: Number,
  },
  rent_price_label: {
    type: String,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  garages: {
    type: Number,
  },
  floor: {
    type: Number,
  },
  stratum: {
    type: Number,
  },
  observations: {
    type: String,
  },
  video: {
    type: String,
  },
  id_property_condition: {
    type: String,
  },
  property_condition_label: {
    type: String,
  },
  map: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  building_date: {
    type: String,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
  reference: {
    type: String,
  },
  id_rents_type: {
    type: String,
  },
  rents_type_label: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  id_label: {
    type: String,
  },
  label: {
    type: String,
  },
  label_color: {
    type: String,
  },
  main_image: {
    type: Object,
  },
  registration_number: {
    type: String,
  },
  id_status_on_page: {
    type: String,
  },
  status_on_page_label: {
    type: String,
  },
  id_publish_on_map: {
    type: String,
  },
  publish_on_map_label: {
    type: String,
  },
  network_share: {
    type: Boolean,
  },
  visits: {
    type: Number,
  },
  comment: {
    type: String,
  },
  id_availability: {
    type: String,
  },
  availability_label: {
    type: String,
  },
  owner: {
    type: String,
  },
  galleries: {
    type: Object,
  },
  features: {
    type: Object,
  },
  link: {
    type: String,
  },
  mascotas: {
    type: Boolean,
  },
  amoblada: {
    type: Boolean,
  },
  megusta: {
    type: Number,
  },
  llaves: {
    type: Boolean,
  },
  admin: {
    type: Boolean,
  },
  whatsapp:{
    type:String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "modelUser",
  },
  
}
//!validar para creacion de db para que no tenga en cuenta las tildes
, {
  default_language: 'spanish',
  collation: { locale: 'es', strength: 2 }
}
);

const modelProperty = model("PropertyAux", PropertyShema);
module.exports = modelProperty;
