import ButtonComponent from "./ButtonComponent";
import CardWidgetComponent from "./CardWidgetComponent";
import "./Estilos/NavBarComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBarComponent() {
  const [query, setQuery] = useState("");

  // Lista de ítems a filtrar
  const items = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3",
    "Elemento 4",
    "Elemento 5",
  ];

  // Función para manejar el cambio en el input de búsqueda
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // Filtra los ítems basados en el texto de búsqueda
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <nav>
        <section className="section1">
          <Link to={"/"} className="logo">
            <img
              className="logo"
              src="../EnsignaGaming/src/components/img/logo.png"
            ></img>
          </Link>
          <input
            type="text"
            placeholder="Buscar"
            className="inputSearch"
            value={query}
            onChange={handleSearchChange}
          />
          <CardWidgetComponent />
        </section>
        <section className="section2">
          <div className="botonesSection2">
            <ButtonComponent categoria="PC's de Escritorio" />
            <ButtonComponent categoria="Notebook" />
            <ButtonComponent categoria="Productos" />
            <ButtonComponent categoria="Monitores" />
          </div>
        </section>
      </nav>
      {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </>
  );
}
