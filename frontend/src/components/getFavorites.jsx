import React, { useState, useEffect } from 'react';
import ShowItens from './ShowItens';

export default function GetFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const [renderFavorites, setRenderFavorites] = useState([]);
  const updateState = () => {
    setRenderFavorites(favorites);
  };

  useEffect(() => {
    setTimeout(() => {
      updateState();
    }, 500);
  }, [renderFavorites]);

  return (
    <div>
      {renderFavorites && renderFavorites.map((favorite, index) => (
        <ShowItens key={favorite._id} res={favorite} ind={index} />
      ))}
    </div>
  );
}
