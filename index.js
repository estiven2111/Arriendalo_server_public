const app = require("./src/app");
const {  SaveUsersController } = require("./src/controllers");
require("./src/db")
const port =3002 || process.env.PORT 

  
  app.listen(port, () => {
    // Intervalo de tiempo en milisegundos (1 hora = 60 minutos * 60 segundos * 1000 milisegundos)
     const intervalo = 60 * 60 * 1000;

    // Intervalo de tiempo en milisegundos (1 minuto = 60 segundos * 1000 milisegundos)
   // const intervalo = 60 * 1000;
   // setInterval(SaveUsersController, intervalo);
    console.log('%s listening at ',port); // eslint-disable-line no-console
 });
// });



