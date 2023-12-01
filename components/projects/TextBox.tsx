import React, { ChangeEvent, FormEvent, useState } from 'react';

interface CampoDeTextoProps {
    label: any;
    name: string;
    description: any;
    style?: React.CSSProperties;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

const TextBox: React.FC<CampoDeTextoProps> = ({ label, name, description, style, handleChange }) =>{

  return (
    <div style={style}>
        <label htmlFor={name} style={{fontWeight: 'bold', color: 'black'}}>{label}
        <p style={{fontSize: '0.9rem', fontWeight: 'normal', color : 'grey'}}>{description}</p>
        <input
            type="text"
            name={name}
            onChange={handleChange}
            style={{backgroundColor: '#EDEDED', width: '300px', height: '40px', borderRadius: '12px', color: 'black', padding: '5px'}}
        />
        </label>
    </div>
  );
};

export default TextBox;
