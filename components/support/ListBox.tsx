import React, { useState } from 'react';

interface CampoDeTextoProps {
    style?: React.CSSProperties;  // Define la propiedad opcional 'style'
  }

const ListBox: React.FC<{label: any; style?: React.CSSProperties; opciones: string[]}> = ({ label, style, opciones }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSeleccion = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div style={style}>
      <label htmlFor="listaDesplegable" style={{ fontSize: '1.3em', fontWeight: 'bold' }}>{label}</label>
      <select id="listaDesplegable" value={opcionSeleccionada} onChange={handleSeleccion} style={{position: 'absolute', top: '100%', left: '10%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
        <option value="">{label}</option>
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
