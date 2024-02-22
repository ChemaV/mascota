import React, { useState } from 'react';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log('Datos enviados:', { nombre, empresa, email, telefono, direccion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="empresa">Empresa:</label>
        <input
          type="text"
          id="empresa"
          value={empresa}
          onChange={(event) => setEmpresa(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          value={direccion}
          onChange={(event) => setDireccion(event.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistroForm;