// const twilio = require('twilio');
// const axios = require('axios');
// const Nexmo = require('nexmo');
// const { Vonage } = require('@vonage/server-sdk')

const SendWhatsappController = async (req) => {

//!pruebas para envio de mensajes de texto  y whatsapp


  // //!mensajes de whatsapp twilio ok

  // const accountSid = 'AC5682ca79ebe9bb38080127dc66678fd6';
  // const authToken = 'c14f83f77083fa9593eb1fbbff199d65';
  // const client = require('twilio')(accountSid, authToken);

  // client.messages
  //     .create({
  //         body: 'eres el mejor de todos los programadores no se te olvide y muchas gracias por la ayuda parcero un cruce es un favor jajaja',
  //         from: 'whatsapp:+14155238886',
  //         to: 'whatsapp:+573041136311'
  //     })
  //     .then(message => console.log(message.sid))
  //     .catch(error => console.error('Error al enviar el mensaje:', error));

  //! mensajes de texto con twilio ok
  //   const fromPhoneNumber = '+12515774918';
  // const toPhoneNumber = '+573104964755';
  // const messageBody = 'Hola, este es un mensaje de texto enviado desde Node.js con Twilio!';

  // client.messages
  //   .create({
  //     body: messageBody,
  //     from: fromPhoneNumber,
  //     to: toPhoneNumber
  //   })
  //   .then(message => console.log('Mensaje enviado:', message.sid))
  //   .catch(error => console.error('Error al enviar el mensaje:', error));

  //? mensaje de whatsapp enviado con nexmo
  // const url = 'https://messages-sandbox.nexmo.com/v1/messages';
  // const apiKey = '2591f153';
  // const apiSecret = 'LxeI3atKtn6tnoI6';

  // const auth = {
  //   username: apiKey,
  //   password: apiSecret
  // };

  // const data = {
  //   from: '14157386102',
  //   to: '3104964755',
  //   message_type: 'text',
  //   text: 'hola yeral te llego este mensaje',
  // //   text: 'Hola, oscar como estas  esto es nexmo para el envio de mensajeria se ve bueno y no creo que sea tan caro como twilio -- mensaje de whatsapp -- hablame estiven',
  //   channel: 'whatsapp'
  // };

  // axios.post(url, data, {
  //   auth: auth,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // })
  // .then(response => {
  //   console.log('Mensaje enviado:', response.data);
  // })
  // .catch(error => {
  //   console.error('Error al enviar el mensaje:', error);
  // });

  // //? mensaje de texto con nexmo
  // const nexmo = new Nexmo({
  //     apiKey: '2591f153',
  //     apiSecret: 'LxeI3atKtn6tnoI6'
  //   });

  //   const fromPhoneNumber = '14157386102';
  //   const toPhoneNumber = '3104964755';
  //   const messageText = 'Hola, oscar como estas  esto es nexmo para el envio de mensajeria se ve bueno y no creo que sea tan caro como twilio-- mensaje de texto -- hablame estiven ';

  //   nexmo.message.sendSms(fromPhoneNumber, toPhoneNumber, messageText, (err, responseData) => {
  //     if (err) {
  //       console.error('Error al enviar el mensaje:', err);
  //     } else {
  //       console.log('Mensaje enviado:', responseData.messages[0]);
  //     }
  //   });

  //? otra forma

  // const vonage = new Vonage({
  //   apiKey: "2591f153",
  //   apiSecret: "LxeI3atKtn6tnoI6"
  // })
  // const from = "Vonage APIs"
  // const to = "573104964755"
  // const text = 'A text message sent using the Vonage SMS API'

  // async function sendSMS() {
  //     await vonage.sms.send({to, from, text})
  //         .then(resp => { console.log('Message sent successfully'); console.log(resp); })
  //         .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
  // }

  // sendSMS();

  return "mensajes whatsapp";
};


module.exports = SendWhatsappController;
