import { Task } from "@/types/types";
import { useEffect, useState } from "react";

interface FetchTaskResult {
  taskList: Task[] | undefined;
  errorTasks: string | undefined;
}

export default function FetchTasksForTicket(idsTask: number[]): FetchTaskResult {
  const [taskList, setList] = useState<Task[]>();
  const [errorTasks, setError] = useState<string>();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Obtener la lista completa de tareas
        const tasksResponse = await fetch("https://psa-soporte-1yfx.onrender.com/tasks");

        if (!tasksResponse.ok) {
          throw new Error(`Error ${tasksResponse.status}: ${tasksResponse.statusText}`);
        }

        const allTasks = await tasksResponse.json();

        // Filtrar las tareas según los IDs proporcionados
        const filteredTasks = allTasks.filter((task: Task) => idsTask.includes(task.id));

        setList(filteredTasks);
      } catch (error) {
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          setError("No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.");
        } else {
          setError("No se pudo recuperar los tickets de estas tareas.");
        }
      }
    };

    fetchTasks();
  }, [idsTask]);

  console.log(taskList);
  return { taskList, errorTasks };
}
