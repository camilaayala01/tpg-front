import React from 'react';
import { useRouter } from 'next/router';

const SoftRectangle1: React.FC = () => {

  const router = useRouter();
  
  const innerContainerStyle: React.CSSProperties = {
    display: 'flex',
    position: 'fixed',
    width: '700px',
    height: '192px',
    backgroundColor: '#427D9D',
    padding: '16px',
    borderRadius: '12px',
    top: '15vh',
    left: '20vw',
  };

  const circleStyle: React.CSSProperties = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    left: '8%',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#9BBEC8',
    borderRadius: '50%',
  };

  const imageStyle: React.CSSProperties = {
    position: 'relative',
    width: '120px',
    height: '120px',
    top: '10%',
    left: '10%',
  };

  const buttonStyle: React.CSSProperties = {
    width: '200px',
    height: '50px',
    backgroundColor: '#9BBEC8',
    padding: '4px',
    borderRadius: '8px',
    position: 'relative',
    top: '40%',
    left: '70%',
  };

  const handleClick = () => {
    // Cambia '/otra-pagina' a la ruta de la página a la que deseas redirigir
    router.push('/support/create_ticket');
  };

  return (
    <div style={innerContainerStyle}>
      <div style={circleStyle}>
        <img
          id='img-ticket'
          src="https://cdn-icons-png.flaticon.com/512/10729/10729100.png"
          alt="Imagen del ticket"
          style={imageStyle}
        />
      </div>
      <p style={{position: 'absolute', color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', left: '39%' }}>Crear ticket</p>
      <p style={{position: 'absolute', color: 'black', textAlign: 'center', fontSize: '1.25rem', left: '35%', top: '30%' }}>
        Este componente <br />
        permite la creación de <br />
        tickets de tareas <br />
      </p>
      <button style={buttonStyle} onClick={handleClick}>
        <p style={{position: 'absolute', top: '15px', left: '5px', color: 'black', textAlign: 'left', fontSize: '1rem', marginBottom: '-23px' }}>Ir a Crear Ticket</p>
        <img
          id='img-vector'
          src="https://i.ibb.co/DDJGg9P/Vector-1.png"  
          alt="Imagen del vector"
          style={{position: 'absolute', top: '5px', left: '150px'}}
        />
      </button> {/* BOTON CHICO */}
    </div>
  );
}

export default SoftRectangle1;

