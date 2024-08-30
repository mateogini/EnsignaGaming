import ItemCardComponent from "./ItemCardComponent";
import NavBarComponent from "./NavBarComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getCategory } from "./asyncMock";
import "./Estilos/ItemListContainer.css"
export default function ItemListContainer({saludo}){
    const {catId} = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        getProducts().then( result =>
        setProducts(result));
    },[]);
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        getCategory(catId).then(result =>
            setCategory(result)
        );
    },[]);
    return(
        <>
        <NavBarComponent/>
            <h2>{saludo}</h2>
            <div className="container">
                {products.map((prod)=>(
                <ItemCardComponent key={prod.id} prod={prod}/>
                ))}
            </div>
            <div className="container">
                {category.map((prod)=>(
                <ItemCardComponent key={prod.id} prod={prod}/>
                ))}
            </div>
        
        </>
    )

}