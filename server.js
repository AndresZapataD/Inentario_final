const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sirviendo archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para las vistas HTML
app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ProductoList.html'));  // Sirve el archivo para ver productos
});

app.get('/crearProducto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CrearProducto.html'));  // Sirve el archivo para crear productos
});

app.get('/movimientoProducto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'MovimientoProducto.html'));  // Sirve el archivo para movimientos de productos
});

// Rutas de la API
const productoRoutes = require('./backend/routes/productoRoutes');
app.use('/api/productos', productoRoutes);

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Sirve la página principal
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
