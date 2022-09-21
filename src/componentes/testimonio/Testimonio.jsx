import React from 'react';
import "./testimonio.css"

export default function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img src={require(`../../imagenes/testimonio-${props.imagen}.png`)} 
      alt="Foto de Emma" 
      className='imagen-testimonio'/>
     <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>

     </div>
    </div>
  )
}
