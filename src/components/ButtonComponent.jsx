import './Estilos/ButtonComponent.css'
import { Link } from 'react-router-dom'
export default function ButtonComponent({categoria,cat}){
    return(
        <>
            <button> <Link to={`/category/${cat}`}>{categoria}</Link>
            </button>
        </>
    )
}