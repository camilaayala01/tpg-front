
import { Project } from "@/types/types";
import { useEffect, useState } from "react";

interface FetchProjectResult {
  curProject: Project | undefined;
  error: string | undefined;
}

export default function fetchProject(id: any): FetchProjectResult {
  const [curProject, setProject] = useState<Project>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch(`https://psa-proyecto.onrender.com/projects/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('This project does not exist.');
        }
      });
  }, [id]);

      return ({curProject, error})
}