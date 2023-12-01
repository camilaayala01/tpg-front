import React, { ChangeEvent } from 'react';

interface CampoDeTextoProps {
    label: any;
    name: string;
    description: any;
    style?: React.CSSProperties;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

const DescriptionBox: React.FC<CampoDeTextoProps> = ({ label, name, description, style, handleChange }) =>{

  return (
    <div style={style}>
        <label htmlFor={name} style={{fontWeight: 'bold', color: 'black'}}>{label}
        <p style={{fontSize: '0.9rem', fontWeight: 'normal', color : 'grey'}}>{description}</p>
        <input
            type="text"
            name={name}
            onChange={handleChange}
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: '40%',
              borderRadius: '8px',
              color: 'black',
              border: '1px solid black',
              padding: '5px',
              verticalAlign: 'top',
            }}
        />
        </label>
    </div>
  );
};


export default DescriptionBox;
