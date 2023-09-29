const propiedades = require("../../../models/Propiedades/Property");
const {propertyObject} = require("./propertyMethos");
const AllPropertyController = async () => {
  //? "Active"
  //? "id_status_on_page": "1",
  //?   "status_on_page_label": "Active"
  //? destacado
  //? "id_status_on_page": "3",
  //?   "status_on_page_label": "Outstanding"

  //?   "id_status_on_page": "2",
  //?   "status_on_page_label": "Inactive"

   //?   "id_status_on_page": "5",
  //?   "status_on_page_label": "Active y Outstanding"

  const condition = [
    { status_on_page_label: "Active" },
    { status_on_page_label: "Outstanding" },
  ];
//{ $or: condition }  .maxTimeMS(50000).
  const property = await propiedades.find({ $or: condition }); // ? me obtiene el elemento de la coleccion
 
   return propertyObject(property);

};

module.exports = AllPropertyController;
