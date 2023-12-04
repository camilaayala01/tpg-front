import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface CampoDeTextoProps {
    label: any;
    name: string;
    description: any;
    style?: React.CSSProperties;
    defaultValue: string;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

const TextBox: React.FC<CampoDeTextoProps> = ({ label, name, description, style,defaultValue , handleChange }) =>{

  return (
    <div style={style}>
        <label htmlFor={name} style={{fontWeight: 'bold', color: 'black'}}>{label}
        <p style={{fontSize: '0.9rem', fontWeight: 'normal', color : 'grey'}}>{description}</p>
        
        <input
            type="text"
            name={name}
            onChange={handleChange}
            defaultValue={defaultValue}
            style={{backgroundColor: '#E8EDFF', padding:'7px', width: '300px', height: '40px', borderRadius: '12px', color: 'black'}}
        />
        
       
        </label>
    </div>
  );
};

export default TextBox;
