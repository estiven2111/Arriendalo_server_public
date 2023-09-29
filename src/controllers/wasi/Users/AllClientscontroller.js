const axios = require("axios");
const { Client } = require("../../../db");
const AllClientscontroller = async (req) => {
    const {page} = req.query
  const response = await`https://api.wasi.co/v1/property/search?id_company=15338500&wasi_token=YF8B_4DPZ_psmw_rQrs&skip=${page}`
return response.data;
};

module.exports = AllClientscontroller;
