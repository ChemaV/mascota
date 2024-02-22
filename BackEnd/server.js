const express = require('express');
const app = express();
const db = require('./db'); // Asegúrate de que este archivo exporta tu base de datos

app.get('/products', (req, res) => {
  // Aquí deberías tener la lógica para obtener los productos de tu base de datos
  // y luego enviarlos como respuesta
  res.json(db.products); // Esto es solo un ejemplo, ajusta según tu implementación real
});

const PORT = process.env.PORT ||  3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
