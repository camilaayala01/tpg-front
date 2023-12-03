import { Task } from "@/types/types";
import { Dayjs } from "dayjs";

function deleteData(url = "") {

    const response = fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  }
  
  

  export default function deleteTask(id :number, taskId: number)
  {
    return deleteData(`https://psa-proyecto.onrender.com/projects/${id}/tasks/${taskId}`);
  }