import React, { useState } from 'react';

interface CampoDeTextoProps {
    style?: React.CSSProperties;  // Define la propiedad opcional 'style'
  }

  const ListBox: React.FC<{ label: any; style?: React.CSSProperties; opciones: string[]; onChange: (name: string, value: string) => void }> = ({ label, style, opciones, onChange }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  
    const handleSeleccion = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setOpcionSeleccionada(value);
      onChange(value, value);
    };
  
    return (
      <div style={style}>
        <label htmlFor={`listaDesplegable_${label}`} style={{ fontSize: '1.3em', fontWeight: 'bold', color: 'black' }}>{label}</label>
        <select
          id={`listaDesplegable_${label}`}
          value={opcionSeleccionada}
          onChange={handleSeleccion}
          style={{ position: 'absolute', top: '100%', left: '10%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666' }}
        >
          <option value="" style={{ color: 'black' }}>{label}</option>
          {opciones.map((opcion, index) => (
            <option key={index} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>
    );
  };

export default ListBox;
