import Panel from "../../utils/Panel/Panel";
import lauraYCristobal from "../../../assets/PORTFOLIO/BODAS/PORTADAS/LAURA Y CRISTOBAL.png";
import patriciaYJoaquin from "../../../assets/PORTFOLIO/BODAS/PORTADAS/PATRICIA Y JOAQUIN.png";
import pepaYJuan from "../../../assets/PORTFOLIO/BODAS/PORTADAS/PEPA Y JUAN.png";
import sofiaYMarco from "../../../assets/PORTFOLIO/BODAS/PORTADAS/SOFIA Y MARCO.jpg";
import "./Bodas.css";
import { Link } from "react-router-dom";
import Header from "../../Header";
import { Helmet } from "react-helmet";

const Bodas = () => {
  return (
    <>
      <Helmet>
        <title>Bodas</title>
        <meta
          name="description"
          content={
            "Recopilación de los mejores reportajes fotográficos de bodas realizados por Gia Fotografía"
          }
        />
      </Helmet>
      <Header />
      <main>
        <div className="container bodas">
          <h2 className="text-center">BODAS DESTACADAS</h2>
          <p className="fs-4 text-center mt-4">"Recordar es volver a vivir"</p>
          <p className="fs-4 text-center mb-5">
            "Cada foto es siempre un viaje del alma"
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-5">
            <Link className="panel" to="/portfolio/bodas/Laura-y-Cristobal">
              <Panel imagen={lauraYCristobal} texto="LAURA Y CRISTÓBAL" />
            </Link>

            <Link className="panel" to="/portfolio/bodas/Patricia-y-Joaquin">
              <Panel imagen={patriciaYJoaquin} texto="PATRICIA Y JOAQUÍN" />
            </Link>

            <Link className="panel" to="/portfolio/bodas/Pepa-y-Juan">
              <Panel imagen={pepaYJuan} texto="PEPA Y JUAN" />
            </Link>

            <Link className="panel" to="/portfolio/bodas/Sofia-y-Marco">
              <Panel imagen={sofiaYMarco} texto="SOFÍA Y MARCO" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bodas;
