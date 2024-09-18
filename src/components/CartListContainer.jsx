import { useContext, useState, useEffect } from "react"
import { CartContext } from "./context/CartContext"
import ItemCardContainer from "./ItemCardContainer";
import './Estilos/CartListContainer.css'

export default function CartListContainer() {
    const [cart, ,] = useContext(CartContext);
    const [, , , deleteItem] = useContext(CartContext);
    const [, , , , clear] = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        cart.forEach(e => {
            totalPrice += e.precio;
        });
        setTotal(totalPrice);
    }, [cart]);

    const handleClick = (id) => {
        deleteItem(id);
    }
    const handleClickClear = () => {
        clear();
    }


    return (
        <>
            <div className="containerCart">
                {cart.length > 0 ? <h1 className="title">Tus productos del carrito son:</h1> : <h1 className="title">No hay elementos en el carrito</h1>}
                <div className="containerCart2">
                    {cart.map((c) => (
                        <div key={c.id}>
                            <ItemCardContainer prod={c} />
                            <button className="btnBorrar" onClick={() => handleClick(c.id)} >Borrar</button>
                        </div>
                    ))
                    }
                </div>
                <div className="comprar">
                    {cart.length > 0 &&
                        <><h2>El precio total es: ${total}</h2>
                            <button className="btn">Comprar</button>
                        </>
                    }
                </div>
                {cart.length > 0 ?
                    <button className="btn btn2" onClick={handleClickClear} >Vaciar Carrito</button>
                    : null
                }
            </div>
        </>
    )
}