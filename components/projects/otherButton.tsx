import React from 'react';
import { useRouter } from 'next/router';

const Boton: React.FC<{ label: any; link: string }> = ({ label, link }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'rgb(3 141 191 / var(--tw-bg-opacity))',
    padding: '10px',
    borderRadius: '6px',
    position: 'absolute',
    top: '80%',
    left: '90%',
    transform: 'translate(-80%, -90%)',
  };

  const labelStyle: React.CSSProperties = {
    color: 'black',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button className="buttonStyle" onClick={handleClick}>
      <span style={labelStyle}>{label}</span>
    </button>
  );
};

export default Boton;