import React from 'react';
import { useRouter } from 'next/router';

export const BotonAtrasTask: React.FC = () => {
  const router = useRouter();

  const botonStyle: React.CSSProperties = {
    position: 'fixed',
    width: '7vw',
    height: '4.5vh',
    left: '90%',
    top: '11%',
    backgroundColor: '#427D9D',
    color: 'black',
    padding: '20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex', // Distribuye el espacio entre los elementos
    alignItems: 'center',
  };

  const handleClick = () => {
    router.back();
  };

  return (
    <button style={{botonStyle}} onClick={handleClick}>
      <span>Atras</span>
        <svg fill="none" stroke="currentColor" stroke-width="2.5" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
    </button>
  );
};


