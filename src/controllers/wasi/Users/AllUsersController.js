const axios = require("axios");
const AllUsersController = async () => {
  const response = await axios.get(
    "https://api.wasi.co/v1/user/all-users?id_company=15338500&wasi_token=YF8B_4DPZ_psmw_rQrs"
  );
  return result;
};

module.exports = AllUsersController;
