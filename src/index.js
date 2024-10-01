const PORT = 3000;
// process.env.PORT || 
const express = require('express');

const app = express();

require('./database');

//routes...
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

app.listen(PORT, (err) => {
    if (err) {
      console.error('Error al iniciar el servidor:', err);
    } else {
      console.log('Servidor abierto en el puerto {PORT}');
    }
  });
  