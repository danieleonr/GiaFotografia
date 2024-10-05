import { ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "../../Header";
import { Helmet } from "react-helmet";

const Boda = ({ novios, fotos }: { novios: string; fotos: ReactNode }) => {
  return (
    <>
      <Helmet>
        <title>Boda destacada</title>
        <meta
          name="description"
          content={
            "Un reportaje fotográfico destacado de una de las bodas atendidas por Gia Fotografía"
          }
        />
      </Helmet>
      <Header />
      <main>
        <div className="container">
          <h2 className="text-center mb-5">{novios}</h2>

          <motion.div
            className="grid-boda"
            initial={{ filter: "blur(50px)", y: "10vh", opacity: 0 }}
            animate={{ filter: "blur(0)", y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {fotos}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Boda;
