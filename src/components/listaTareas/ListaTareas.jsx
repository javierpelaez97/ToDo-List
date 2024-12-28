import Tarea from "../tarea/Tarea";

export default function ListaTareas({tareas, onTareaBorrada, onTareaHecha}){


    return(
        <ul className="list-group">
            {tareas.map ((x) => {
                if(x.borrado !== null){
                    return(
                        <Tarea 
                            tarea= {x} 
                            onTareaBorrada={onTareaBorrada} 
                            onTareaHecha={onTareaHecha} 
                        ></Tarea>
                    )
                }else{
                    return(
                        <Tarea 
                            tarea= {x} 
                            onTareaBorrada={onTareaBorrada} 
                            onTareaHecha={onTareaHecha} 
                        ></Tarea>
                    )
                }
                

            }
                
                
            )}
            
        </ul>
    )
}