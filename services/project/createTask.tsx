import { Project } from "@/types/types";
import { Dayjs } from "dayjs";

 function postData(url = "", data = {}) {
  try
 {
  const response = fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
 }
 catch (e) {
  return e;
}

   
  }
  


  export default function createTask(projectId: any,name: string , description:string ,estimatedDuration:string, startDate?: Dayjs | null, estimatedFinishDate?:Dayjs | null ,leaderId?: string | null, priority?: string |null)
  {
    return postData(`https://psa-proyecto.onrender.com/projects/${projectId}/tasks`, 
    {
        name: name,
        description: description, 
        priority: priority?? null,
        estimatedDuration: estimatedDuration,
        startDate: startDate?.format('YYYY-MM-DD')?? null,
        estimatedFinishDate: estimatedFinishDate?.format('YYYY-MM-DD')?? null,
        leaderId: leaderId?? null,
    });
  }