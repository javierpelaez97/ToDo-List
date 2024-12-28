
export default function AccionTarea({onTareaHecha, onTareaBorrada, tarea}){

    function onDelete(){
        onTareaBorrada(tarea)
    }
    function onChecked(e){
        onTareaHecha(tarea)
   
    }

    return(
        <>
            {/* El siguiente codigo nos imprime o no el boton si el estado de tarea.borrado es null */ }
            {tarea.borrado === null ? (
                <button className={tarea.hecha !== true? "btn btn-outline-success": "btn btn-outline-danger"} onClick={onChecked}>{tarea.hecha === true ?  "❌" : "✅"}</button>
            ): (" ")}

            <button className= {tarea.borrado !== null? "btn btn-outline-primary" : "btn btn-outline-secondary"  } onClick={onDelete}>
            {tarea.borrado === null ? '🗑️': '🔁'}</button>
        </>

    )



}