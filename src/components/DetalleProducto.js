import React from 'react';

function DetalleProducto({ producto, setPagina }) {
  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', padding: '40px 30px' }}>
      <button onClick={() => setPagina('inicio')} style={{
        backgroundColor: 'transparent', border: 'none',
        color: '#00e676', fontSize: '16px', cursor: 'pointer', marginBottom: '30px'
      }}>← Volver al inicio</button>

      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#161b22', borderRadius: '10px', padding: '40px', border: '1px solid #30363d' }}>
        <span style={{ color: '#00e676', fontSize: '14px' }}>{producto.categoria}</span>
        <h1 style={{ color: 'white', fontSize: '36px', margin: '10px 0' }}>{producto.nombre}</h1>
        <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '20px' }}>{producto.descripcion}</p>
        <h2 style={{ color: '#00e676', fontSize: '32px', marginBottom: '20px' }}>${producto.precio}</h2>
        <p style={{ color: '#aaa' }}>Stock disponible: {producto.stock} unidades</p>
        <button style={{
          backgroundColor: '#00e676', border: 'none', color: '#0d1117',
          padding: '14px 28px', borderRadius: '8px', fontSize: '16px',
          fontWeight: 'bold', cursor: 'pointer', marginTop: '20px'
        }}>Comprar ahora</button>
      </div>
    </div>
  );
}

export default DetalleProducto;