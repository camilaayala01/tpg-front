import React, {useEffect, useState} from 'react';
import ListBox from './ListBox';
import Boton from './button';

const RectanguloConBorde: React.FC = () => {
    const estiloRectangulo: React.CSSProperties = {
        position: 'fixed',
        width: '73vw',
        height: '83vh',
        backgroundColor: '#FFFFFF',
        border: '14px solid #9BBEC8',
        borderRadius: '12px',
        top: '12vh',
        left: '22vw'
    };

    const [tareas, setTareas] = useState<string[]>([]);

    useEffect(() => {
        // Llamada a la API para obtener las tareas
        fetch('https://psa-proyecto.onrender.com/tasks') // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
            .then(response => response.json())
            .then(data => {
                // Actualiza el estado con las tareas obtenidas
                setTareas(data);
            })
            .catch(error => {
                console.error('Error fetching tareas:', error);
            });
    }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente


    // @ts-ignore
    return (
        <div style={estiloRectangulo}>
            {/* Contenido del rectángulo */}
            <h1 style = {{position: 'absolute', color: 'black',top: '3%', left: '3%', fontSize: '36px',  fontWeight: 'bold'}}>Crear Ticket</h1>
            <label style = {{position: 'absolute', color: 'black',top: '15%', left: '3%', fontSize: '22px',  fontWeight: 'bold'}}>Nombre</label>
            <input type="text" placeholder="Indique el nombre del Ticket" style={{position: 'absolute',color:'black',backgroundColor:'#EDEDED',borderRadius:'10px', top: '21%', left: '3%', fontSize: '18px',height:'5vh',width:'70vh'}} />
            <label style = {{position: 'absolute', color: 'black',top: '15%', left: '50%', fontSize: '22px',  fontWeight: 'bold'}}>Cliente</label>
            <input type="text" placeholder="Indique el nombre del Cliente" style={{position: 'absolute',color:'black',backgroundColor:'#EDEDED',borderRadius:'10px', top: '21%', left: '50%', fontSize: '18px',height:'5vh',width:'70vh'}} />
            <ListBox label = 'Estado' opciones = {['No comenzado', 'En proceso', 'Bloqueado', 'Completado']} style = {{position: 'absolute', top: '30%', left: '25%',fontSize:'17px'}}/>
            <ListBox label = 'Severidad' opciones = {['S1', 'S2', 'S3', 'S4']} style= {{position: 'absolute', top:'47%', left: '3%',fontSize:'17px'}}/>
            <ListBox label = 'Prioridad' opciones = {['Baja', 'Media', 'Alta']} style = {{position: 'absolute', top: '47%', left: '25%',fontSize:'17px',width:'30vh'}}/>
            <ListBox label = 'Producto' opciones = {['SiuGuarani', 'SiuTehuelche', 'SiuDiaguita',"SiuKolla"]} style = {{position: 'absolute', top: '30%', left: '46%',fontSize:'17px',width:'30vh'}}/>
            <ListBox label = 'Versión del producto' opciones = {['v1', 'v2', 'v3']} style = {{position: 'absolute', top: '47%', left: '46%',fontSize:'17px',width:'40vh'}}/>
            <Boton label = 'Crear el ticket' link = '/crear_ticket' style = {{position: 'absolute', width: '15vw', backgroundColor: '#9BBEC8',color: 'black',padding: '20px', border: 'none', borderRadius: '10px', cursor: 'pointer',display: 'flex',alignItems: 'left',justifyItems:'left',top: '79%', left: '75%'}} />
            <ListBox label = 'Persona asignada' opciones = {['Alberto Rodriguez', 'Cristian Pavon', 'Rogelio Aniz']} style = {{position: 'absolute', top: '30%', left: '3%',fontSize:'17px',width:'30vh'}}/>
            <ListBox label="Tarea/s Asociada/s" opciones={tareas} style={{ position: 'absolute', fontSize: '17px', width: '80vh',top:'65%',left:'3%'}} />
        </div>
    );
};

// <TextBox label = 'Cliente' description = 'Indique el cliente al que se debe el ticket' style = {{position: 'absolute', top: '15%', left: '50%'}}/>
// <TextBox label = 'Nombre' description = 'Indique el nombre del cliente' style = {{position: 'absolute', top: '15%', left: '50%'}}/>

export default RectanguloConBorde;