import "./Panel.css";
const Panel = ({
  imagen,
  texto,
  onClick,
}: {
  imagen: string;
  texto: string;
  onClick?: () => void;
}) => {
  return (
    <div role="button" onClick={onClick}>
      <div className="contenedor-imagen">
        <div
          className="imagen imagen-fondo"
          style={{ backgroundImage: "url('" + imagen + "')" }}
        ></div>
      </div>

      <h4 className="mt-4 fw-bolder text-center">{texto}</h4>
    </div>
  );
};

export default Panel;
