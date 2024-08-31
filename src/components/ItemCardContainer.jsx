
import './Estilos/ItemCardContainer.css'
import { Link } from 'react-router-dom'
export default function ItemCardComponent({prod}){
  const idProd = prod.nombre;
    return <>
    <Link to={`/item/${idProd}`}>
      <div className="nft" key={prod.id}>
        <div className='main'>
          <img className='tokenImage' src={prod.imagen} alt={prod.nombre} />
          <h2>{prod.nombre}</h2>
          <div className='tokenInfo'>
            <div className="price">
              <p>{prod.precio}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
  </Link>
    </>
}