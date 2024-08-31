import ItemCardContainer from "./ItemCardContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getCategory } from "./asyncMock";
import "./Estilos/ItemListContainer.css";

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { catId } = useParams();
    const [titulo,setTitulo] = useState('');
    useEffect(() => {
        if (catId) {
            // Si hay un ID de categoría en la URL, cargar productos filtrados por categoría
            getCategory(catId).then(result => setProducts(result));
            setTitulo("Todo en " + catId)
        } else {
            // Si no hay categoría seleccionada, cargar todos los productos
            getProducts().then(result => setProducts(result));
            setTitulo("");
        }
    }, [catId]);

    return (
        <>
            <h1 className="titulo">{titulo}</h1>
            <div className="container">
                {products.map((prod) => (
                    <ItemCardContainer prod={prod}/>
                ))}
            </div>
            <div className="container">
                {products.map((prod) => (
                    <ItemCardContainer prod={prod}/>
                ))}
            </div>
            <div className="container">
                {products.map((prod) => (
                    <ItemCardContainer prod={prod}/>
                ))}
            </div>
        </>
    );
}
