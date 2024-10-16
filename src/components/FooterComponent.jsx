import { Link } from "react-router-dom";
import "./Estilos/FooterComponent.css";

export default function FooterComponent() {
  return (
    <>
      <footer>
        <div>
          <ul className="list">
            <Link to={`/`}>
              <li>Quiénes Somos</li>{" "}
            </Link>
            <Link to={`/`}>
              {" "}
              <li>Ventas Corporativas</li>
            </Link>
            <Link to={`/`}>
              {" "}
              <li>Términos y Condiciones</li>
            </Link>
            <Link to={`/`}>
              {" "}
              <li>Políticas de Privacidad</li>
            </Link>
            <Link to={`/`}>
              {" "}
              <li>Garantias y Devoluciones</li>
            </Link>
          </ul>
        </div>
        <div className="footer">
          <div className="footer1">
            <h3>ATENCIÓN AL CLIENTE:</h3>
            <div className="atCliente">
              <span>0800-111-222-333</span>
              <br />
              <span>consultas@ensigna.com.ar</span>
            </div>
          </div>
          <div className="footer3">
            <img
              className="logo"
              src="/img/logo.png"
              alt="Logo"
            />
          </div>
          <div className="footer2">
            <h3>Diseño y Desarrollado</h3>
            <span>
              Página desarrollada por Mateo Viera como parte de una entrega para
              el curso de React en CoderHouse.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
