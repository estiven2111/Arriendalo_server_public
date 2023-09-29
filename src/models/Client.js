const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("cliente", {
    id_property: {
      type: DataTypes.INTEGER,
    },
    id_company: {
      type: DataTypes.INTEGER,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
    for_sale: {
      type: DataTypes.BOOLEAN,
    },
    // for_rent: {
    //   type: DataTypes.BOOLEAN,
    // },
    // for_transfer: {
    //   type: DataTypes.BOOLEAN,
    // },
    // for_temporary_rent: {
    //   type: DataTypes.BOOLEAN,
    // },
    // id_property_type: {
    //   type: DataTypes.INTEGER,
    // },
    // id_country: {
    //   type: DataTypes.INTEGER,
    // },
    // country_label: {
    //   type: DataTypes.STRING,
    // },
    // id_region: {
    //   type: DataTypes.INTEGER,
    // },
    // region_label: {
    //   type: DataTypes.STRING,
    // },
    // id_city: {
    //   type: DataTypes.INTEGER,
    // },
    // city_label: {
    //   type: DataTypes.STRING,
    // },
    // id_location: {
    //   type: DataTypes.INTEGER,
    // },
    // id_location: {
    //   type: DataTypes.STRING,
    // },
    // id_zone: {
    //   type: DataTypes.INTEGER,
    // },
    // zone_label: {
    //   type: DataTypes.STRING,
    // },
    // id_currency: {
    //   type: DataTypes.INTEGER,
    // },
    // name_currency: {
    //   type: DataTypes.STRING,
    // },
    // title: {
    //   type: DataTypes.STRING,
    // },
    // address: {
    //   type: DataTypes.STRING,
    // },
    // area: {
    //   type: DataTypes.STRING,
    // },
    // id_unit_area: {
    //   type: DataTypes.STRING,
    // },
    // unit_area_label: {
    //   type: DataTypes.STRING,
    // },
    // built_area: {
    //   type: DataTypes.STRING,
    // },
    // id_unit_built_area: {
    //   type: DataTypes.STRING,
    // },
    // unit_built_area_label: {
    //   type: DataTypes.STRING,
    // },
    // private_area: {
    //   type: DataTypes.STRING,
    // },
    // id_unit_private_area: {
    //   type: DataTypes.STRING,
    // },
    // unit_private_area_label: {
    //   type: DataTypes.STRING,
    // },
    // maintenance_fee: {
    //   type: DataTypes.STRING,
    // },
    // maintenance_fee_label: {
    //   type: DataTypes.STRING,
    // },
    // sale_price: {
    //   type: DataTypes.STRING,
    // },
    // sale_price_label: {
    //   type: DataTypes.STRING,
    // },
    // rent_price: {
    //   type: DataTypes.STRING,
    // },
    // rent_price_label: {
    //   type: DataTypes.STRING,
    // },
    // bedrooms: {
    //   type: DataTypes.STRING,
    // },
    // sale_price: {
    //   type: DataTypes.STRING,
    // },
    // bathrooms: {
    //   type: DataTypes.STRING,
    // },
    // garages: {
    //   type: DataTypes.STRING,
    // },
    // floor: {
    //   type: DataTypes.STRING,
    // },
    // stratum: {
    //   type: DataTypes.STRING,
    // },
    // observations: {
    //   type: DataTypes.STRING,
    // },
    // video: {
    //   type: DataTypes.STRING,
    // },
    // id_property_condition: {
    //   type: DataTypes.STRING,
    // },
    // property_condition_label: {
    //   type: DataTypes.STRING,
    // },
    // map: {
    //   type: DataTypes.STRING,
    // },
    // latitude: {
    //   type: DataTypes.STRING,
    // },
    // longitude: {
    //   type: DataTypes.STRING,
    // },
    // building_date: {
    //   type: DataTypes.STRING,
    // },
    // created_at: {
    //   type: DataTypes.STRING,
    // },
    // updated_at: {
    //   type: DataTypes.STRING,
    // },
    // reference: {
    //   type: DataTypes.STRING,
    // },
    // id_rents_type: {
    //   type: DataTypes.STRING,
    // },
    // rents_type_label: {
    //   type: DataTypes.STRING,
    // },
    // zip_code: {
    //   type: DataTypes.STRING,
    // },
    // id_label: {
    //   type: DataTypes.STRING,
    // },
    // label: {
    //   type: DataTypes.STRING,
    // },
    // label_color: {
    //   type: DataTypes.STRING,
    // },
    // registration_number: {
    //   type: DataTypes.STRING,
    // },
    // id_status_on_page: {
    //   type: DataTypes.STRING,
    // },
    // status_on_page_label: {
    //   type: DataTypes.STRING,
    // },
    // id_publish_on_map: {
    //   type: DataTypes.STRING,
    // },
    // publish_on_map_label: {
    //   type: DataTypes.STRING,
    // },
    // network_share: {
    //   type: DataTypes.BOOLEAN,
    // },
    // visits: {
    //   type: DataTypes.INTEGER,
    // },
    // comment: {
    //   type: DataTypes.STRING,
    // },
    // id_availability: {
    //   type: DataTypes.STRING,
    // },
    // availability_label: {
    //   type: DataTypes.STRING,
    // },
    // owner: {
    //   type: DataTypes.STRING,
    // },
    // link: {
    //   type: DataTypes.STRING,
    // },
  });
};
