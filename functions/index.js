/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
    user:"julia.mostova89@gmail.com",
    pass:"fortcxla",
}
});

exports.sendEmail = functions.https.onRequest((req,res)=>{
    const {name,email,message} = req.body;

    const mailOptions = {
        from:email,
        to:"julia.mostova89@gmail.com",
        subject:`Нове повідомлення від ${name}`,
        text:`Email: ${email}\n\n${message}`
    };

    transporter.sendMail(mailOptions,(error,info)=>{
      if(error){
        return res.status(500).send(error.toString());
      } 
      return res.status(200).send("Лист відправлено!") 
    });
});



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
