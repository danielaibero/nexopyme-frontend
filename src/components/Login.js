import React, { useState } from 'react';
import axios from 'axios';

function Login({ setPagina }) {
  const [datos, setDatos] = useState({ username: '', password: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://nexopyme.onrender.com', datos);
      localStorage.setItem('token', response.data.access);
      setMensaje('¡Login exitoso!');
      setTimeout(() => setPagina('inicio'), 1500);
    } catch (error) {
      setMensaje('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#161b22', padding: '40px', borderRadius: '10px', width: '400px', border: '1px solid #30363d' }}>
        <h2 style={{ color: '#00e676', textAlign: 'center', marginBottom: '30px' }}>Iniciar Sesión</h2>
        {mensaje && <p style={{ color: '#00e676', textAlign: 'center' }}>{mensaje}</p>}
        <input name="username" placeholder="Usuario" onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '5px', color: 'white', boxSizing: 'border-box' }} />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange}
          style={{ width: '100%', padding: '12px', marginBottom: '20px', backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '5px', color: 'white', boxSizing: 'border-box' }} />
        <button onClick={handleSubmit} style={{ width: '100%', padding: '12px', backgroundColor: '#00e676', border: 'none', borderRadius: '5px', color: '#0d1117', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
          Iniciar Sesión
        </button>
        <p style={{ color: '#aaa', textAlign: 'center', marginTop: '15px' }}>
          ¿No tienes cuenta?
          <span onClick={() => setPagina('registro')} style={{ color: '#00e676', cursor: 'pointer' }}> Regístrate</span>
        </p>
      </div>
    </div>
  );
}

export default Login;