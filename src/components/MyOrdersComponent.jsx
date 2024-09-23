import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import ItemCardContainer from "./ItemCardContainer";
import { CartContext } from "./context/CartContext";

export default function MyOrdersComponent() {
  const [myOrders, setMyOrders] = useState({ items: [] }); // Inicializa como un objeto con items
  const [order, setOrder] = useState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    {myOrders.items.map((subItem) => (
      totalPrice += subItem.precio
    ))}
    setTotal(totalPrice);
    console.log(total);
  }, [myOrders]);
  const handleSearchOrder = () => {
    const db = getFirestore();
    const getProduct = doc(db, "orders", order);
    getDoc(getProduct).then((snapshot) => {
      if (snapshot.exists()) {
        setMyOrders({ id: snapshot.id, ...snapshot.data() }); // Obtiene todos los datos
      } else {
        setMyOrders({ items: [] }); // Si no existe, restablece a un objeto vacío
      }
    });
  };

  return (
    <>
      <h1 className="titulo" style={{ display: "flex", marginLeft: "35%" }}>
        Busca los productos de tu orden
      </h1>

      <div style={{ marginBottom: "440px" }}>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <input
            type="text"
            placeholder="Código de Orden"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          <button onClick={handleSearchOrder}>Buscar Orden</button>
        </div>

        {Array.isArray(myOrders.items) && myOrders.items.length > 0 ? (
          <div className="containerCart">
            <h3 style={{ margin: "auto" }}>
              La orden {order} contiene estos productos
            </h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {myOrders.items.map((subItem) => (
                <ItemCardContainer key={subItem.id} prod={subItem} />
              ))}
            </div>
            <h3 style={{ display: "flex", marginLeft: "35%" }}>Total: ${total}</h3>
          </div>
        ) : null}
      </div>
    </>
  );
}
