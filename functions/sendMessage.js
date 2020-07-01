const axios = require("axios");

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 400,
      body: "HTTP Method not allowed. Only POST method is allowed.",
    });
  }

  const { fieldName, fieldEmail, fieldMessage, GRCToken } = JSON.parse(
    event.body
  );

  const data = {
    content: {
      from: process.env.EMAIL_SENDER,
      subject: "¡Nuevo mensaje recibido desde www.pascualmj.dev!",
      html: `
        <html>
          <body>
            <h3>¡Recibiste un nuevo mensaje!</h3>
            <p>
              <span style="font-weight: 700;">Nombre</span><br />
              ${fieldName}
            </p>
            <p>
              <span style="font-weight: 700;">Email</span><br />
              ${fieldEmail}
            </p>
            <p>
              <span style="font-weight: 700;">Mensaje</span><br />
              ${fieldMessage}
            </p>
          </body>
        </html>
      `,
    },
    recipients: [{ address: process.env.EMAIL_RECEIVER }],
  };

  axios({
    method: "post",
    url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${GRCToken}`,
  })
    .then((response) => {
      if (!response.data.success) {
        throw new Error("User strange behaviour");
      }
      axios({
        method: "post",
        url: "https://api.sparkpost.com/api/v1/transmissions",
        headers: {
          Authorization: process.env.SPARKPOST_API_KEY,
          "Content-Type": "application/json",
        },
        data,
      })
        .then((response) => {
          callback(null, {
            statusCode: 200,
            body: "Email sended successfully.",
          });
        })
        .catch((error) => {
          callback(new Error("There was an error."));
        });
    })
    .catch((error) => {
      callback(new Error("There was an error."));
    });
};
