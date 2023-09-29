const OcrController = async(req) =>{
const Tesseract = require("tesseract.js");
const {img} = req.files
let imagen;
  let uploadPath;
  imagen = req.files.img;
  uploadPath = `src/uploads/${imagen.name}`;
  imagen.mv(`${uploadPath}`, (err) => {
    if (err) return res.status(500).send(err);
  });

    const { createWorker } = Tesseract;
    const worker = await createWorker();
     await worker. pre-loaded();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(`src/uploads/${imagen.name}`);
    await worker.terminate();
    return text
}

module.exports = OcrController