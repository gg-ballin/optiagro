import React from 'react';

const Card = ({ name, quantity, description, id }) => {
  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p> <i>Cantidad: </i> {quantity}</p>
        <p> <em>Descripcion: </em> {description} </p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
}

export default Card;
