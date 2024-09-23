import { useContext } from "react";
import "./Estilos/CardWidgetComponent.css";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
export default function CardWidgetComponent() {
  const [cart] = useContext(CartContext);
  return (
    <>
      <Link to={`/cart`} className="carrito">
        <img
          className="carrito"
          src="/src/components/img/carrito.png"
          alt="carrito"
        />

        <p className="cantidadCarrito">{cart.length}</p>
      </Link>
      <Link to={'/myorders'} className="carrito">
      <img src="./src/assets/orders.png" alt="orders" className="carrito"
      style={{marginLeft:'-400%'}} />
      </Link>
    </>
  );
}
