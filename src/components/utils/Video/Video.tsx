import { useRef, useState } from "react";
import play from "../../../assets/VÍDEOS/play-button.png";
import "./Video.css";
import { motion } from "framer-motion";

const Video = ({ video, miniatura }: { video: string; miniatura: string }) => {
  const [videoVisible, setVideoVisible] = useState<boolean>(false);
  const [pasandoRaton, setPasandoRaton] = useState<boolean>(false);
  const [haciendoClic, setHaciendoClic] = useState<boolean>(false);
  const videoElement = useRef<HTMLVideoElement>(null);

  const reproducirVideo = () => {
    if (
      videoElement.current &&
      videoElement.current.currentTime <= 0 &&
      !videoVisible
    ) {
      setTimeout(function () {
        if (videoElement.current) {
          setVideoVisible(true);
          videoElement.current.play();
        }
      }, 250);
    }
  };
  return (
    <>
      <div
        className="col-12 col-lg-6 d-flex imagen-fondo justify-content-center align-items-center miniatura"
        style={{ backgroundImage: "url('" + miniatura + "')" }}
        onClick={reproducirVideo}
        onMouseOver={() => setPasandoRaton(true)}
        onMouseOut={() => {
          setPasandoRaton(false);
          setHaciendoClic(false);
        }}
        onMouseDown={() => setHaciendoClic(true)}
        onMouseUp={() => setHaciendoClic(false)}
      >
        {!videoVisible && (
          <motion.img
            src={play}
            height={150}
            className="position-absolute"
            animate={{
              scale: (haciendoClic && 0.8) || (pasandoRaton && 1.2) || 1,
            }}
          />
        )}

        <video
          ref={videoElement}
          src={video}
          controls
          className={!videoVisible ? "invisible" : ""}
        />
      </div>
    </>
  );
};

export default Video;
