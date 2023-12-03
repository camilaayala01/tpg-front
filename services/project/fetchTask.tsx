
import { Task } from "@/types/types";
import { useEffect, useState } from "react";

interface FetchTaskResult {
  curTask: Task | undefined;
  error: string | undefined;
}

export default function FetchTask(idProject: any, id: any): FetchTaskResult {
  const [curTask, setTask] = useState<Task>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if( !id || ! idProject) return; 
    fetch(`https://psa-proyecto.onrender.com/projects/${idProject}/tasks/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setTask(data);
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('This Task does not exist.');
        }
      });
  }, [id, idProject]);
      return ({curTask, error})
}