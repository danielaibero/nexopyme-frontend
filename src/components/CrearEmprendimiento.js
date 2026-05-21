import React, { useState } from 'react';
import axios from 'axios';

function CrearEmprendimiento({ setPagina }) {
  const [datos, setDatos] = useState({
    nombre_negocio: '', descripcion: '', categoria: '', ubicacion: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://nexopyme.onrender.com/api/emprendimientos/crear/', datos);
      setMensaje('¡Emprendimiento creado exitosamente!');
      setTimeout(() => setPagina('inicio'), 2000);
    } catch (error) {
      setMensaje('Error al crear el emprendimiento');
    }
  };

  const inputStyle = {
    width: '100%', padding: '12px', marginBottom: '15px',
    backgroundColor: '#0d1117', border: '1px solid #30363d',
    borderRadius: '5px', color: 'white', boxSizing: 'border-box'
  };

  return (
    <div style={{ backgroundColor: '#0d1117', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#161b22', padding: '40px', borderRadius: '10px', width: '450px', border: '1px solid #30363d' }}>
        <h2 style={{ color: '#00e676', textAlign: 'center', marginBottom: '30px' }}>Crear Emprendimiento</h2>
        {mensaje && <p style={{ color: '#00e676', textAlign: 'center' }}>{mensaje}</p>}
        <input name="nombre_negocio" placeholder="Nombre del negocio" onChange={handleChange} style={inputStyle} />
        <textarea name="descripcion" placeholder="Descripcion del negocio" onChange={handleChange}
          style={{ ...inputStyle, height: '100px', resize: 'none' }} />
        <select name="categoria" onChange={handleChange} style={inputStyle}>
          <option value="">Selecciona una categoria</option>
          <option value="Artesania">Artesania</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Servicios">Servicios</option>
          <option value="Moda">Moda</option>
          <option value="Otro">Otro</option>
        </select>
        <input name="ubicacion" placeholder="Ubicacion (ciudad)" onChange={handleChange} style={inputStyle} />
        <button onClick={handleSubmit} style={{
          width: '100%', padding: '12px', backgroundColor: '#00e676',
          border: 'none', borderRadius: '5px', color: '#0d1117',
          fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'
        }}>Crear Emprendimiento</button>
        <p style={{ color: '#aaa', textAlign: 'center', marginTop: '15px' }}>
          <span onClick={() => setPagina('inicio')} style={{ color: '#00e676', cursor: 'pointer' }}>Volver al inicio</span>
        </p>
      </div>
    </div>
  );
}

export default CrearEmprendimiento;