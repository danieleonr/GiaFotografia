import eventos1 from "../../../assets/PORTFOLIO/EVENTOS/1.jpg";
import eventos2 from "../../../assets/PORTFOLIO/EVENTOS/2.jpg";
import eventos3 from "../../../assets/PORTFOLIO/EVENTOS/3.jpg";
import eventos4 from "../../../assets/PORTFOLIO/EVENTOS/4.jpg";
import eventos5 from "../../../assets/PORTFOLIO/EVENTOS/5.jpg";
import eventos6 from "../../../assets/PORTFOLIO/EVENTOS/6.jpg";
import eventos7 from "../../../assets/PORTFOLIO/EVENTOS/7.jpg";
import eventos8 from "../../../assets/PORTFOLIO/EVENTOS/8.jpg";
import eventos9 from "../../../assets/PORTFOLIO/EVENTOS/9.png";
import eventos10 from "../../../assets/PORTFOLIO/EVENTOS/10.jpg";
import eventos11 from "../../../assets/PORTFOLIO/EVENTOS/11.jpg";
import eventos12 from "../../../assets/PORTFOLIO/EVENTOS/12.jpg";
import eventos13 from "../../../assets/PORTFOLIO/EVENTOS/13.jpg";
import eventos14 from "../../../assets/PORTFOLIO/EVENTOS/14.jpg";
import eventos15 from "../../../assets/PORTFOLIO/EVENTOS/15.png";
import eventos16 from "../../../assets/PORTFOLIO/EVENTOS/16.png";
import eventos17 from "../../../assets/PORTFOLIO/EVENTOS/17.jpg";
import eventos18 from "../../../assets/PORTFOLIO/EVENTOS/18.jpg";
import eventos19 from "../../../assets/PORTFOLIO/EVENTOS/19.jpg";
import Header from "../../Header";
import { motion } from "framer-motion";

import "./Eventos.css";
import { Helmet } from "react-helmet";

const Eventos = () => {
  return (
    <>
      <Helmet>
        <title>Eventos</title>
        <meta
          name="description"
          content={
            "Portfolio de algunos eventos empresariales asistidos por Gia Fotografía"
          }
        />
      </Helmet>
      <Header />
      <main>
        <div className="container">
          <h2 className="text-center mb-5">EVENTOS</h2>
          <motion.div
            className="grid-eventos"
            initial={{ filter: "blur(50px)", y: "10vh", opacity: 0 }}
            animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos1 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{
                backgroundImage: "url('" + eventos2 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas"
              style={{
                backgroundImage: "url('" + eventos3 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos4 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-filas"
              style={{
                backgroundImage: "url('" + eventos5 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos6 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{
                backgroundImage: "url('" + eventos7 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo tres-columnas"
              style={{ backgroundImage: "url('" + eventos8 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-filas tres-columnas"
              style={{ backgroundImage: "url('" + eventos9 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos10 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos11 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos12 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas"
              style={{
                backgroundImage: "url('" + eventos13 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + eventos14 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas dos-filas"
              style={{ backgroundImage: "url('" + eventos15 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{
                backgroundImage: "url('" + eventos16 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo"
              style={{
                backgroundImage: "url('" + eventos17 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo"
              style={{
                backgroundImage: "url('" + eventos18 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo seis-columnas dos-filas"
              style={{
                backgroundImage: "url('" + eventos19 + "')",
              }}
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Eventos;
