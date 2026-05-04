import React from 'react';

function Navbar({ setPagina }) {
  return (
    <nav style={{
      backgroundColor: '#161b22',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #30363d'
    }}>
      <h1 onClick={() => setPagina('inicio')} style={{ color: '#00e676', margin: 0, fontSize: '24px', cursor: 'pointer' }}>N NexoPyME</h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span onClick={() => setPagina('inicio')} style={{ color: '#aaa', cursor: 'pointer' }}>Inicio</span>
        <span onClick={() => setPagina('emprendimiento')} style={{ color: '#aaa', cursor: 'pointer' }}>Mi Negocio</span>
        <span onClick={() => setPagina('inventario')} style={{ color: '#aaa', cursor: 'pointer' }}>Mi Inventario</span>
        <span style={{ color: '#aaa', cursor: 'pointer' }}>Ayuda</span>
        <button onClick={() => setPagina('login')} style={{
          backgroundColor: 'transparent', border: '1px solid #00e676',
          color: '#00e676', padding: '8px 16px', cursor: 'pointer', borderRadius: '5px'
        }}>Iniciar Sesión</button>
        <button onClick={() => setPagina('registro')} style={{
          backgroundColor: '#00e676', border: 'none', color: '#0d1117',
          padding: '8px 16px', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bold'
        }}>Registrarse</button>
      </div>
    </nav>
  );
}

export default Navbar;
