const nodemailer = require("nodemailer");

// const fs = require("fs");
// const readline = require("readline");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
// const nodemailer = require('nodemailer');
// const { OAuth2 } = require('google-auth-library');
require("dotenv").config();
const { EMAIL, PASSWORD_EMAIL } = process.env;
const SendCorreoController = async (req) => {
  const datos = req.body;


  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: EMAIL,
      pass: PASSWORD_EMAIL,
    },
  };

  // const mensaje = {
  //   from: EMAIL,
  //   to: datos.email,
  //   subject: `Detalle del pago de estudio id inmueble ${datos.cod_inmueble}`,
  //   html: `
  //   <div style="background-color: black; padding: 10px 20px; text-align: center;">
  //       <img src="https://storage.googleapis.com/arriendalobucket/lola%20la%20mejor/download.png" alt="urbanClub! Logo" style="max-width: 400px;">
  //   </div>
  //   <title>PAGO EXITOSO</title>
  //   </head>
  //   <body>
  //      <div style="color: black; padding: 10px 20px; text-align: center;">
  //      <h2>PAGO EXITOSO</h2>

  //      <p>Estimado usuario ${datos.nom_completo},</p>

  //      <p>Recibimos su pago con éxito, nos pondremos en contacto con usted para brindarle más información acerca de su estudio</p>

  // <div style="color: black; text-align: center;">
  // <ul style="color: black; text-align: center;">
  // <li>estado del pago  ${datos.estado_pago} .</li>
  // <li>referencia de pago ${datos.id_form} .</li>
  // <li>referencia de pago ${datos.id_pago} .</li>
  // <li>Valor pagado $ 50.000,00</li>
  // <li>metodo de pago ${datos.tipo_pago}.</li>
  // </ul>
  // </div>
  //     <div style=" text-align: center;">
  //     <p>Atentamente,</p>
  //     <p>https://arriendalo.com.co</p>
  //     <p>Equipo de Soporte Técnico ayuda@arriendalo.com.co</p>
  //     <p>Equipo de Soporte Técnico https://arriendalo.com.co/ayuda</p>
  //     </div>
  //      </div>
  //   </body>`
  // }
  let titulo = ``;
  let htmlEstudio = ``;
  let botonaprovado = ``
  if (datos.estado_pago === "APPROVED") {
    titulo = ` <span style="text-transform: capitalize">${datos.nom_completo}</span>Tu aplicación para el inmueble con código <a href="https://arriendalo.com.co/propiedades/${datos.cod_inmueble}">${datos.cod_inmueble} </a> esta en estudio `;
    htmlEstudio = `
    <tr>
    <td align="center" valign="top" style="padding: 0; Margin: 0; width: 520px;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="font-size: 12px;  background-color: rgba(102, 155, 238, 0.5);">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">Valor pagado</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">${datos.precio}</th>
          </tr>
          <tr style="font-size: 12px;  background-color: rgba(237, 242, 247, 0.5);">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">método de pago</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">${datos.tipo_pago}</th>
          </tr>
          <tr style="font-size: 12px;  background-color: rgba(102, 155, 238, 0.5);">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">Estado del pago</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">Aprobado</th>
          </tr>
          <tr style="font-size: 12px;  background-color: rgba(237, 242, 247, 0.5);">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">Referencia de pago</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">${datos.ref_pago}</th>
          </tr>
          <tr style="font-size: 12px;  background-color: rgba(102, 155, 238, 0.5);">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">Número de transacción</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">${datos.id_pago}</th>
          </tr>
          <tr style="font-size: 12px;  background-color: rgba(237, 242, 247, 0.5);">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">pago a</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">${datos.merch_legal_name}</th>
          </tr>
          <tr style="font-size: 12px;  background-color: rgba(102, 155, 238, 0.5); ">
            <th style="padding: 8px 16px; text-align: left;  border-bottom: 1px solid white; color:#E2E2E3;">identificación</th>
            <th style="padding: 8px 20px; text-align: left; border-bottom: 1px solid white; color:#E2E2E3;">
              ${datos.merch_legal_id_tipo} ${datos.merch_legal_id}
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </td>
  </tr>
  


`;
  }

  if(datos.estado === "Aprobado"){
     botonaprovado = `
    <tr>
    <td align="center" valign="top" style="padding: 0; Margin: 0; width: 520px;">
     
      <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
        <tr>
          <td align="center" style="padding: 0; Margin: 0;">
          
            <span class="msohide es-button-border" style="border-style: solid; border-color: #2CB543; background: #38761d; border-width: 0px; display: block; border-radius: 30px; width: auto; mso-hide: all;">
              <a href="https://checkout.wompi.co/l/kSJqpG" class="es-button msohide es-button-1668505687743" target="_blank" style="mso-style-priority: 100 !important; text-decoration: none; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; color: #FFFFFF; font-size: 18px; display: block; background: #38761d; border-radius: 30px; font-family: Poppins, sans-serif; font-weight: normal; font-style: normal; line-height: 22px; width: auto; text-align: center; padding: 15px 5px; mso-padding-alt: 0; mso-border-alt: 10px solid #38761d; mso-hide: all;">Reservar el inmueble</a>
            </span>
           
          </td>
        </tr>
       
      </table>
    </td>
  </tr>
    `
  }
  

  const htmlContent = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family: arial, 'helvetica neue', helvetica, sans-serif">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Estudio_Aprobado</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <style type="text/css">
    </style>

    <style>
    /* Estilos del botón */
    .custom-button {
      display: inline-flex;
      align-items: center;
      padding: 10px 20px;
      background-color: #ffffff;
      color: black;
      font-family: Poppins, sans-serif;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    /* Efecto hover del botón */
    .custom-button:hover {
      background-color: #5983F3;
      transform: scale(1.05);
    }

    /* Estilos de la imagen dentro del botón */
    .button-icon {
      margin-right: 10px; /* Espacio entre la imagen y el texto */
      width: 24px; /* Ajusta el ancho de la imagen */
      height: 24px; /* Ajusta la altura de la imagen */
    }
  </style>
  </head>
  <body style="width: 100%; font-family: arial, 'helvetica neue', helvetica, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 0; Margin: 0;">
    <div class="es-wrapper-color" style="background-color: #001FAB;">
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; padding: 0; Margin: 0; width: 100%; height: 100%; background-repeat: repeat; background-position: center top; background-color: #001FAB;">
        <tr>
          <td valign="top" style="padding: 0; Margin: 0;">
            <table class="es-header" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%; background-color: transparent; background-repeat: repeat; background-position: center top;">
              <tr>
                <td align="center" style="padding: 0; Margin: 0;">
                </td>
              </tr>
            </table>
            <table class="es-content" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%;">
              <tr>
                <td align="center" style="padding: 0; Margin: 0;">
                  <table class="es-content-body" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px;">
                    <tr>
                      <td align="left" style="Margin: 0; padding-top: 20px; padding-bottom: 20px; padding-left: 40px; padding-right: 40px;">
                        <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                          <tr>
                            <td align="center" valign="top" style="padding: 0; Margin: 0; width: 520px;">
                              <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                <tr>
                                  <td align="center" style="padding: 0; Margin: 0;">
                                    <h1 style="Margin: 0; line-height: 60px; mso-line-height-rule: exactly; font-family: Poppins, sans-serif; font-size: 40px; font-style: normal; font-weight: bold; color: #E9E9E9;">
                                      😍 ¡${titulo}! 🎉
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="padding: 0; Margin: 0;">
                                    <img class="adapt-img" src="https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif" alt style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;" width="250">
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="Margin: 0; padding-top: 20px; padding-left: 40px; padding-right: 40px;">
                        <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                         
                                 
`;

  const html2 = `

  </table>
  </td>
</tr>
</table>
</td>
</tr>
</table>
<table class="es-footer" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%; background-color: transparent; background-repeat: repeat; background-position: center top;">
<tr>
<td align="center" style="padding: 0; Margin: 0;">
<table class="es-footer-body" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px;" bgcolor="#FFFFFF">
<tr>
  <td align="left" style="Margin: 0; padding-top: 20px; padding-bottom: 20px; padding-left: 40px; padding-right: 40px;">
    <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
      <tr>
        <td align="left" style="padding: 0; Margin: 0; width: 520px;">
          <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
            <tr>
              <td align="center" class="es-m-txt-c" style="padding: 0; Margin: 0;">
                  <button class="custom-button">
                      <img src="https://i.ibb.co/R6K7zpm/locationlogo.png" alt="" class="button-icon">
                      <a style="text-decoration:none;" href="https://arriendalo.com.co">Visítanos en nuestra página arriendalo.com.co</a>
                    </button>
                </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>

  </table>
  </td>
</tr>
</table>
</td>
</tr>
</table>
<table class="es-footer" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%; background-color: transparent; background-repeat: repeat; background-position: center top;">
<tr>
<td align="center" style="padding: 0; Margin: 0;">
<table class="es-footer-body" align="center" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px;" bgcolor="#FFFFFF">
<tr>
  <td align="left" style="Margin: 0; padding-top: 20px; padding-bottom: 20px; padding-left: 40px; padding-right: 40px;">
    <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
      <tr>
        <td align="left" style="padding: 0; Margin: 0; width: 520px;">
          <table width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
            <tr>
              <td align="center" class="es-m-txt-c" style="padding: 0; Margin: 0;">
                <p style="Margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: Poppins, sans-serif; line-height: 18px; color: #666666; font-size: 12px;">Esta dirección de correo electrónico fue generada automáticamente. Por favor, no respondas a este correo.</p>
                <p style="Margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: Poppins, sans-serif; line-height: 18px; color: #666666; font-size: 12px;">© 2023 Estudio_Approval. Todos los derechos reservados.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</body>
</html>
`;
  const mensajes = ` ${htmlContent}${htmlEstudio}${botonaprovado}${html2} `;
  

  try {
    const mensaje = {
      from: EMAIL,
      to: datos.email,
      subject: `Aplicación a estudio datacredito del inmueble ${datos.cod_inmueble}`,
      html: mensajes,
    };
    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);
  } catch (error) {
    console.log(error.message);
  }

  return "correo";
};

module.exports = SendCorreoController;
