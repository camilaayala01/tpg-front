import React from 'react';
import TextBox from './TextBox';
import ListBox from './ListBox';
import Boton from './button_soporte';

const RectanguloConBorde: React.FC = () => {
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    border: '12px solid #9BBEC8',
    borderRadius: '12px',
    top: '15vh',
    left: '25vw'
  };

  return (
    <div style={estiloRectangulo}>
      {/* Contenido del rectángulo */}
      <TextBox label = 'Nombre' description = 'Indique el nombre del ticket' style = {{position: 'absolute', top: '15%', left: '5%'}}/>
      <TextBox label = 'Cliente' description = 'Indique el cliente al que se debe el ticket' style = {{position: 'absolute', top: '15%', left: '50%'}}/>
      <ListBox label = 'Estado' opciones = {['No comenzado', 'En proceso', 'Bloqueado', 'Completado']} style = {{position: 'absolute', top: '35%', left: '5%'}}/>
      <ListBox label = 'Severidad' opciones = {['S1', 'S2', 'S3', 'S4']} style = {{position: 'absolute', top: '35%', left: '35%'}}/>
      <ListBox label = 'Prioridad' opciones = {['Baja', 'Media', 'Alta']} style = {{position: 'absolute', top: '35%', left: '65%'}}/>
      <ListBox label = 'Proyecto al que pertenece' opciones = {['Proyecto1', 'Proyecto2', 'Proyecto3']} style = {{position: 'absolute', top: '55%', left: '5%'}}/>
      <ListBox label = 'Versión del proyecto' opciones = {['v1', 'v2', 'v3']} style = {{position: 'absolute', top: '55%', left: '35%'}}/>
      <ListBox label = 'Persona asignada' opciones = {['Alberto Rodriguez', 'Cristian Pavon', 'Rogelio Aniz']} style = {{position: 'absolute', top: '55%', left: '65%'}}/>
      <Boton label = 'Crear el ticket' link = '/crear_ticket' style = {{position: 'absolute', width: '15vw', backgroundColor: 'rgb(3 105 161 / var(--tw-bg-opacity))',color: 'black',padding: '20px', border: 'none', borderRadius: '10px', cursor: 'pointer',display: 'flex', alignItems: 'center', top: '90%', left: '75%'}} />
    </div>
  );
};

export default RectanguloConBorde;
