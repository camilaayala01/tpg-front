import { Task } from "@/types/types";
import { Dayjs } from "dayjs";

 function editData(url: string, data = {}) {

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

  export default function editTask(id: any, projectId :any, name: string , description:string ,estimatedDuration: number,priority: string, status: string,leaderId: string,finishDate?:Dayjs | null)
  {
    return editData(`https://psa-proyecto.onrender.com/projects/${projectId}/tasks/${id}`, 
    {
        name: name,
        description: description, 
        priority: priority,
        status: status,
        estimatedDuration: estimatedDuration,
        estimatedFinishDate: finishDate?.format('YYYY-MM-DD')?? null,
        leaderId: leaderId,
       
    }).then((data) => {data});
  }