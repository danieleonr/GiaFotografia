import collage from "../assets/cabeceras/VIDEOS.png";
import Collage from "./utils/Collage/Collage";
import corpVideo from "../assets/VÍDEOS/Corp Gallery Editorial.mov";
import corpMiniatura from "../assets/VÍDEOS/PORTADA VIDEOSwedding.png";
import pYJVideo from "../assets/VÍDEOS/Highlights Patricia+Joaquín.mp4";
import pYJVMiniatura from "../assets/VÍDEOS/Patricia y Joaquin.jpg";
import Header from "./Header";
import Video from "./utils/Video/Video";
import { Helmet } from "react-helmet";

const Videos = () => {
  return (
    <>
      <Helmet>
        <title>Vídeos</title>
        <meta
          name="description"
          content={"Reportajes en vídeo realizados por Gia Fotografía en bodas"}
        />
      </Helmet>
      <Header />
      <main>
        <Collage collage={collage} texto="VÍDEOS" />
        <div className="container m-2 mt-5 mx-auto">
          <p>
            Tras más de 20 años dedicándonos a la videografía nupcial, hemos
            llegado a la conclusión de que lo mejor es filmar todo en su estado
            natural, desde nuestra perspectiva creativa sin preparar los
            momentos ni interceder en ellos. Como siempre decimos, ya pasan
            suficientes cosas interesantes ese día, nosotros sólo tenemos que
            estar atentos para captarlas de la mejor forma posible.
          </p>
          <p className="mb-0">
            ¡Y los que saben de esto dicen que se nos da bastante bien!
          </p>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 mt-5">
            <div className="col-lg-4 text-center text-lg-start">
              <h4>SUEÑOS COMPARTIRDOS</h4>
              <p className="mb-0">
                Boda Patricia y Joaquín. Finca Fidegüet, Alicante.
              </p>
            </div>
            <Video video={pYJVideo} miniatura={pYJVMiniatura} />
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 mt-5">
            <div className="col-lg-4 text-center text-lg-start">
              <h4>EL MEJOR EQUIPO</h4>
              <p className="mb-0">
                Reel boda. Finca Riola San Gabriel, Alicante.
              </p>
            </div>
            <Video video={corpVideo} miniatura={corpMiniatura} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Videos;
