import React from 'react';
import { useRouter } from 'next/router';

const BotonAtras: React.FC = () => {
  const router = useRouter();

  const botonStyle: React.CSSProperties = {
    position: 'fixed',
    width: '10vw',
    height: '7vh',
    bottom: '0px',
    left: '0px',
    backgroundColor: '#427D9D',
    color: 'black',
    padding: '20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between', // Distribuye el espacio entre los elementos
    alignItems: 'center',
  };

  const handleClick = () => {
    router.back();
  };

  return (
    <button style={botonStyle} onClick={handleClick}>
      <span>Atras</span>
      <img
        src="https://i.ibb.co/pbXRFvd/add.png"
        alt="Imagen"
        style={{ width: '22px', height: '22px' }}
      />
    </button>
  );
};

export default BotonAtras;
