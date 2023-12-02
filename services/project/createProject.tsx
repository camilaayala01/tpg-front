import { Project } from "@/types/types";
import { Dayjs } from "dayjs";

 function postData(url = "", data = {}) {

    const response = fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }) .then(response => response.json());
    console.log(JSON.stringify(data));
    return response;
  }
  
  
// string name, string description, string startDate, string estimatedFinishDate, number leaderId
  export default function createProject(name: string , description:string , startDate?: Dayjs | null, estimatedFinishDate?:Dayjs | null ,leaderId?: string | null)
  {
    return postData("https://psa-proyecto.onrender.com/projects", 
    {
        name: name,
        description: description, 
        startDate: startDate?.format('YYYY-MM-DD')?? null,
        estimatedFinishDate: estimatedFinishDate?.format('YYYY-MM-DD')?? null,
        leaderId: leaderId?? null,
    }).then((data) => {data});
  }