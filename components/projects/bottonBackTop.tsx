import React from 'react';
import { useRouter } from 'next/router';

interface Location{
  distanceTop: string
  distanceLeft: string
}

export const BotonAtrasTop: React.FC<Location> = ({distanceLeft, distanceTop}) => {
  const router = useRouter();

  const botonStyle: React.CSSProperties = {
    position: 'fixed',
    width: '7vw',
    height: '4.5vh',
    left: distanceLeft,
    top: distanceTop,
    backgroundColor: '#427D9D',
    color: 'black',
    padding: '20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const handleClick = () => {
    router.back();
  };

  return (
    <button style={botonStyle} onClick={handleClick}>
      <span>Atras</span>
        <svg fill="none" stroke="currentColor" strokeWidth="2.5" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
    </button>
  );
};


