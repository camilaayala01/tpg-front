import { useEffect, useState } from "react";
import { Employee } from "@/types/types";

export default function fetchEmployees() {
    const [list, setList] = useState<Employee[]>([])
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(`https://psa-proyecto.onrender.com/employees`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          setList(data);
        })
        .catch((error) => {
          if (error instanceof TypeError && error.message === 'Failed to fetch') {
            setError('Couldnt connect to server.');
          } else {
            setError('This leader does not exist.');
          }
        });
    });
    
    return ({list, error})

}