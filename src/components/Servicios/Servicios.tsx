import { motion } from "framer-motion";
import bodas from "../../assets/SERVICIOS/BODAS.png";
import niños from "../../assets/SERVICIOS/NIÑOS.png";
import eventos from "../../assets/SERVICIOS/EVENTOS.png";
import productos from "../../assets/SERVICIOS/PRODUCTOS.png";
import "./Servicios.css";
import { Link } from "react-router-dom";
import collage from "../../assets/cabeceras/SERVICIOS.png";
import Collage from "../utils/Collage/Collage";
import Header from "../Header";
import { Helmet } from "react-helmet";

const Servicios = () => {
  console.log(window.location.pathname);
  return (
    <>
      <Helmet>
        <title>Servicios</title>
        <meta
          name="description"
          content={
            "Los servicios de fotografía que ofrece Gia Fotografía: Bodas, niños, productos y eventos"
          }
        />
      </Helmet>
      <Header />
      <main>
        <Collage collage={collage} texto="SERVICIOS" />
        <div className="container my-5">
          <h3 className="fw-bolder">NUESTROS TRABAJOS</h3>
          <p className="mb-0">
            Cada trabajo es único y require un tratamiento único.
          </p>
        </div>
        <div className="container m-2 mx-auto">
          <Link
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5"
            role="button"
            to="/portfolio/bodas"
          >
            <motion.div
              className="imagen-fondo imagen-animada"
              style={{ backgroundImage: "url('" + bodas + "')" }}
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "linear" }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>BODAS</h4>
              <p>
                Una boda es siempre un acontecimiento especial, llena de
                instantes entrañables, familiares. Nosotros somos conscientes de
                ellos, y nos gusta captar todo lo que se vive e incluso se
                siente a lo largo de ese día sin invadir esa intimidad.
                Respetando cada momento, mimando los detalles.
              </p>
              <p>
                Os acompañaremos desde que empecéis a prepararos para el gran
                día, hasta que vosotros queráis...
              </p>
              <p>
                Una vez hecho el trabajo, el material fotográfico se os
                entregará según hayamos acordado.
              </p>
              <p className="mb-0">
                Aunque nuestra empresa tenga su sede en Alicante, iremos donde
                nos necesitéis, sólo tenéis que decírnoslo.
              </p>
            </div>
          </Link>
          <Link
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 my-5"
            role="button"
            to="/portfolio/niños"
          >
            <motion.div
              className="imagen-fondo imagen-animada d-lg-none"
              style={{ backgroundImage: "url('" + niños + "')" }}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "linear" }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>NIÑOS</h4>
              <p>
                Los reyes de la casa, todo lo que forma parte de sus vidas se
                convierte en esencial, por eso nos encanta formar parte de su
                historia verlos crecer. Muchas veces nos emociona comprobar que
                hemos estado presentes y hemos hecho que perduren muchos de los
                momentos más importantes de sus vidas, desde la boda de los
                papás, el embarazo, el nacimiento, las fotos en familia,
                Navidades, bautizo, comunión, la llegada de otro hermanito...
              </p>
              <p className="mb-0">
                Nos convertimos en niños para que, jugando con ellos, muestren
                su encanto y su personalidad.
              </p>
            </div>
            <motion.div
              className="imagen-fondo imagen-animada d-none d-lg-block"
              style={{ backgroundImage: "url('" + niños + "')" }}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "linear" }}
            ></motion.div>
          </Link>
          <Link
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5"
            role="button"
            to="/portfolio/eventos"
          >
            <motion.div
              className="imagen-fondo imagen-animada"
              style={{ backgroundImage: "url('" + eventos + "')" }}
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 3, ease: "linear" }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>EVENTOS</h4>
              <p>
                Trabajamos todo tipo de eventos: deportivos, culturales,
                institucionales, corporativos, benéficos...
              </p>
              <p className="mb-0">
                Sabiendo reflejar la mejor imagen de nuestros clientes,
                cubriendo cada uno de ellos, desde todos los ángulos, con rigor
                y con el tratamiento que se requiere en cada caso.
              </p>
            </div>
          </Link>
          <Link
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 my-5"
            role="button"
            to="/portfolio/productos"
          >
            <motion.div
              className="imagen-fondo imagen-animada d-lg-none"
              style={{ backgroundImage: "url('" + productos + "')" }}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 4, ease: "linear" }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>PRODUCTOS</h4>
              <p>
                Estamos preparados para ofrecer a nuestros clientes la
                posibilidad de mostrar su producto, sea cual sea, tal y como
                ellos quieren... Aportando una visión creativa, atractiva y
                profesional.{" "}
              </p>
            </div>
            <motion.div
              className="imagen-fondo imagen-animada d-none d-lg-block"
              style={{ backgroundImage: "url('" + productos + "')" }}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 4, ease: "linear" }}
            ></motion.div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Servicios;
