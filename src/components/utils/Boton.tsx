import { motion } from "framer-motion";
import { ReactNode } from "react";

const Boton = ({
  icono,
  texto,
  className,
  onClick,
}: {
  icono?: ReactNode;
  texto?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      className={"btn " + className}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icono}
      {texto}
    </motion.button>
  );
};

export default Boton;
