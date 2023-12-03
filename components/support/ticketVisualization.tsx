import { Ticket } from "@/types/types";
import React from "react";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import DateBox from "../projects/DateBox";

export default function ticketVisualization({ ticket }: {ticket: Ticket}) {
  

  const estiloRectangulo: React.CSSProperties = {
    position: 'absolute',
    width: '70%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw',
  };
  

// const router = useRouter();
// function handleButtonClick() {
//   router.push(`${ticket.code}/tasks`);
// }

//const urlBacklog = `/tickets/${ticket.code}/tasks`
//const urlKanban = `/tickets/${ticket.code}/kanban`
//const urlModify = `/tickets/${ticket.code}/modify`


return (
  <>
    
  </>
);
}




