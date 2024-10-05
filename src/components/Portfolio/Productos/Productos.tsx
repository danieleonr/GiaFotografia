import productos1 from "../../../assets/PORTFOLIO/PRODUCTOS/1.jpg";
import productos2 from "../../../assets/PORTFOLIO/PRODUCTOS/2.jpg";
import productos3 from "../../../assets/PORTFOLIO/PRODUCTOS/3.jpg";
import productos4 from "../../../assets/PORTFOLIO/PRODUCTOS/4.jpg";
import productos5 from "../../../assets/PORTFOLIO/PRODUCTOS/5.jpg";
import productos6 from "../../../assets/PORTFOLIO/PRODUCTOS/6.jpg";
import productos7 from "../../../assets/PORTFOLIO/PRODUCTOS/7.jpg";
import productos8 from "../../../assets/PORTFOLIO/PRODUCTOS/8.jpg";
import productos9 from "../../../assets/PORTFOLIO/PRODUCTOS/9.jpg";
import productos10 from "../../../assets/PORTFOLIO/PRODUCTOS/10.jpg";
import productos11 from "../../../assets/PORTFOLIO/PRODUCTOS/11.jpg";
import productos12 from "../../../assets/PORTFOLIO/PRODUCTOS/12.jpg";
import productos13 from "../../../assets/PORTFOLIO/PRODUCTOS/13.jpg";
import productos14 from "../../../assets/PORTFOLIO/PRODUCTOS/14.jpg";
import productos15 from "../../../assets/PORTFOLIO/PRODUCTOS/15.jpg";
import productos16 from "../../../assets/PORTFOLIO/PRODUCTOS/16.jpg";
import productos17 from "../../../assets/PORTFOLIO/PRODUCTOS/17.jpg";
import productos18 from "../../../assets/PORTFOLIO/PRODUCTOS/18.jpg";
import productos19 from "../../../assets/PORTFOLIO/PRODUCTOS/19.jpg";
import productos20 from "../../../assets/PORTFOLIO/PRODUCTOS/20.jpg";
import productos21 from "../../../assets/PORTFOLIO/PRODUCTOS/21.jpg";
import productos22 from "../../../assets/PORTFOLIO/PRODUCTOS/22.jpg";
import productos23 from "../../../assets/PORTFOLIO/PRODUCTOS/23.jpg";
import productos24 from "../../../assets/PORTFOLIO/PRODUCTOS/24.jpg";
import productos25 from "../../../assets/PORTFOLIO/PRODUCTOS/25.jpg";
import Header from "../../Header";
import "./Productos.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Productos = () => {
  return (
    <>
      <Helmet>
        <title>Productos</title>
        <meta
          name="description"
          content={
            "Portfolio de marketing de productos fotografiados por Gia Fotografía"
          }
        />
      </Helmet>
      <Header />
      <main>
        <div className="container">
          <h2 className="text-center mb-5">PRODUCTOS</h2>
          <motion.div
            className="grid-productos"
            initial={{ filter: "blur(50px)", y: "10vh", opacity: 0 }}
            animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div
              className="imagen-fondo dos-columnas"
              style={{ backgroundImage: "url('" + productos1 + "')" }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas dos-filas"
              style={{
                backgroundImage: "url('" + productos2 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas tres-filas"
              style={{
                backgroundImage: "url('" + productos3 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos4 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{
                backgroundImage: "url('" + productos5 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos6 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{
                backgroundImage: "url('" + productos7 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos8 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos9 + "')" }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos10 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos11 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas tres-filas"
              style={{ backgroundImage: "url('" + productos12 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas dos-filas"
              style={{ backgroundImage: "url('" + productos13 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + productos14 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{
                backgroundImage: "url('" + productos15 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + productos16 + "')" }}
            ></div>
            <div
              className="imagen-fondo"
              style={{ backgroundImage: "url('" + productos17 + "')" }}
            ></div>
            <div
              className="imagen-fondo tres-columnas"
              style={{
                backgroundImage: "url('" + productos18 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{
                backgroundImage: "url('" + productos19 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas dos-filas"
              style={{
                backgroundImage: "url('" + productos20 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas"
              style={{
                backgroundImage: "url('" + productos21 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas tres-filas"
              style={{
                backgroundImage: "url('" + productos22 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas"
              style={{
                backgroundImage: "url('" + productos23 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo dos-columnas tres-filas"
              style={{
                backgroundImage: "url('" + productos24 + "')",
              }}
            ></div>
            <div
              className="imagen-fondo cuatro-columnas dos-filas"
              style={{
                backgroundImage: "url('" + productos25 + "')",
              }}
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Productos;
