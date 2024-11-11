import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleNextClick() {
    setIndex(index < 11 ? index+1 : 0);
  }
  function handlePreviousClick() {
    setIndex(index > 0 ? index-1 : 11)
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePreviousClick}>
        Anterior
      </button>
      <button onClick={handleNextClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <br/>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}