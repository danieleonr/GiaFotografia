import niños1 from "../../../assets/PORTFOLIO/NIÑOS/1.png";
import niños2 from "../../../assets/PORTFOLIO/NIÑOS/2.jpg";
import niños3 from "../../../assets/PORTFOLIO/NIÑOS/3.png";
import niños4 from "../../../assets/PORTFOLIO/NIÑOS/4.jpg";
import niños5 from "../../../assets/PORTFOLIO/NIÑOS/5.jpg";
import niños6 from "../../../assets/PORTFOLIO/NIÑOS/6.jpg";
import niños7 from "../../../assets/PORTFOLIO/NIÑOS/7.jpg";
import niños8 from "../../../assets/PORTFOLIO/NIÑOS/8.jpg";
import niños9 from "../../../assets/PORTFOLIO/NIÑOS/9.jpg";
import niños10 from "../../../assets/PORTFOLIO/NIÑOS/10.jpg";
import niños11 from "../../../assets/PORTFOLIO/NIÑOS/11.jpg";
import niños12 from "../../../assets/PORTFOLIO/NIÑOS/12.jpg";
import niños13 from "../../../assets/PORTFOLIO/NIÑOS/13.png";
import niños14 from "../../../assets/PORTFOLIO/NIÑOS/14.png";
import niños15 from "../../../assets/PORTFOLIO/NIÑOS/15.jpg";
import niños16 from "../../../assets/PORTFOLIO/NIÑOS/16.jpg";
import niños17 from "../../../assets/PORTFOLIO/NIÑOS/17.jpg";
import niños18 from "../../../assets/PORTFOLIO/NIÑOS/18.png";
import niños19 from "../../../assets/PORTFOLIO/NIÑOS/19.png";
import niños20 from "../../../assets/PORTFOLIO/NIÑOS/20.png";
import niños21 from "../../../assets/PORTFOLIO/NIÑOS/21.jpg";
import niños22 from "../../../assets/PORTFOLIO/NIÑOS/22.jpg";
import Header from "../../Header";
import "./Niños.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Niños = () => {
  return (
    <>
      <Helmet>
        <title>Niños</title>
        <meta
          name="description"
          content={
            "Portfolio de las mejores fotos a niños en comuniones y eventos especiales hecho por Gia Fotografía"
          }
        />
      </Helmet>
      <Header />
      <main>
        <div className="container">
          <h2 className="text-center mb-5">NIÑOS</h2>
          <motion.div
            className="grid-niños"
            initial={{ filter: "blur(50px)", y: "10vh", opacity: 0 }}
            animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños1 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños2 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños3 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños4 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños5 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños6 + "')" }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños7 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños8 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-filas"
              style={{ backgroundImage: "url('" + niños9 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-filas"
              style={{ backgroundImage: "url('" + niños10 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños11 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-filas"
              style={{ backgroundImage: "url('" + niños12 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas"
              style={{ backgroundImage: "url('" + niños13 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas tres-filas"
              style={{ backgroundImage: "url('" + niños14 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños15 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños16 + "')" }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños17 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños18 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños19 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + niños20 + "')" }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas tres-filas"
              style={{ backgroundImage: "url('" + niños21 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas tres-filas"
              style={{ backgroundImage: "url('" + niños22 + "')" }}
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Niños;
