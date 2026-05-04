import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Registro from './components/Registro';
import Login from './components/Login';
import DetalleProducto from './components/DetalleProducto';
import CrearEmprendimiento from './components/CrearEmprendimiento';
import Inventario from './components/Inventario';

function App() {
  const [pagina, setPagina] = useState('inicio');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', color: 'white' }}>
      <Navbar setPagina={setPagina} />
      
      {pagina === 'inicio' && (
        <>
          <div style={{ padding: '80px 30px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#00e676', fontSize: '48px', marginBottom: '20px' }}>
              Conectamos Emprendimientos con Oportunidades
            </h1>
            <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '40px' }}>
              La plataforma líder para PyMEs y emprendedores.
            </p>
            <button onClick={() => setPagina('registro')} style={{
              backgroundColor: '#00e676', color: '#0d1117', padding: '14px 28px',
              border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginRight: '15px'
            }}>Explorar Emprendimientos</button>
            <button onClick={() => setPagina('registro')} style={{
              backgroundColor: 'transparent', color: '#00e676', padding: '14px 28px',
              border: '2px solid #00e676', borderRadius: '8px', fontSize: '16px', cursor: 'pointer'
            }}>Publicar mi Negocio</button>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '80px' }}>
              <div><h2 style={{ color: '#00e676', fontSize: '36px' }}>+2,500</h2><p style={{ color: '#aaa' }}>Emprendimientos</p></div>
              <div><h2 style={{ color: '#00e676', fontSize: '36px' }}>+15,000</h2><p style={{ color: '#aaa' }}>Compradores</p></div>
              <div><h2 style={{ color: '#00e676', fontSize: '36px' }}>+50,000</h2><p style={{ color: '#aaa' }}>Transacciones</p></div>
            </div>
          </div>
          <Productos setPagina={setPagina} setProductoSeleccionado={setProductoSeleccionado} />
        </>
      )}

      {pagina === 'registro' && <Registro setPagina={setPagina} />}
      {pagina === 'login' && <Login setPagina={setPagina} />}
      {pagina === 'detalle' && <DetalleProducto producto={productoSeleccionado} setPagina={setPagina} />}
      {pagina === 'emprendimiento' && <CrearEmprendimiento setPagina={setPagina} />}
      {pagina === 'inventario' && <Inventario setPagina={setPagina} />}
    </div>
  );
}

export default App;