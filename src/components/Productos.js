import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Productos({ setPagina, setProductoSeleccionado }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://nexopyme.onrender.com/api/productos/listar/')
      .then(response => setProductos(response.data))
      .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div style={{ padding: '40px 30px', backgroundColor: '#0d1117' }}>
      <h2 style={{ color: '#00e676', textAlign: 'center', fontSize: '32px' }}>Emprendimientos Destacados</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
        {productos.length === 0 ? (
          <p style={{ color: '#aaa' }}>No hay productos aun. Se el primero en publicar!</p>
        ) : (
          productos.map(producto => (
            <div key={producto.id} style={{ backgroundColor: '#161b22', borderRadius: '10px', padding: '20px', width: '250px', border: '1px solid #30363d' }}>
              <span style={{ color: '#00e676', fontSize: '12px' }}>{producto.categoria}</span>
              <h3 style={{ color: 'white', margin: '10px 0' }}>{producto.nombre}</h3>
              <p style={{ color: '#aaa', fontSize: '14px' }}>{producto.descripcion}</p>
              <p style={{ color: '#00e676', fontWeight: 'bold', fontSize: '18px' }}>${producto.precio}</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={() => { setProductoSeleccionado(producto); setPagina('detalle'); }} style={{
                  backgroundColor: 'transparent', border: '1px solid #00e676', color: '#00e676',
                  padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', flex: 1
                }}>Ver Perfil</button>
                <button style={{
                  backgroundColor: '#00e676', border: 'none', color: '#0d1117',
                  padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', flex: 1
                }}>Comprar</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Productos;