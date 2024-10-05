import "./CuadruPanel.css";
import bodas from "../../../assets/INICIO/1.png";
import niños from "../../../assets/INICIO/2.png";
import eventos from "../../../assets/INICIO/3.png";
import productos from "../../../assets/INICIO/4.png";
import Panel from "../Panel/Panel";
import { Link } from "react-router-dom";

const CuadruPanel = () => {
  return (
    <div className="cuadruple-panel">
      <Link className="panel" to="/portfolio/bodas">
        <Panel imagen={bodas} texto="BODAS" />
      </Link>

      <Link className="panel" to="/portfolio/niños">
        <Panel imagen={niños} texto="NIÑOS" />
      </Link>

      <Link className="panel" to="/portfolio/eventos">
        <Panel imagen={eventos} texto="EVENTOS" />
      </Link>

      <Link className="panel" to="/portfolio/productos">
        <Panel imagen={productos} texto="PRODUCTOS" />
      </Link>
    </div>
  );
};

export default CuadruPanel;
