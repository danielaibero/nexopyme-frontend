import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventario({ setPagina }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/productos/listar/')
      .then(response => setProductos(response.data))
      .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', padding: '40px 30px' }}>
      <button onClick={() => setPagina('inicio')} style={{
        backgroundColor: 'transparent', border: 'none',
        color: '#00e676', fontSize: '16px', cursor: 'pointer', marginBottom: '30px'
      }}>← Volver al inicio</button>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#00e676', fontSize: '32px', margin: 0 }}>Gestión de Inventario</h2>
          <button onClick={() => setPagina('emprendimiento')} style={{
            backgroundColor: '#00e676', border: 'none', color: '#0d1117',
            padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer'
          }}>+ Agregar Producto</button>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '10px', flex: 1, border: '1px solid #30363d' }}>
            <p style={{ color: '#aaa', margin: 0 }}>Total Productos</p>
            <h3 style={{ color: 'white', fontSize: '32px', margin: '5px 0' }}>{productos.length}</h3>
          </div>
          <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '10px', flex: 1, border: '1px solid #30363d' }}>
            <p style={{ color: '#aaa', margin: 0 }}>Activos</p>
            <h3 style={{ color: '#00e676', fontSize: '32px', margin: '5px 0' }}>{productos.filter(p => p.disponible).length}</h3>
          </div>
          <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '10px', flex: 1, border: '1px solid #30363d' }}>
            <p style={{ color: '#aaa', margin: 0 }}>Stock Total</p>
            <h3 style={{ color: 'white', fontSize: '32px', margin: '5px 0' }}>{productos.reduce((acc, p) => acc + p.stock, 0)}</h3>
          </div>
        </div>

        <div style={{ backgroundColor: '#161b22', borderRadius: '10px', border: '1px solid #30363d', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#0d1117' }}>
                <th style={{ color: '#aaa', padding: '15px', textAlign: 'left' }}>Producto</th>
                <th style={{ color: '#aaa', padding: '15px', textAlign: 'left' }}>Categoria</th>
                <th style={{ color: '#aaa', padding: '15px', textAlign: 'left' }}>Precio</th>
                <th style={{ color: '#aaa', padding: '15px', textAlign: 'left' }}>Stock</th>
                <th style={{ color: '#aaa', padding: '15px', textAlign: 'left' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id} style={{ borderTop: '1px solid #30363d' }}>
                  <td style={{ color: 'white', padding: '15px' }}>{producto.nombre}</td>
                  <td style={{ color: '#aaa', padding: '15px' }}>{producto.categoria}</td>
                  <td style={{ color: '#00e676', padding: '15px' }}>${producto.precio}</td>
                  <td style={{ color: 'white', padding: '15px' }}>{producto.stock}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{
                      backgroundColor: producto.disponible ? '#00e676' : '#cc0000',
                      color: producto.disponible ? '#0d1117' : 'white',
                      padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'
                    }}>
                      {producto.disponible ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventario;