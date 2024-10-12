const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController'); // Asegúrate de que el controlador esté correctamente importado

// Obtener todos los productos
router.get('/', productoController.obtenerProductos);

// Crear un nuevo producto
router.post('/', productoController.crearProducto);

// Actualizar un producto por su ID
router.put('/:id', productoController.actualizarProducto); // Verifica que esta línea use una función válida del controlador

// Borrar un producto por su ID
router.delete('/:id', productoController.borrarProducto);

module.exports = router;
