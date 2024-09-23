import { useContext, useState, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import "./Estilos/BuyFormComponent.css";
import UserInfo from "./UserInfo";

export default function BuyFormComponent() {
  const [cart, , , , , cant, , createNewOrder, orderId, setOrderId] =
    useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [orderNew, setOrderNew] = useState(null);

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((e) => {
      totalPrice += e.precio;
    });
    setTotal(totalPrice);
  }, [cart]);

  // Efecto para actualizar `orderNew` y restablecer `orderId` cuando se genera una nueva orden
  useEffect(() => {
    if (orderId) {
      setOrderNew(orderId); // Actualiza `orderNew` al nuevo `orderId`
      setOrderId(null); // Restablece `orderId` para futuras órdenes
    }
  }, [orderId, setOrderId]);

  const diferent = (cart) => {
    const uniqueItems = [];
    const seenIds = new Set();
    cart.forEach((item) => {
      if (!seenIds.has(item.id)) {
        seenIds.add(item.id);
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };

  return (
    <>
      {orderNew === null ? ( // Mostrar formulario si `orderNew` es null
        <>
          <div className="containerCart">
            <h1 className="titleCartList">Vas a llevar:</h1>
            <hr className="hrTitle" />
            {diferent(cart).map((c) => (
              <div key={c.id} className="containerBuy">
                <img
                  src={c.imagen}
                  style={{ width: "5%" }}
                  alt=""
                  className="imgBuy"
                />
                <h4 className="titleBuy">{c.nombre}</h4>
                {cant(c.id) > 1 ? (
                  <p className="cantBuy"> {cant(c.id)} Unidades</p>
                ) : (
                  <p className="cantBuy"> {cant(c.id)} Unidad</p>
                )}
              </div>
            ))}
            <UserInfo
              carrito={cart}
              createNewOrder={createNewOrder}
              total={total}
              order={orderId}
            />
            <div className="buy">
              <h2>El precio total es: ${total}</h2>
            </div>
          </div>
        </>
      ) : (
        <div className="containerCart">
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              height: "100px",
            }}
          >
            Tu número de orden y seguimiento es {orderNew}. ¡No lo pierdas!
            Gracias, de parte del equipo Ensigna.
          </h3>
        </div>
      )}
    </>
  );
}
