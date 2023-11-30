import React from 'react';

const SoftRectangle2: React.FC = () => {
  
  const innerContainerStyle: React.CSSProperties = {
    display: 'flex',
    position: 'fixed',
    width: '700px',
    height: '192px',
    backgroundColor: 'rgb(3 121 191 / var(--tw-bg-opacity))',
    padding: '16px',
    borderRadius: '12px',
    top: '55vh',
    left: '20vw'
  };

  const circleStyle: React.CSSProperties = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    left: '8%',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgb(3 141 191 / var(--tw-bg-opacity))',
    borderRadius: '80%',
  };

  const imageStyle: React.CSSProperties = {
    position: 'relative',
    width: '110px',
    height: '110px',
    top: '10%',
    left: '10%',
  };

  const buttonStyle: React.CSSProperties = {
    width: '200px',
    height: '50px',
    backgroundColor: 'rgb(3 141 191 / var(--tw-bg-opacity))',
    padding: '4px',
    borderRadius: '8px',
    position: 'relative',
    top: '40%',
    left: '70%',
  };

  return (
    <div style={innerContainerStyle}>
      <div style={circleStyle}>
        <img
          id='img-ticket'
          src="https://i.ibb.co/z50cwNt/loupe-1.png"
          alt="Imagen del ticket"
          style={imageStyle}
        />
      </div>
      <p style={{position: 'absolute', color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', left: '39%' }}>Gestionar tickets</p>
      <p style={{position: 'absolute', color: 'black', textAlign: 'center', fontSize: '1.25rem', left: '35%', top: '30%' }}>
        Este componente permite<br />
        la visualización, <br />
        modificación y eliminación<br />
        de tickets<br />
      </p>
      <button style={buttonStyle}>
        <p style={{position: 'absolute', top: '15px', left: '5px', color: 'black', textAlign: 'left', fontSize: '1rem', marginBottom: '-23px'}}>Ir a Gestionar Ticket</p>
        <img
          id='img-vector'
          src="https://i.ibb.co/DDJGg9P/Vector-1.png"  
          alt="Imagen del vector"
          style={{position: 'relative', top: '1px', left: '150px'}}
        />
      </button> {/* BOTON CHICO */}
    </div>
  );
}

export default SoftRectangle2;

