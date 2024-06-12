import React, { useState } from 'react';

function Formulario({ agregarPaciente }) {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [padecimiento, setPadecimiento] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nuevoPaciente = { nombre, contacto, padecimiento, imagen };
    agregarPaciente(nuevoPaciente);

    setNombre('');
    setContacto('');
    setPadecimiento('');
    setImagen(null);
  };

  const handleImagen = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <div className="card">
      <div className="card-header bg-dark text-white">Registro de paciente</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="nombreMascota" for="disabledTextInput" className="col-form-label">Nombre de la mascota</label>
            <input type="text" className="form-control" id="nombreMascota" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="mb-2">
            <label htmlFor="contacto" className="form-label">Contacto</label>
            <input type="text" className="form-control" id="contacto" value={contacto} onChange={(e) => setContacto(e.target.value)} required />
          </div>
          <div className="mb-2">
            <label htmlFor="imagenMascota" className="form-label">Imagen de la mascota</label>
            <input type="file" className="form-control" id="imagenMascota" onChange={handleImagen} />
          </div>
          <div className="mb-2">
            <label htmlFor="padecimiento" className="form-label">Padecimiento</label>
            <textarea className="form-control" id="padecimiento" rows="3" value={padecimiento} onChange={(e) => setPadecimiento(e.target.value)} required></textarea>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-outline-dark me-md-2">Registrar al Animal</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
