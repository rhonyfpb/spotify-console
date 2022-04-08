const request = require('request');
const config = require('./config.json');

const clientId = config.client_id;
const clientSecret = config.secret_id;

if (clientId && clientSecret) {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const token = body.access_token;
      console.log('TOKEN GENERADO: ' + token);
      console.log('PROGRAMA TERMINADO');
    }
  });
} else {
  console.log('ALERTA: Ingresa correctamente los valores de las llaves en el archivo config.json');
  console.log('PROGRAMA TERMINADO');
}
