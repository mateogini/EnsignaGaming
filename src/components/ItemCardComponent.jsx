import './Estilos/ItemCardComponent.css'
export default function ItemCardComponent({prod}){
   
    return <>
    
  <div className="nft" key={prod.id}>
    <div className='main'>
      <img className='tokenImage' src={prod.imagen} alt="NFT" />
      <h2>{prod.nombre}</h2>
      <div className='tokenInfo'>
        <div className="price">
          <p>{prod.precio}</p>
        </div>
      </div>
      <hr />
    </div>
  </div>
    </>
}