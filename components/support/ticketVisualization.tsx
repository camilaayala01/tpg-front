import { Ticket } from "@/types/types";
import React from "react";
import router, { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import StatusText from "../projects/StatusText";
import DateBox from "../projects/DateBox";
import AddButton from "../projects/addButton";
import deleteProject from "@/services/project/deleteProject";
import DeleteButton from "../projects/DeleteButton";




export default function ticketVisualization({ ticket }: {ticket: Ticket}) {
  
  const router = useRouter();


  const estiloRectangulo: React.CSSProperties = {
    position: 'absolute',
    width: '70%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw',
  };

  const handleDeletion = () => {
    deleteProject(ticket.code)
    router.push(`/ticket`); // ojo aca tal vez es ticketS
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

console.log(ticket.closingDate);
console.log(ticket);

return (
  <>
  <div >
    <div style={{ position: 'fixed', color: 'black', top: '11%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Proyecto {ticket.title}</div>
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

      
      <div style={{ position: 'absolute', top: '45%', left: '40%'}}>
          <DateBox dateName={"Fecha de finalizacion"} date={ticket.closingDate} />
      </div>

      <div style={{ position: 'absolute', top: '45%', left: '20%'}}>
          <DateBox dateName={"Fecha de inicio"} date={ticket.startDate} />
      </div>

      

      <div style={{ position: 'absolute', top: '70%', left: '12%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <AddButton urlImg="https://i.ibb.co/Z68w2Mj/edit.png" name="Editar ticket" urlDestination={urlModify} backColor="rgba(155, 190, 200, 1)"/>
      </div>

      <div style={{ position: 'absolute', top: '70%', left: '0%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
        <DeleteButton urlImg="https://i.ibb.co/gw4X4S5/delete.png" name="Eliminar" backColor="rgba(155, 190, 200, 1)" handleClick={submit} />
      </div>

  </div>
  </>
);
}




