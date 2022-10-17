import { Link, useParams } from "react-router-dom"

export const Clase = () => {

    const { id } = useParams();
    return <h2>Clase nº{id}</h2>

}

export const ListaClases = () => {
    return(
        <div>
            <h1>Lista de Clases</h1>
            <p><Link to={`/clase/1`}>Clase 1</Link></p>
            <p><Link to={`/clase/2`}>Clase 2</Link></p>
        </div>
    )
}