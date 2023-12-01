import React, { useState } from 'react';
import TextBox from '../support/TextBox';
import ListBox from '../support/ListBox';
import OtherButton from './otherButton';
import MyButton from './viewButton';

const CamposCreacion: React.FC = () => {
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '15vh',
    left: '25vw'
  };

  const [nombreProyecto, setNombreProyecto] = useState('');
  const [descripcionProyecto, setDescripcionProyecto] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaEstimadaFinalizacion, setFechaEstimadaFinalizacion] = useState('');
  const [prioridadProyecto, setPrioridadProyecto] = useState('Baja');
  const [projectLeader, setProjectLeader] = useState('');

  const handleSubmit = () => {
    console.log({
        nombreProyecto,
        descripcionProyecto,
        fechaInicio,
        fechaEstimadaFinalizacion,
        prioridadProyecto,
        projectLeader,
      });
    //hacer post
  };
  
  return (
    <div style={estiloRectangulo}>
      <TextBox label = 'Nombre' description = 'Indique el nombre del proyecto' style = {{position: 'absolute', top: '5%', left: '1%'}}/>
      <TextBox label = 'Descripcion' description = 'Detalles del proyecto' style = {{position: 'absolute', top: '5%', left: '35%'}}/>
      <TextBox label = 'Fecha inicio'description={''} style = {{position: 'absolute', top: '30%', left: '1%'}}/>
      <TextBox label = 'Fecha estimada finalizacion' description={''} style = {{position: 'absolute', top: '30%', left: '35%'}}/>
      <ListBox label = 'Prioridad' opciones = {['Baja', 'Media', 'Alta']} style = {{position: 'absolute', top: '55%', left: '1%'}}/>
      <ListBox label = 'Project Leader' opciones = {['Alberto Rodriguez', 'Cristian Pavon', 'Rogelio Aniz']} style = {{position: 'absolute', top: '55%', left: '35%'}}/>

      <MyButton onClickHandler={handleSubmit} />
      </div>
  );
 
};


export default CamposCreacion;