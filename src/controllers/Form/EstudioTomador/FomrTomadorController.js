const formularioTomador = require("../../../models/Form/EstudioTomador/FormTomador");
// const fs = require("fs");
// const fs_extra = require("fs-extra");
// const path = require("path");
const { Storage } = require("@google-cloud/storage");
require("dotenv").config;
const { PROJECT_ID, PRIVATE_KEY, CLIENT_EMAIL, BUCKETNAME } = process.env;
// const storage = new Storage({
//   keyFilename: "./keyimg.json", // Ruta a tus credenciales
//   projectId: "pruebadeploy-393802", // Cambia esto a tu ID de proyecto
// });
const fs = require('fs');
const path = require('path');
const storage = new Storage({
  projectId: PROJECT_ID,
  credentials: {
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
});

const bucketName = BUCKETNAME; // Cambia esto al nombre de tu bucket

const FomrTomadorController = async (req) => {

  let urls_img = [];
    let datosEstudio = req.body;
  
  
     const datos_act_economina = JSON.parse(datosEstudio.datos_act_economica)
     datosEstudio.datos_act_economica = datos_act_economina
     const datos_personas = JSON.parse(datosEstudio.datos_personas)
     datosEstudio.datos_personas = datos_personas
      datosEstudio.datos_mascotas = JSON.parse(datosEstudio.datos_mascotas)
      datosEstudio.datos_referencias = JSON.parse(datosEstudio.datos_referencias)

   


    const fomrexist = await formularioTomador.findOne({
      id_form: datosEstudio.id_form,
    });
   
 


    if (!fomrexist) {
      
      const files = req.files
      if (!files || Object.keys(files).length === 0) {
        return "no hay archivos";
      } else {
        for (const keys in files) {
          console.log(files[keys].length)
        for (let i = 0; i < files[keys].length; i++) {
          
        
           
            const archivo = files[keys][i];
  
            const uploadedFile = archivo;
            const filePath = `${datosEstudio.nom_completo}/${uploadedFile.name}`;
            const uploadStream = storage
              .bucket(bucketName)
              .file(filePath)
              .createWriteStream();
            // // const file = storage.bucket(bucketName).file(uploadedFile.name);
            const publicUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;
  
            uploadStream.on("error", (err) => {
              console.log(err);
              return "error en la imagen";
            });
  
            uploadStream.on("finish", async () => {
              // console.log("finalizo la subida en segundo plano");
            });
  
            uploadStream.end(uploadedFile.data);
            urls_img.push(publicUrl);
            datosEstudio = {
              ...datosEstudio,
              urls_img,
            };
          }
        }
      }
      try {
        const form = await new formularioTomador(datosEstudio);
      await form.save();
      } catch (error) {
        console.log(error.message);
      }
      return "guardado exitoso";
    } else {
      console.log("entro al else")
      return `El usuario ${fomrexist.nom_completo} ya  creo el formulario ${fomrexist.id_form}, su estado es ${fomrexist.estado}`;
    }
  
  //!estados del fomulario son // pendiente,revision,aceptado o rechazado
};

//! esto para immplementar la descarga de la imagen
// const dowloadImage = async () => {
//   //! aca debo poner el nombre del archivo o en su defecto la url de accesso para sacar el nombre
//   const url =
//     "https://storage.googleapis.com/arriendalobucket/targetas/jeugos/Default_Hyper_realistic_spiderman_ancient_samurai_style_use_sa_1_7f41ff36-48f2-4b8f-afe0-41d88b2c6876_1.jpg";

//   // Obtén el nombre del archivo a partir de la URL
//   const nombreArchivo = url.substring(url.lastIndexOf("/") + 1);

//   const filePath =
//     "targetas/jeugos/Default_Hyper_realistic_spiderman_ancient_samurai_style_use_sa_1_7f41ff36-48f2-4b8f-afe0-41d88b2c6876_1.jpg";
//   const file = storage.bucket(bucketName).file(filePath);
//   const data = await file.download();

//   res.setHeader("Content-disposition", "attachment; filename=" + nombreArchivo);
//   res.setHeader("Content-type", "image/jpeg");

//   // Envía los datos descargados como respuesta
//   return data[0];
// };

const moveImagen = () => {
  //TODO mover la imagen a una carpeta especifica
  // archivo.mv(`${uploadPath}`, (err) => {
  //   if (err) return res.status(500).send(err);
  //   const file = path.join(__dirname, "../../../..", "uploads", archivo.name);
  //todo ******************
  // fs.readFile(file, async function (err, data) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log("la data es ", file);
  //   try {
  //     await bucket.upload(archivo.tempFilePath, {
  //       destination: filePath,
  //       public: true, // Establece el objeto como público
  //       metadata: { cacheControl: "public, max-age=31536000" }, // Establece las cabeceras de cache
  //     });
  //   } catch (err) {
  //     console.error("el errooooooooooooss",err);
  //     return "error";
  //   }
  //   uploadStream.end(archivo.data);
  //    //eliminar(file);
  // });
  // todo  });
  //TODO mover la imagen a una carpeta especifica
};

// const eliminar = (file) => {
//   if (fs_extra.existsSync(file)) {
//     fs_extra.unlink(file);
//   } else {
//     console.log("El archivo no existe:", file);
//   }
// };

module.exports = FomrTomadorController;


// try {
    
//   console.log(req.files,datosEstudio)
//  } catch (error) {
//   console.log(error.message)
//  }
//   return
//   // Directorio donde se guardarán los archivos temporales
//   const tempDir = path.resolve('./temp');

//   try {
//     if (!fs.existsSync(tempDir)) {
//       fs.mkdirSync(tempDir);
//       console.log('Directorio creado:', tempDir);
//     } else {
//       console.log('El directorio ya existe:', tempDir);
//     }
//   } catch (error) {
//     console.error('Error al crear el directorio:', error);
//   }
//   const imageBuffers = [];
// try {
//     // Crear un array de objetos Buffer a partir de las URLs base64
   
//     if (typeof files === 'string') {
//       // Si solo tienes una URL base64, conviértela en un array
//       files = [files];
      
//     }

//     files.forEach(fileBase64 => {
//        const buffer = base64ToBuffer(fileBase64);
//       imageBuffers.push(buffer);
//     });

//     // // Escribir los objetos Buffer como archivos en el sistema de archivos
   
//     function base64ToBuffer(base64String) {
//       const matches = base64String.match(/^data:(.+);base64,(.+)$/);
//       if (!matches || matches.length !== 3) {
//         console.error('URL base64 inválida:', base64String);
//         throw new Error('Invalid base64 string');
//       }
    
//       const mimeType = matches[1];
//       console.log('MIME Type:', mimeType);
    
//       return Buffer.from(matches[2], 'base64');
//     }

//     imageBuffers.forEach((buffer, index) => {
//       const filePath = `${tempDir}/image_${Date.now()}_${index}.jpeg`; // Cambia la ruta y el nombre según tus necesidades
//       fs.writeFileSync(filePath, buffer);
//       console.log(`Archivo ${filePath} creado.`);
//     });
// } catch (error) {
//   console.log("el error es ", error);
// }
  
//  return
// try{
// fs.writeFileSync(filePath, buffer);
// // return
// // Convierte las imágenes base64 en archivos temporales
// const imageFiles = imagesBase64.map((base64, index) => {
// console.log(base64, index)
// // const filePath = `${tempDir}/image_${index}.jpeg`;
// // const buffer = Buffer.from(base64, 'base64');
// // fs.writeFileSync(filePath, buffer);
// // return filePath;
// });
// //  console.log(imageFiles)

// imageFiles.forEach(filePath => fs.unlinkSync(filePath));