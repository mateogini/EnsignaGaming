import ItemCardContainer from "./ItemCardContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Estilos/ItemListContainer.css";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [img, setImg] = useState(true);
    const { catId } = useParams();
    const [titulo, setTitulo] = useState('');
   
    useEffect(() => {
        const db = getFirestore();

        if (catId) {
            const productsCollection = query(collection(db, 'productos'), where('categoria', '==', catId))

            getDocs(productsCollection).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No hay productos")
                }

                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))

            })
            setTitulo("Todo en " + catId)
            setImg(false)

        } else {
            setTitulo('');
            setImg(true);
            const productsCollection = collection(db, 'productos')

            getDocs(productsCollection).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No hay productos")
                }

                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))

            })

        }

    }, [catId])


    return (
        <>
            {img ? <img src="/src/assets/ciberGrande.jpg" alt="ciberMonday" className='ciber1' /> : null}

            <h1 className="titulo">{titulo}</h1>
            <div className="container">
                {products.map((prod) => (
                    <ItemCardContainer key={prod.id} prod={prod} />
                ))}
            </div>

            <div className="container">
                {products.map((prod) => (
                    <ItemCardContainer key={prod.id} prod={prod} />
                ))}
            </div>
            {img ? <img src="/src/assets/ciberLargo2.jpg" alt="ciberMonday" className='ciber2' /> : null}

            <div className="container">
                {products.map((prod) => (
                    <ItemCardContainer key={prod.id} prod={prod} />
                ))}
            </div>
        </>
    );
}
