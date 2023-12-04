import { Project } from "@/types/types";
import { Dayjs } from "dayjs";

 function deleteData(url = "") {
  try{
    const response = fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    console.log(response);
  }
  catch (e) {
    return e;
  }
  }
    
  
  

  export default function deleteProject(projectId :number)
  {
    return deleteData(`https://psa-proyecto.onrender.com/projects/${projectId}`);
  }