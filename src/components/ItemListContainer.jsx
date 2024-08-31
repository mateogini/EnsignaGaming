import ItemDetailContainer from "./ItemDetailContainer";
import NavBarComponent from "./NavBarComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getCategory } from "./asyncMock";
import "./Estilos/ItemListContainer.css";

export default function ItemListContainer({ saludo }) {
    const [products, setProducts] = useState([]);
    const { catId } = useParams();

    useEffect(() => {
        if (catId) {
            // Si hay un ID de categoría en la URL, cargar productos filtrados por categoría
            getCategory(catId).then(result => setProducts(result));
        } else {
            // Si no hay categoría seleccionada, cargar todos los productos
            getProducts().then(result => setProducts(result));
        }
    }, [catId]);

    return (
        <>
            <NavBarComponent />
            <h2>{saludo}</h2>
            <div className="container">
                {products.map((prod) => (
                    <ItemDetailContainer key={prod.id} prod={prod} />
                ))}
            </div>
        </>
    );
}
