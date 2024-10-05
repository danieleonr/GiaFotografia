import Header from "../Header";
import { motion } from "framer-motion";
import maribel from "../../assets/NOSOTROS/Maribel.jpg";
import xanti from "../../assets/NOSOTROS/Xanti.jpg";
import milca from "../../assets/NOSOTROS/Milca.jpg";
import "./Nosotros.css";
import Boton from "../utils/Boton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AboutMeComponent = () => {
  const ENLACE_DESARROLLO = "https://formspree.io/f/mnnayove";
  const ENLACE_REAL = "https://formspree.io/f/mrbzwzrk";
  return (
    <>
      <Helmet>
        <title>Nosotros</title>
        <meta
          name="description"
          content={"Quienes forman parte del equipo detrás de Gia Fotografía"}
        />
      </Helmet>
      <Header />
      <main>
        <div className="container m-2 mx-auto">
          <h2 className="mb-5 text-center">¡CONOZCÁMONOS!</h2>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 mb-5 mb-lg-0">
            <motion.div
              className="imagen-fondo imagen-nosotros flex-shrink-0 d-lg-none"
              style={{ backgroundImage: "url('" + maribel + "')" }}
              initial={{ filter: "blur(20px)", x: 100, y: 30 }}
              animate={{ filter: "blur(0)", x: 0, y: 0 }}
              transition={{ duration: 1, ease: "linear" }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>MARIBEL</h4>
              <p>
                Crecí en una familia donde yo creo que el Arte forma parte de
                nuestro ADN.
              </p>
              <p>
                Desde siempre he aprendido a mirar no sólo con los ojos. Me he
                sentido fascinada por los colores, por las formas, por la luz,
                pero sobre todo por ese algo que no se ve pero que se percibe,
                que se siente, y desde muy joven quise captarlo para siempre.
              </p>
              <p>
                La fotografía es por eso para mí algo más que un trabajo. Es una
                manera de vivir, de mirar al mundo, a la gente y convertirlos en
                eternos, en emoción, en belleza...
              </p>
              <p>
                Llevo muchos años dedicándome a la fotografía y sigo sintiendo
                la misma pasión del principio, aunque con más experiencia y
                acompañada por un fabuloso equipo que comparte esa misma pasión.
              </p>
            </div>
            <motion.div
              className="imagen-fondo imagen-nosotros flex-shrink-0 d-none d-lg-block"
              style={{ backgroundImage: "url('" + maribel + "')" }}
              initial={{ filter: "blur(20px)", x: 100, y: 30 }}
              animate={{ filter: "blur(0)", x: 0, y: 0 }}
              transition={{ duration: 1, ease: "linear" }}
            ></motion.div>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 mb-5 mb-lg-0">
            <motion.div
              className="imagen-fondo imagen-nosotros flex-shrink-0"
              style={{ backgroundImage: "url('" + xanti + "')" }}
              initial={{ filter: "blur(20px)", x: -100, y: 30 }}
              animate={{ filter: "blur(0)", x: 0, y: 0 }}
              transition={{ duration: 1, ease: "linear", delay: 1 }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>XANTI</h4>
              <p>
                Hola soy Xanti Valverde, filmmaker con amplia experiencia en el
                sector audiovisual.
              </p>
              <p>
                Empecé mi carrera en cine y televisión, finalmente decidí
                enfocarme en la cinematografía de bodas. Me considero un
                apasionado de contar historias a través de una cámara.
              </p>
              <p>
                Una de las cosas que más me gustan de mi trabajo, es imaginarme
                el momento en el que veáis el vídeo de vuestra boda dentro de
                unos años. Esa sensación tiene que ser increíble.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
            <motion.div
              className="imagen-fondo imagen-nosotros flex-shrink-0 d-lg-none"
              style={{ backgroundImage: "url('" + milca + "')" }}
              initial={{ filter: "blur(20px)", x: 100, y: 30 }}
              animate={{ filter: "blur(0)", x: 0, y: 0 }}
              transition={{ duration: 1, ease: "linear", delay: 2 }}
            ></motion.div>
            <div className="text-center text-lg-start">
              <h4>MILCA</h4>
              <p>
                Decir que la fotografía me apasiona sería muy tópico. Explicar
                el momento preciso en que sentí esa necesidad es mucho más
                personal.
              </p>
              <p>
                Tuve un profesor que se empeñó en que aprendiéramos a revelar en
                blanco y negro, eso es algo que me marcó. Es mágico estar en el
                cuarto oscuro esperando a ver cómo aparece la imagen bajo esa
                luz roja. Eso fue determinante para estudiar Imagen y Sonido.
              </p>
              <p>
                Allí coincidí con Maribel y empezamos a compartir sueños e
                inquietudes. Desde entonces hemos trabajado juntas con algunas
                interrupciones y ya de forma continua a mi vuelta de África,
                otra de mis grandes pasiones.
              </p>
            </div>
            <motion.div
              className="imagen-fondo imagen-nosotros flex-shrink-0 d-none d-lg-block"
              style={{ backgroundImage: "url('" + milca + "')" }}
              initial={{ filter: "blur(20px)", x: 100, y: 30 }}
              animate={{ filter: "blur(0)", x: 0, y: 0 }}
              transition={{ duration: 1, ease: "linear", delay: 2 }}
            ></motion.div>
          </div>

          <h3 className="mt-5 text-center">ENTREMOS EN CONTACTO</h3>
          <form method="POST" action={ENLACE_REAL} className="mx-auto col-lg-8">
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea id="mensaje" name="mensaje" className="form-control" />
            </div>
            <Boton
              texto="ENVIAR"
              className="btn-dark mt-3 d-block mx-auto fs-5"
            />
          </form>
          <h3 className="mt-5 text-center">
            Otras formas de contactar con nosotros
          </h3>
          <div className="d-flex justify-content-around col-lg-3 m-auto">
            <Link to="https://www.instagram.com/giafotografia" target="_blank">
              <Boton
                icono={<FontAwesomeIcon icon={fab.faInstagram} />}
                className="btn-dark rounded-circle fs-5"
              />
            </Link>

            <Link to="https://www.facebook.com/giafotografia" target="_blank">
              <Boton
                icono={<FontAwesomeIcon icon={fab.faFacebook} />}
                className="btn-dark rounded-circle fs-5"
              />
            </Link>

            <Link to="https://es.pinterest.com/giafotografia" target="_blank">
              <Boton
                icono={<FontAwesomeIcon icon={fab.faPinterest} />}
                className="btn-dark rounded-circle fs-5"
              />
            </Link>

            <Link to="mailto:studio@giafotografia.com" target="_blank">
              <Boton
                icono={<FontAwesomeIcon icon={fas.faEnvelope} />}
                className="btn-dark rounded-circle fs-5"
              />
            </Link>

            <Link to="tel:650510300" target="_blank">
              <Boton
                icono={<FontAwesomeIcon icon={fas.faPhone} />}
                className="btn-dark rounded-circle fs-5"
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMeComponent;
