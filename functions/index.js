const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

admin.initializeApp();

// 🔐 Замінити на твій реальний API ключ від SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ✨ Основна функція — реагує на нові повідомлення у Firestore
exports.sendContactEmail = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap, context) => {
    const data = snap.data();

    const msg = {
      to: 'juli.mostova@icloud.com', // 👉 Сюди встав свою пошту, куди приходить повідомлення
      from: 'juli.mostova@icloud.com', // 🔐 Має бути підтверджена адреса в SendGrid (поясню нижче)
      subject: `💌 New message from ${data.Name}`,
      text: `
You received a new message from your portfolio contact form:

👤 Name: ${data.Name}
📧 Email: ${data.email}
📝 Message:
${data.message}
      `,
    };

    return sgMail.send(msg)
      .then(() => console.log('Email sent successfully'))
      .catch((error) => console.error('Error sending email:', error));
  });