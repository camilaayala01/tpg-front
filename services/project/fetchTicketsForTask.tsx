
import { Task, TicketForTask } from "@/types/types";
import { useEffect, useState } from "react";

interface FetchTaskResult {
  ticketList: TicketForTask[] | undefined;
  errorTickets: string | undefined;
}

export default function FetchTicketsForTask(idProject: any, id: any): FetchTaskResult {
  const [ticketList, setList] = useState<TicketForTask[]>();
  const [errorTickets, setError] = useState<string>();

  useEffect(() => {
    if( !id || ! idProject) return; 
    fetch(`https://psa-proyecto.onrender.com/projects/${idProject}/tasks/${id}/tickets`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((errorTickets) => {
        if (errorTickets instanceof TypeError && errorTickets.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('No se pudo recuperar los tickets de esta tarea.');
        }
      });
  }, [id, idProject]);
      return ({ticketList, errorTickets})
}