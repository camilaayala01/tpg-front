import { Project } from "@/types/types";
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
  
  
  export default function editProject(projectId :number, name: string , description:string , status: string,leaderId: string, estimatedFinishDate?:Dayjs | null)
  {
    return editData(`https://psa-proyecto.onrender.com/projects/${projectId}`, 
    {
        name: name,
        description: description, 
        status: status,
        estimatedFinishDate: estimatedFinishDate?.format('YYYY-MM-DD')?? null,
        leaderId: leaderId,
    }).then((data) => {data});
  }