import React from 'react';
import Card from '../Card/Card';

const CardList = ({ items }) => {
  return (
    <div>
      { 
        items && items.map((item, i) => {
          return (
            <Card
              key={i}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              description={item.description}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;