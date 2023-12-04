import React from 'react';
import { useRouter } from 'next/router';

interface Location{
  distanceTop: string
  distanceLeft: string
  handlerClick: ()=>void
}

export const CancelarBoton: React.FC<Location> = ({distanceLeft, distanceTop, handlerClick}) => {
  const router = useRouter();

  const botonStyle: React.CSSProperties = {
    position: 'fixed',
    width: '7vw',
    height: '4.5vh',
    left: distanceLeft,
    top: distanceTop,
    backgroundColor: '#FFFFFF',
    color: 'black',
    padding: '20px',
    border: '2px solid #427D9D',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const handleClick = () => {
    handlerClick();
  };

  return (
    <button style={botonStyle} onClick={handleClick}>
      <span>Cancelar</span>
    </button>
  );
};
