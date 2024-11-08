import { Tarea } from './Tarea'

// Uso de types para tipar las props
type ListaTareaProps = {
    listaTareas: string[],
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareaProps) => {
    return (
        <>
            <table className="table">
                <tbody>
                    {
                        listaTareas.map((tarea, index) => (
                            <Tarea
                                key={index}
                                tarea={tarea}
                                borrarTarea={() => borrarTarea(index)}>
                            </Tarea>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}