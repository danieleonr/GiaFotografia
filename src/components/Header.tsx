import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const Header = ({ portadaInicio }: { portadaInicio?: boolean }) => {
  return (
    <nav
      className={
        "navbar navbar-expand-lg d-flex justify-content-between p-3 display-6 fs-6 sticky-top" +
        (portadaInicio && " menu-portada-inicio")
      }
    >
      <Link className="navbar-brand" role="button" to="/">
        <img src={logo} width={100} height={100} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        className="collapse navbar-collapse justify-content-end"
      >
        <div className="navbar-nav gap-3 text-center">
          <span className="nav-item dropdown" role="button">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              PORTFOLIO
            </span>
            <nav className="dropdown-menu text-center">
              <Link className="nav-link" to="/portfolio/bodas">
                BODAS
              </Link>
              <Link className="nav-link" to="/portfolio/niños">
                NIÑOS
              </Link>
              <Link className="nav-link" to="/portfolio/eventos">
                EVENTOS
              </Link>
              <Link className="nav-link" to="/portfolio/productos">
                PRODUCTOS
              </Link>
            </nav>
          </span>
          <Link className="nav-link" role="button" to="/servicios">
            SERVICIOS
          </Link>
          <Link className="nav-link" role="button" to="/videos">
            VÍDEOS
          </Link>
          <Link className="nav-link" role="button" to="/nosotros">
            NOSOTROS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
