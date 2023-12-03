import React, { useState } from 'react';

interface CampoDeTextoProps {
  style?: React.CSSProperties;  // Define la propiedad opcional 'style'
}

const TextBox: React.FC<{ label: any; description: any; style?: React.CSSProperties; onChange: (name: string, value: string) => void }> = ({ label, description, style, onChange }) => {
  const [valor, setValor] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValor(value);
    onChange(value, value);
  };

  return (
    <div style={style}>
      <p style={{ fontWeight: 'bold', color: 'black' }}>{label}</p>
      <p style={{ fontSize: '0.9rem', color: 'black' }}>{description}</p>
      <input
        type="text"
        id={`campoTexto_${label}`}
        value={valor}
        onChange={handleChange}
        style={{ backgroundColor: '#EDEDED', width: '300px', height: '40px', borderRadius: '12px', color: 'black' }}
      />
    </div>
  );
};

export default TextBox;