import Boton from "../utils/Boton";
import { Link, useNavigate } from "react-router-dom";
import collage from "../../assets/cabeceras/MIRA LO QUE OFRECEMOS.png";
import "./Index.css";
import CuadruPanel from "../utils/CuadruPanel/CuadruPanel";
import Header from "../Header";
import { Helmet } from "react-helmet";

const IndexComponent = () => {
  return (
    <>
      <Helmet>
        <title>Gia Fotografía</title>
        <meta
          name="description"
          content={
            "Gia Fotografía. Presentación del servicio de especialistas en fotografía de bodas, niños, servicios y productos de Alicante, España"
          }
        />
      </Helmet>
      <Header portadaInicio={true} />
      <main>
        <div id="portada-inicio" className="vh-100 imagen-fondo"></div>
        <div className="container my-5">
          <h3 className="fw-bolder">PRESENTACIÓN</h3>
          <p>
            Somos un equipo de fotógrafos y especialistas en imagen que aunamos
            nuestra experiencia, nuestra creatividad y nuestra manera de
            entender la fotografía para ofrecer a nuestros clientes, de una
            manera única, seria, cercana y profesional, un trabajo que responda
            a sus expectativas a nivel estético, técnico e incluso emocional.
          </p>
        </div>

        <div className="container">
          <CuadruPanel />
        </div>

        <div
          id="collage-container"
          className="text-white d-flex flex-column justify-content-between position-relative mt-5"
        >
          <div
            id="collage"
            className="imagen-fondo"
            style={{ backgroundImage: "url('" + collage + "')" }}
          ></div>
          <div className="m-5 p-5">
            <h3 className="fw-bolder">¡MIRA LO QUE OFRECEMOS!</h3>
            <p className="d-none d-lg-block">
              Esto es lo que podemos ofrecerte si decides contar con nosotros.
            </p>

            <Link to="/servicios">
              <Boton
                texto="ECHA UN VISTAZO"
                className="btn-light d-inline-block fs-4 ms-auto"
              />
            </Link>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center mt-5">
          <h3 className="fw-bolder">¡CONÓCENOS!</h3>
          <p className="text-center">
            Queremos poder darte aquellas imágenes que deseas que permanezcan
            siempre contigo, porque han formado parte de tu vida, de tu
            historia.
          </p>
          <p className="pb-3 text-center">
            Que tus momentos especiales y tus recuerdos revivan al mirar cada
            imagen, que se conviertan en eternos.
          </p>
          <Link to="/nosotros">
            <Boton texto="DESCÚBRENOS" className="btn-dark fs-4" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default IndexComponent;
