import React from 'react';
import { useRouter } from 'next/router';

interface Params {
  urlDestination: string;
  urlImg: string;
  name: string;
  backColor: string;
}

const BotonMultiuso: React.FC<Params> = ({ urlDestination, urlImg, name, backColor }) => {
  const router = useRouter();

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
    router.push(urlDestination);
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

export default BotonMultiuso;
