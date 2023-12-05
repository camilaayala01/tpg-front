import { Ticket } from "@/types/types";
import React from "react";
import router, { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import StatusText from "../projects/StatusText";
import DateBox from "../projects/DateBox";
import AddButton from "../projects/AddButton";
import deleteTicket from "@/services/support/deleteTicket";
import DeleteButton from "../projects/DeleteButton";
import PriorityText from "@/components/projects/PriorityText";
import SeverityText from "@/components/support/SeverityText";
import ProductText from "@/components/support/ProductText";
import LeaderBox from "@/components/projects/LeaderBox";
import ClientBox from "@/components/support/ClientBox";
import TaskView from "@/components/tasks/TaskView";

export default function ticketVisualization({ ticket }: {ticket: Ticket}) {

  const estiloRectangulo: React.CSSProperties = {
    position: 'absolute',
    width: '70%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw',
  };

  const handleDeletion = () => {
    deleteTicket(ticket.code)
    router.back(); // ojo aca tal vez es ticketS
  };

const submit = () => {
  confirmAlert({
    title: "¿Estás seguro que deseas eliminar este ticket?",
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

const urlModify = `/support/tickets/${ticket.code}/modify`

console.log(ticket);

return (
  <>
  <div >
    <div style={{ position: 'fixed', color: 'black', top: '11%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Ticket: {ticket.title}</div>
    <div style={{ position: 'fixed', top: '11%', left: '60%', display: 'flex', alignItems: 'center' }}>
          {StatusText(ticket.status)}
    </div>
  </div>



  <div style={estiloRectangulo}>

      <div style={{ position: 'absolute', top: '5%', left: '0%', width: '80%', height: '20%', background: 'rgba(180, 180, 255, 0.2)', borderRadius: 10, border: '1px #999999 solid', padding: '10px', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#666666', fontSize: '1.1rem', margin: 0, fontWeight: 'bold' }}>
              Descripción
          </h2>
          <p style={{ color: 'black', fontSize: '0.9rem', margin: 0 }}>
              {ticket.description}
          </p>
      </div>


      <div >
          <div style={{ position: 'fixed', top: '40%', left: '25%', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'black', marginRight: '8px', fontSize: '1.1rem' }}>Prioridad:</span>
              {PriorityText(ticket.priority)}
              <span style={{ margin: '0 10px', color: 'black', fontSize: '1.1rem' }}></span> {/* Espacio adicional */}
              <span style={{ color: 'black', marginRight: '8px', fontSize: '1.1rem' }}>Severidad:</span>
              {SeverityText(ticket.severity)}
          </div>
      </div>

      <div >
          <div style={{position: 'fixed', top: '50%', left: '25%', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'black', marginRight: '8px', fontSize: '1.1rem' }}>Producto:</span>
              {ProductText(ticket.product )}
              <span style={{ margin: '0 10px', color: 'black', fontSize: '1.1rem' }}></span> {/* Espacio adicional */}
              <span style={{ color: 'black', marginRight: '8px', fontSize: '1.1rem' }}>Versión:</span>
              {ProductText(ticket.version)}
          </div>
      </div>


      <div style={{ position: 'absolute', top: '52%', left: '0%', display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#666666', marginRight: '20px' }}>Empleado </p>
          <LeaderBox id ={ticket['employeeId']} />
          <span style={{ margin: '0 10px', color: 'black', fontSize: '1.1rem' }}></span> {/* Espacio adicional */}
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#666666', marginRight: '20px' }}>Cliente </p>
          <ClientBox id ={ticket.clientId} />
      </div>


      <div style={{ position: 'absolute', top: '35%', left: '50%'}}>
          <TaskView ids={ticket.associatedTasks}/>
      </div>


      <div style={{ position: 'absolute', top: '62%', left: '0%',alignItems: 'center',display: 'flex'}}>
          <DateBox dateName={"Fecha de Inicio"} date={ticket.startDate} />
          <span style={{ margin: '0 10px', color: 'black', fontSize: '1.1rem' }}></span> {/* Espacio adicional */}
          <DateBox dateName={"Fecha de Finalizacion"} date={ticket.closingDate} />
      </div>
      

      <div style={{ position: 'absolute', top: '80%', left: '20%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/Z68w2Mj/edit.png" name="Editar ticket" urlDestination={urlModify} backColor="rgba(155, 190, 200, 1)"/>
      </div>

      <div style={{ position: 'absolute', top: '80%', left: '0%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <DeleteButton urlImg="https://i.ibb.co/gw4X4S5/delete.png" name="Eliminar" backColor="rgba(155, 190, 200, 1)" handleClick={submit} />
      </div>

  </div>
  </>
);
}




