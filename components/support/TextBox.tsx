import React, { useState } from 'react';

interface CampoDeTextoProps {
  style?: React.CSSProperties;  // Define la propiedad opcional 'style'
}

const TextBox: React.FC<{label: any; description: any; style?: React.CSSProperties}> = ({ label, description, style }) => {
  // Utilizamos el estado para manejar el valor del campo de texto
  const [valor, setValor] = useState('');

  // Manejar cambios en el campo de texto
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setValor(event.target.value);
  };

  return (
    <div style={style}>
        <p style={{fontWeight: 'bold'}}>{label}</p>
        <p style={{fontSize: '0.9rem'}}>{description}</p>
        <input
            type="text"
            id="campoTexto"
            value={valor}
            onChange={handleChange}
            style={{backgroundColor: '#EDEDED', width: '300px', height: '40px', borderRadius: '12px'}}
        />
    </div>
  );
};

export default TextBox;