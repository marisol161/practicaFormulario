
import { useState } from "react";
import Formulario from "./components/Formulario";
import Paciente from "./components/Tabla";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [contadorID, setContadorID] = useState(0);

  const agregarPaciente = (paciente) => {
    let nuevoPaciente = {
      ...paciente,
      id: contadorID,
    };

    setContadorID(contadorID + 1);
    setPacientes([...pacientes, nuevoPaciente]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Formulario agregarPaciente={agregarPaciente} />
        </div>
        <div className="col-md-6">
          {pacientes.length > 0 && pacientes.map((paciente, index) => (
            <Paciente
              key={index}
              nombre={paciente.nombre}
              contacto={paciente.contacto}
              imagen={paciente.imagen}
              padecimiento={paciente.padecimiento}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;