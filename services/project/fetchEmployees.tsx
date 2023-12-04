import { Employee } from "@/types/types";
import { useEffect, useState } from "react";

interface FetchEmployeesResult {
  employees :Employee[] | undefined ;
  error: string;
}

export default function fetchEmployees(): FetchEmployeesResult {
  const [employees, setList] = useState<Employee[]| undefined>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(`https://psa-proyecto.onrender.com/employees`)
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
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('This project does not exist.');
        }
      });
  }, []);

      return ({employees, error})
}