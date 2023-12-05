import TicketsView from "./TicketsView";
import { Task } from "@/types/types";
import React from "react";
import DateBox from "../projects/DateBox";
import { useRouter } from "next/router";
import StatusText from "../projects/StatusText";
import AddButton from "../projects/addButton"
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteButton from "../projects/DeleteButton"

import { BotonAtrasTop } from "../projects/bottonBackTop";
import PriorityText from "../projects/PriorityText";
import deleteTask from "@/services/project/deleteTask";

export  function TaskVisualization({task}:{task: Task}) {
  

const estiloRectangulo: React.CSSProperties = {
    position: 'absolute',
    width: '70%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
    };

const router = useRouter();

const handleDeletion = () => {
  console.log(task)
  deleteTask(task.projectId, task.id)
  router.push(`${task.id}/tasks`);
};



const submit = () => {
  confirmAlert({
    title: "¿Estás seguro que deseas eliminar esta tarea?",
    buttons: [
        {
          label: "Cancelar",
          onClick: () => {}
        },
        {
          label: "Confirmar",
          onClick: () => handleDeletion()
        },
    ]
  });
};

const urlBacklog = `/projects/${task.projectId}/tasks`
const urlKanban = `/projects/${task.projectId}/kanban`
const urlModify = `/projects/${task.projectId}/tasks/${task.id}/modificar`

return (
  <>
  <div >
    <div style={{ position: 'fixed', color: 'black', top: '11%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}> {task.name}</div>
    <div style={{ position: 'fixed', top: '11%', left: '65%', display: 'flex', alignItems: 'center' }}>
          {StatusText(task.status)}
    </div>
    <div style={{ position: 'fixed', display: 'flex'}}>
          <BotonAtrasTop distanceTop={"11%"} distanceLeft={"80%"}/>
    </div>
  </div>
  
  
  <div style={estiloRectangulo}>

      <div style={{ position: 'absolute', top: '5%', left: '0%', width: '80%', height: '20%', background: 'rgba(180, 180, 255, 0.2)', borderRadius: 10, border: '1px #999999 solid', padding: '10px', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#666666', fontSize: '1.1rem', margin: 0, fontWeight: 'bold' }}>
              Descripción
          </h2>
          <p style={{ color: 'black', fontSize: '0.9rem', margin: 0 }}>
              {task.description}
          </p>
      </div>
      
      <div style={{ position: 'absolute', top: '28%', left: '0%', display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#666666', marginRight: '20px' }}>Prioridad</p>
          {PriorityText(task.priority)}
      </div>

      <div style={{ position: 'absolute', top: '40%', left: '0%'}}>
          <DateBox dateName={"Fecha de creación"} date={task.creationDate} />
      </div>

      <div style={{ position: 'absolute', top: '40%', left: '20%'}}>
          <DateBox dateName={"Fecha de inicio"} date={task.startDate} />
      </div>

      <div style={{ position: 'absolute', top: '55%', left: '0%'}}>
          <DateBox dateName={"Fecha de finalizacion"} date={task.finishDate} />
      </div>

      <div style={{ position: 'absolute', top: '29%', left: '45%'}}>
          <TicketsView id={task.projectId} taskId = {task.id}/>
      </div>

      <div style={{ position: 'absolute', top: '65vh', left: '12%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/Z68w2Mj/edit.png" name="Editar tarea" urlDestination={urlModify} backColor="rgba(155, 190, 200, 1)"/>
      </div>

      <div style={{ position: 'absolute', top: '65vh', left: '0%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <DeleteButton urlImg="https://i.ibb.co/gw4X4S5/delete.png" name="Eliminar" backColor="rgba(155, 190, 200, 1)" handleClick={submit} />
      </div>

      <div style={{ position: 'absolute', top: '65vh', left: '70%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/FByhPx2/kanban.png" name="Ver Kanban" urlDestination={urlKanban} backColor="rgba(155, 190, 200, 1)" />
      </div>
      <div style={{ position: 'absolute', top: '65vh', left: '55%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
              <AddButton urlImg="https://i.ibb.co/X2FHKrw/backlog.png" name="Ver backlog" urlDestination={urlBacklog} backColor="rgba(155, 190, 200, 1)"/>
      </div>
  </div>
  </>
);
}
