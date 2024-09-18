import { useContext, useState, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import ItemCardContainer from "./ItemCardContainer";
import "./Estilos/CartListContainer.css";
import { Link } from "react-router-dom";

export default function CartListContainer() {
  const [cart, ,] = useContext(CartContext);
  const [, , , deleteItem] = useContext(CartContext);
  const [, , , , clear] = useContext(CartContext);
  const [, , , , , cant] = useContext(CartContext);
  const [, , , , , , deleteItemComplete] = useContext(CartContext);
  const [, , addItem] = useContext(CartContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((e) => {
      totalPrice += e.precio;
    });
    setTotal(totalPrice);
  }, [cart]);

  const handleClickDesc = (id) => {
    //decrementa de a uno en el boton de menos
    deleteItem(id);
  };
  const handleClickClear = () => {
    // vacia por completo el carro
    clear();
  };
  const diferent = (cart) => {
    // muestra 1 por id en el carrito
    const uniqueItems = [];
    const seenIds = new Set();
    cart.forEach((item) => {
      // recorre todo el array y agrega 1 por id
      if (!seenIds.has(item.id)) {
        seenIds.add(item.id);
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };
  const deleteItemCom = (id) => {
    // elimina todas las cantidades de un solo producto
    deleteItemComplete(id);
  };
  const handleClickInc = (c) => {
    //añade un item con el boton de más
    addItem(c, 1);
  };

  return (
    <>
      {cart.length > 0 && (
        <>
          <div className="containerCart">
            <h1 className="titleCartList">Productos:</h1>
            <hr className="hrTitle" />
            <div className="containerCart2">
              {diferent(cart).map((c) => (
                <div key={c.id}>
                  <ItemCardContainer prod={c} />
                  <div className="countCart">
                    <button onClick={() => handleClickDesc(c.id)}>-</button>
                    <p>Cantidad:{cant(c.id)}</p>
                    {cant(c.id) < c.stock ? (
                      <button onClick={() => handleClickInc(c)}>+</button>
                    ) : (
                      <button style={{ backgroundColor: "grey" }}>+</button>
                    )}
                  </div>
                  {cant(c.id) == c.stock && (
                    <>
                      <p style={{ marginLeft: "30%" }}>Limite de compra</p>
                    </>
                  )}
                  <button
                    className="btnDelete"
                    onClick={() => deleteItemCom(c.id)}
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>
            <hr className="hrTitle" />
            <div className="buy">
              {cart.length > 0 && (
                <>
                  <h2>El precio total es: ${total}</h2>
                  <button className="btn"> <Link to={'/buy'}>Comprar</Link></button>
                </>
              )}
            </div>
            <hr className="hrTitle" />
            {cart.length > 0 ? (
              <button className="btn btn2" onClick={handleClickClear}>
                Vaciar Carrito
              </button>
            ) : null}
          </div>
        </>
      )}
      {cart.length > 0 ? null : (
        <h1 className="titleCartList">No hay elementos en el carrito</h1>
      )}
    </>
  );
}
