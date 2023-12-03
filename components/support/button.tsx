import React from 'react';
import { useRouter } from 'next/router';

const Boton: React.FC<{label: any; style?: React.CSSProperties; funcion: any}> = ({label, style, funcion}) => {

const router = useRouter();

interface CampoDeTextoProps {
  style?: React.CSSProperties;  // Define la propiedad opcional 'style'
}

const handleClick = () => {
  // Cambia '/otra-pagina' a la ruta de la página a la que deseas redirigir
  funcion();;
};

return (
  <button style={style} onClick={handleClick}>
    {label} 
  </button>
);
};

export default Boton;