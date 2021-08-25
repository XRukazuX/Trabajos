import React from 'react';
function Box({ clase, foto, nombre, sub, tex1, tex2 }) {
  return (
    <div className={clase}>
      <section>
        <img src={foto} alt="" />
      </section>

      <h2 className="nombre">{nombre}</h2>
      <p className="sub">{sub}</p>
      <p className="text">{tex1}</p>
      <p className="text2">{tex2}</p>
    </div>
  );
}

export default Box;
