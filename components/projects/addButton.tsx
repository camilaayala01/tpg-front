import React from 'react';
import { useRouter } from 'next/router';

interface Params  {
  url: string;
  name: string;
}

const BotonAgregar: React.FC<Params> = ({url,name}) => {
  const router = useRouter();

  const botonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '18%',
    right: '8%',
    padding: '10px',
    backgroundColor: '#427D9D',
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const iconStyle: React.CSSProperties = {
    width: '25px',
    height: '25px',
  };

  function handleButtonClick() {
    router.push(url);
  }

  return (
    <button style={botonStyle} onClick={handleButtonClick}>
      <span style={{ fontSize: '0.9vw', fontWeight: 'bold' }}>{name}</span>
      &nbsp;
      <img src="https://i.ibb.co/pbXRFvd/add.png" alt="add" style={iconStyle} />
    </button>
  );
};

export default BotonAgregar;