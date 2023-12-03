import { Task } from "@/types/types";
import { Dayjs } from "dayjs";

 function editData(url = "", data = {}) {

    const response = fetch(url, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
    console.log(JSON.stringify(data));
    console.log(response);
    
    return response;
  }
  
  
  export default function editTask(id: number, projectId :number, name: string , description:string , status: string,priority: string,  finishDate?:Dayjs | null , estimatedDuration?: number| null)
  {
    return editData(`https://psa-proyecto.onrender.com/projects/${projectId}/tasks/${id}`, 
    {
        name: name,
        projectId: projectId,
        description: description, 
        status: status,
        priority: priority,
        finishDate: finishDate?.format('DD-MM-YYYY')?? null,
        estimatedDuration: estimatedDuration?? null,
    }).then((data) => {data});
  }