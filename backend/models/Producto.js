const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  categoria: { type: String }
});

module.exports = mongoose.model('Producto', ProductoSchema);
