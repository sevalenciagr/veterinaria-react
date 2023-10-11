import Patient from "./Patient"


const PatientList = ({pacientes}) => {



  return (
    
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Administra tus {' '}
            <span className='text-indigo-600 font-bold '>Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Patient
              key={paciente.id}
              paciente={paciente}
            />
          ))}
        </>
      
      
      ): (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Comienza agregando pacientes {' '}
            <span className='text-indigo-600 font-bold '>y aparecerán en este lugar</span>
          </p>
        </>
      )}
        

        
                
    </div>
    
  )
}

export default PatientList