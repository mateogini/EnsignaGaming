import { useContext } from 'react'
import './Estilos/CardWidgetComponent.css'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';
export default function CardWidgetComponent(){
    const [cart,,] = useContext(CartContext);
    return (
        <>
          <Link to={`/cart`} className='carrito' ><img className="carrito" src="../EnsignaGaming/src/components/img/carrito.png" alt="carrito" />
          
            <p className='cantidadCarrito'>{cart.length}</p>
            </Link>
        </>
    )

}