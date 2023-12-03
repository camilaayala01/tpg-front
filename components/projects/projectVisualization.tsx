import { Project } from "@/types/types";
import React from "react";
import LeaderBox from "./LeaderBox";
import DateBox from "./DateBox";
import MyButton from "./viewButton";
import { useRouter } from "next/router";
import StatusText from "./StatusText";
import AddButton from "./addButton";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteButton from "./DeleteButton";
import deleteProject from "@/services/project/deleteProject";
import { BotonAtrasTop } from './bottonBackTop';

export default function ProjectVisualization({ project }: {project: Project}) {
  
const estiloRectangulo: React.CSSProperties = {
  position: 'absolute',
  width: '70%',
  height: '80%',
  backgroundColor: '#FFFFFF',
  top: '18vh',
  left: '25vw'
};

const router = useRouter();
function handleButtonClick() {
  router.push(`${project.id}/tasks`);
}

const handleDeletion = () => {
  deleteProject(project.id)
  router.push(`/projects`);
};


const submit = () => {
  confirmAlert({
    title: "¿Estás seguro que deseas eliminar este proyecto?",
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

const urlBacklog = `/projects/${project.id}/tasks`
const urlKanban = `/projects/${project.id}/kanban`
const urlModify = `/projects/${project.id}/modify`


return (
  <>
  <div >
    <div style={{ position: 'fixed', color: 'black', top: '11%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Proyecto {project.name}</div>
    <div style={{ position: 'fixed', top: '11%', left: '60%', display: 'flex', alignItems: 'center' }}>
          {StatusText(project.status)}
    </div>
    <div style={{ position: 'fixed', top: '11%', left: '80%', display: 'flex'}}>
        <BotonAtrasTop/>  
    </div>
  </div>
  
  
  <div style={estiloRectangulo}>

      <div style={{ position: 'absolute', top: '5%', left: '0%', width: '80%', height: '20%', background: 'rgba(180, 180, 255, 0.2)', borderRadius: 10, border: '1px #999999 solid', padding: '10px', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#666666', fontSize: '1.1rem', margin: 0, fontWeight: 'bold' }}>
              Descripción
          </h2>
          <p style={{ color: 'black', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', margin: 0 }}>
              {project.description}
          </p>
      </div>
      
      <div style={{ position: 'absolute', top: '30%', left: '0%', display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#666666', marginRight: '20px' }}>Líder de proyecto</p>
          <LeaderBox id={project.projectLeaderId} />
      </div>

      <div style={{ position: 'absolute', top: '45%', left: '0%'}}>
          <DateBox dateName={"Fecha de creación"} date={project.creationDate} />
      </div>

      <div style={{ position: 'absolute', top: '45%', left: '20%'}}>
          <DateBox dateName={"Fecha de inicio"} date={project.startDate} />
      </div>

      <div style={{ position: 'absolute', top: '45%', left: '40%'}}>
          <DateBox dateName={"Fecha de finalizacion"} date={project.finishDate} />
      </div>

      <div style={{ position: 'absolute', top: '70%', left: '66%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/X2FHKrw/backlog.png" name="Ver backlog" urlDestination={urlBacklog} backColor="rgba(155, 190, 200, 1)"/>
      </div>

      <div style={{ position: 'absolute', top: '70%', left: '12%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/Z68w2Mj/edit.png" name="Editar proyecto" urlDestination={urlModify} backColor="rgba(155, 190, 200, 1)"/>
      </div>

      <div style={{ position: 'absolute', top: '70%', left: '50%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/FByhPx2/kanban.png" name="Ver Kanban" urlDestination={urlKanban} backColor="rgba(155, 190, 200, 1)" />
      </div>

      <div style={{ position: 'absolute', top: '70%', left: '0%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <DeleteButton urlImg="https://i.ibb.co/gw4X4S5/delete.png" name="Eliminar" backColor="rgba(155, 190, 200, 1)" handleClick={submit} />
      </div>

  </div>
  </>
);
}
