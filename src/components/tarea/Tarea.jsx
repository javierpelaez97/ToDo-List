import AccionTarea from "../accionTarea/AccionTarea"
import "./Tarea.css"

export default function Tarea({tarea, onTareaBorrada, onTareaHecha}){

    

    return(
        
    <li className="list-group-item disposicion-tarea ">
        {/* Con el siguiente codigo podemos ver si el label nos da un estilo o otro dependiendo del estado de la tarea ya sea hacha o no o borrada o no */}
            <div>
                <label className={[tarea.hecha? " hecha" :  " ", 
                tarea.borrado? " tarea-borrada" : " "
                ].join(" ")} 
                >
                    {tarea.texto}
                </label>
            </div>   
            <div>
            
                <AccionTarea  
                    tarea ={tarea}
                    onTareaHecha={onTareaHecha}
                    onTareaBorrada={onTareaBorrada}>
                </AccionTarea>
            </div> 
       
        
    </li>
        
    )
}