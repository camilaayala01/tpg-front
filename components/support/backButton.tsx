import React from 'react';
import { useRouter } from 'next/router';

const BotonAtras: React.FC = () => {

  const router = useRouter();

  const botonStyle: React.CSSProperties = {
    position: 'fixed',
    width: '15vw',
    bottom: '0px',
    left: '0px',
    backgroundColor: 'rgb(3 105 161 / var(--tw-bg-opacity))',
    color: 'black',
    padding: '20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  fetch

  const handleClick = () => {
    // Cambia '/otra-pagina' a la ruta de la página a la que deseas redirigir
    router.back();
  };

  return (
    <button style={botonStyle} onClick={handleClick}>
      Atras
      <img
        src="https://i.ibb.co/h9dB1zf/Vector.png"
        alt="Imagen"
        style={{ marginLeft: '5px', width: '20px', height: '20px' }}
      />
    </button>
  );
};

export default BotonAtras;

  