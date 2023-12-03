import { useEffect, useState } from "react";
import { Employee } from "@/types/types";

export default function fetchEmployee( leaderId: any ) {
    const [leader, setLeader] = useState<Employee>();
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(`https://psa-proyecto.onrender.com/employees/${leaderId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
            setLeader(data);
        })
        .catch((error) => {
          if (error instanceof TypeError && error.message === 'Failed to fetch') {
            setError('Couldnt connect to server.');
          } else {
            setError('This leader does not exist.');
          }
        });
    ;
  }, [leaderId]);
    const fullName = leader ? (`${leader['Nombre']} ${leader['Apellido']}`) : "-";
    
    return ({fullName, error})

}