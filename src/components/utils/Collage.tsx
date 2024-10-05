const Collage = ({ collage, texto }: { collage: string; texto: string }) => {
  return (
    <div id="collage-container" className="position-relative">
      <div
        id="collage"
        style={{ backgroundImage: "url('" + collage + "')" }}
      ></div>
      <div className="container d-flex align-items-center h-100">
        <h1 className="large-title fw-bolder text-white">{texto}</h1>
      </div>
    </div>
  );
};

export default Collage;
