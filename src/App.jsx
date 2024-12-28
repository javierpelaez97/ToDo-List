import { useState } from 'react'
import './App.css'
import InputTarea from './components/inputTarea/InputTarea'
import ListaTareas from './components/listaTareas/ListaTareas'


function App() {

  const [tareas,setTareas] = useState([
    {texto:"Prueba", hecha:false, borrado: null},
    {texto:"Prueba 2", hecha: false, borrado:null}
  ])

  console.log(tareas);


  function intentarAgregarTarea(textoTarea){
    //Comprueba si la tarea que entra no es vacia y si no existe ya 
    if (textoTarea !== "" && tareas.find(t=> t.texto === textoTarea) === undefined){
      setTareas([{texto:textoTarea, hecha: false, borrado:null}, ...tareas])
    }else{
      if(textoTarea !== " "){
        alert("Rellena el campo de tarea")
      }else{

        alert("La tarea ya existe")
      }
    }
    
    
  }
  function borrarTarea(tareaBorrar){
    setTareas (tareas.map(t=>{
      if(t.texto === tareaBorrar.texto){
        if(t.borrado !== null){
          t.borrado = null
        }else{
          t.borrado = new Date()
        }
      }
      return t
    }))
  }

  /**La siguiente funcion coge el estado de la tarea desde el array comprueba si esxiste, si existe compara el nombre
   * y si es estricamente igual retorna las tareas y el hecha de esa le cambia el estado al ser boolean
   * y sino retorna las tareas tal cual
   */
  function cambiarTarea(cambiarEstado){
    setTareas (tareas.map(t=> {
      if(t.texto === cambiarEstado.texto ){
        return {...t, hecha: !t.hecha }
      }else{
        return t
      }
    }))
  }
  return (
    <>
    <div className='container middle'>
      <div className='ubicacion'>
        <h1>Lista de Tareas</h1>
          {/* Hace un filtro de las que no están borradas y un filtro de las que están hechas y nos imprime la longitud de ese array (ficticio que queda) */}
              <h5>Completadas({tareas.filter(t=>t.borrado ===null).filter(t=>t.hecha).length})</h5> 
        <hr />
        <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
        <hr />
        <ListaTareas  onTareaBorrada={borrarTarea} onTareaHecha={cambiarTarea} tareas={tareas.filter(t=> t.borrado === null)}></ListaTareas>
        <hr />
        <h2>Tareas Borradas ({tareas.filter(t=>t.borrado ).length})</h2>
        <hr />
        <ListaTareas onTareaBorrada={borrarTarea} onTareaHecha={cambiarTarea} tareas = {tareas.filter(t=> t.borrado !== null)}></ListaTareas>

      </div>

    </div>
    </>
  )
}

export default App
