const Footer = () => {
  return (
    <div className="footer bg-dark text-white p-3 text-center mt-5">
      <span>
        &copy; {new Date().getFullYear()} Todos los derechos reservados
      </span>
    </div>
  );
};

export default Footer;
