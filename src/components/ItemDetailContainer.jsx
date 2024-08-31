import './Estilos/ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProduct} from './asyncMock';
import { Link } from 'react-router-dom';
export default function ItemDetailContainer({}){
  const [product, setProduct] = useState({});
  const { prodId } = useParams();
  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);
    return <>
    <section className='card'>
      <img className='imgProd' src={product.imagen} alt={product.nombre}/>
      <div className='info'>
      <p className='ruta'><Link to={`/category/${product.categoria}`}>{product.categoria} &gt;</Link> {product.nombre}</p>
      <h1 className='title'>{product.nombre}</h1>
      <hr />
      <p className='espe'>Especificaciones: {product.especificaciones}</p>
      <hr />
      <h3 className='price'>PRECIO: ${product.precio}</h3>
      <hr />
      <button className='btn'>Agregar al carrito</button>
      </div>
    </section>
    </>
}