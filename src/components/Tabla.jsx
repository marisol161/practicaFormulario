import React from 'react';

function Paciente({ nombre, contacto, padecimiento, imagen, index }) {
  return (
    <div className="card mt-3 mb-3" style={{ maxWidth: '540px', border: '1px solid black' }}>
      <div className="card-header bg-dark text-white">Paciente </div>
      <div className="row g-0">
        <div className="col-md-4">
          {imagen && (
            <img src={URL.createObjectURL(imagen)} className="img-fluid rounded-start" alt="Imagen de la Mascota" />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Contacto: {contacto}</p>
            <p className="card-text">Padecimiento: {padecimiento}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paciente;
