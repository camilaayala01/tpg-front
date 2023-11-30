import React from 'react';
import { useRouter } from 'next/router';

const Boton: React.FC<{label: any; style?: React.CSSProperties; link: string}> = ({label, style, link}) => {

  const router = useRouter();

  interface CampoDeTextoProps {
    style?: React.CSSProperties;  // Define la propiedad opcional 'style'
  }

  const handleClick = () => {
    // Cambia '/otra-pagina' a la ruta de la página a la que deseas redirigir
    window.location.reload();;
  };

  return (
    <button style={style} onClick={handleClick}>
      {label} 
    </button>
  );
};

export default Boton;