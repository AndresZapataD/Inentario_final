import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrearProducto from 'CrearProducto';
import ProductosList from 'ProductosList';
import MovimientoProducto from 'MovimientoProducto';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h1>Bienvenido al Sistema de Inventario</h1>} />
          <Route path="/productos" element={<ProductosList />} />
          <Route path="/crear-producto" element={<CrearProducto />} />
          <Route path="/movimiento-producto" element={<MovimientoProducto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
