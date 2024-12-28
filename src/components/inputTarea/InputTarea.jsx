import { useState } from 'react'
import './InputTarea.css'

export default function InputTarea({onAgregarTarea}){

    const [texto, setTexto] = useState("")

    function agregarTarea(){
        onAgregarTarea(texto);
        setTexto('')
    }
    


    return (
        <>
            <div className='input-group mb-3'>
                
                
                    <input className='form-control' placeholder='Añade una tarea' type="text" value={texto} onChange={(e)=> setTexto(e.target.value) }   />
                    <button onClick={agregarTarea} className='btn btn-outline-secondary '>➕</button>
                     
            </div>
            
        </>
        
        
    )
    
    
    
}