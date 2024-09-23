import { useState } from "react";

export default function UserInfo({ carrito, createNewOrder, total}) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState(null);

  const iguales = () => {
    return email2 === email;
  };
 
  const handleSubmit = () => {
    // Verificamos si los emails son iguales antes de continuar
    if (!iguales()) {
      setError("Los correos electrónicos no coinciden");
      return;
    }
    const order = {
      buyer: {
        apellido,
        email,
        nombre,
        telefono,
      },
      items: carrito,
      total: total,
    };
    createNewOrder(order);
    setError(null);
}

  return (
    <>
        <div className="formBuy">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="number"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Repetir email"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
        />
        {error && <h4>{error}</h4>}
        <hr className="hrTitle" />
      </div>
      <div>
        <button onClick={handleSubmit}>Finalizar Compra</button>
      </div>      
      
    </>
  );
}
