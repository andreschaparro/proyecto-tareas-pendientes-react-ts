import { useState } from "react"
import { ListaTareas } from './ListaTareas'

// Ingresar tsrafc
export const TodoApp = () => {

    // Uso de type genérico para tipar los useState
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') {
            return;
        }
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea.trim()]);
        setNuevaTarea('');
    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareasActuales => tareasActuales.filter((_, i) => i != index))
    }

    return (
        <>
            <h1 className="text-center mb-3">Lista de Tareas con React y TS</h1>
            <div className="container w-25">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={nuevaTarea}
                        onChange={(event) => setNuevaTarea(event.target.value)}
                        placeholder="Nueva Tarea"
                    />
                </div>
                <div className="text-center mt-2">
                    <button
                        type="button"
                        onClick={handleAddTask}
                        className="btn btn-primary">
                        Agregar Tarea
                    </button>
                </div>
                <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} ></ListaTareas>
            </div>
        </>
    )
}