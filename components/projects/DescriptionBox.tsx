import React, { ChangeEvent } from 'react';

interface CampoDeTextoProps {
    label: any;
    name: string;
    description: any;
    style?: React.CSSProperties;
    defaultValue: string;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

const DescriptionBox: React.FC<CampoDeTextoProps> = ({ label, name, description, style,defaultValue, handleChange}) =>{

  return (
    <div style={style}>
        <label htmlFor={name} style={{fontWeight: 'bold', color: 'black' }}>{label}
        
        <p style={{fontSize: '0.9rem', fontWeight: 'normal', color: 'black' }}>{description}</p>
        
        <textarea
          name={name}
          defaultValue={defaultValue}
          onChange={handleChange}
          style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            minHeight: '150px',
            fontWeight: 'normal',
            borderRadius: '8px',
            color: 'black',
            border: '1px solid black',
            padding: '15px',
            resize: 'vertical',
            boxSizing: 'border-box',
            wordWrap: 'break-word',
            display: 'block',
          }}
        />
        </label>
    </div>
  );
};


export default DescriptionBox;
