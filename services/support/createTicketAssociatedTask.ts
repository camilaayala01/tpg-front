import { Project } from "@/types/types";
import { Dayjs } from "dayjs";

 function postData(url = "", data = {}) {

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
  


  export default function createTicketAssociaTask(code: any, projectId: any,name: string , description:string ,estimatedDuration:string, startDate?: Dayjs | null, estimatedFinishDate?:Dayjs | null ,leaderId?: string | null, priority?: string |null)
  {
    return postData(`https://psa-soporte-1yfx.onrender.com//tickets/${code}/associatedTask?projectId=${projectId}`, 
    {
        name: name,
        description: description, 
        priority: priority?? null,
        estimatedDuration: estimatedDuration,
        startDate: startDate?.format('YYYY-MM-DD')?? null,
        estimatedFinishDate: estimatedFinishDate?.format('YYYY-MM-DD')?? null,
        leaderId: leaderId?? null,
    }).then((data) => {data});
  }