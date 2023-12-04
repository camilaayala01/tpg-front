
import { Ticket } from "@/types/types";
import { useEffect, useState } from "react";

interface FetchTicketResult {
  curTicket: Ticket | undefined;
  error: string | undefined;
}

export default function FetchTicket(codeTicket: string | string[] | undefined): FetchTicketResult {
  const [curTicket, setTicket] = useState<Ticket>();
  const [error, setError] = useState<string>();


  console.log(codeTicket);
  
  useEffect(() => {
    fetch(`https://psa-soporte-1yfx.onrender.com/tickets/${codeTicket}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setTicket(data);
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('This Ticket does not exist.');
        }
      });
  }, [codeTicket]);
      return ({curTicket, error})
}