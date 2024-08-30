import './Estilos/ButtonComponent.css'
import { Link } from 'react-router-dom'
export default function ButtonComponent({categoria}){
    return(
        <>
            <button> <Link to={`/categoria/${categoria}`}>{categoria}</Link>
            </button>
        </>
    )
}