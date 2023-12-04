import React from 'react';

interface Params {
  urlImg: string;
  name: string;
  backColor: string;
  handleClick: ()=>void;
}

const BotonEliminar: React.FC<Params> = ({ urlImg, name, backColor, handleClick }) => {

  const botonStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: backColor,
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginRight: '8px',
  };

  const iconStyle: React.CSSProperties = {
    maxWidth: '40px',
    height: '30px',
  };

  function handleButtonClick() {
    handleClick();
  }

  return (
    <button style={botonStyle} onClick={handleButtonClick}>
      <div style={containerStyle}>
        <span style={textStyle}>{name}</span>
        <img src={urlImg} alt="add" style={iconStyle} />
      </div>
    </button>
  );
};

export default BotonEliminar;

