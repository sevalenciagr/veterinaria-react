import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"


function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <div className='container mx-auto mt-20'>
     
      <Header />

      <div className="mt-12 md:flex ">
        <Form 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />  
        <PatientList  
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div> 
    </div>
  )
}

export default App
