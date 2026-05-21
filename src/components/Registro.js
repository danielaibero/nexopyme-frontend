import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
  const [datos, setDatos] = useState({
    username: '', email: '', password: '', es_emprendedor: false
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setDatos({ ...datos, [e.target.name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://nexopyme.onrender.com/api/usuarios/registro/', datos, {
        headers: { 'Content-Type': 'application/json' }
      });
      setMensaje('¡Registro exitoso!');
    } catch (error) {
      setMensaje('Error: ' + JSON.stringify(error.response?.data));
    }
  };

  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#161b22', padding: '40px', borderRadius: '10px', width: '400px', border: '1px solid #30363d' }}>
        <h2 style={{ color: '#00e676', textAlign: 'center', marginBottom: '30px' }}>Crear Cuenta</h2>
        {mensaje && <p style={{ color: '#00e676', textAlign: 'center' }}>{mensaje}</p>}
        <input name="username" placeholder="Usuario" onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '5px', color: 'white', boxSizing: 'border-box' }} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '5px', color: 'white', boxSizing: 'border-box' }} />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '5px', color: 'white', boxSizing: 'border-box' }} />
        <label style={{ color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <input type="checkbox" name="es_emprendedor" onChange={handleChange} />
          Soy emprendedor
        </label>
        <button onClick={handleSubmit} style={{ width: '100%', padding: '12px', backgroundColor: '#00e676', border: 'none', borderRadius: '5px', color: '#0d1117', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Registro;