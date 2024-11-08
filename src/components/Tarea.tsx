type TareaProps = {
    tarea: string,
    borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
    return (
        <>
            <tr>
                <td className="d-flex justify-content-between align-items-center">
                    <span>{tarea}</span>
                    <button
                        type="button"
                        onClick={borrarTarea}
                        className="btn btn-danger">
                        🗑
                    </button>
                </td>
            </tr>
        </>
    )
}