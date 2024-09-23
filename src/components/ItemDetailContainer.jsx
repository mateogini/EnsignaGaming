import "./Estilos/ItemDetailContainer.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer({}) {
  const [, , addItem] = useContext(CartContext);
  const [cant, setCant] = useState(1);

  const [product, setProduct] = useState({});
  const { prodId } = useParams();
  useEffect(() => {
    const db = getFirestore();

    const getProduct = doc(db, "productos", prodId);

    getDoc(getProduct).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [prodId]);

  const handleClick = (prod, cant) => {
    addItem(prod, cant);
  };
  const handleClickInc = () => {
    if (cant < product.stock) {
      setCant(cant + 1);
    }
  };
  const handleClickDec = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };
  return (
    <>
      <section className="card" key={product.id}>
        <img className="imgProd" src={product.imagen} alt={product.nombre} />
        <div className="info">
          <p className="ruta">
            <Link to={`/category/${product.categoria}`}>
              {product.categoria} &gt;
            </Link>{" "}
            {product.nombre}
          </p>
          <h1 className="title">{product.nombre}</h1>
          <hr />
          <p className="espe">Especificaciones: {product.especificaciones}</p>
          <hr />
          <p className="espe">Stock: {product.stock}</p>
          <hr />
          <h3 className="price">PRECIO: ${product.precio}</h3>
          <hr />
          <div className="countAdd">
            <button className="btnDecInc" onClick={handleClickDec}>
              -
            </button>
            <button className="btn" onClick={() => handleClick(product, cant)}>
              Agregar al carrito {cant}
            </button>
            <button className="btnDecInc" onClick={handleClickInc}>
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
