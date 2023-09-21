const express = require('express');
const app = express();
const port = 5000;

// Datos simulados de clientes y productos
const clientes = [
  { id: 1, nombre: 'Vanessa Choque Surco' },
  { id: 2, nombre: 'Jonathan Manzil' },
  { id: 3, nombre: 'Liana Perez' },
];

const productos = [
  { id: 1, nombre: 'Monitor' },
  { id: 2, nombre: 'Laptop' },
  { id: 3, nombre: 'Mouse' },
];

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta para mostrar clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Iniciar el servidor en el puerto 5000
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
