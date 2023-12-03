import { Project } from "@/types/types";
import { Dayjs } from "dayjs";

 function deleteData(url = "") {

    const response = fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    console.log(response);
  }
  
  

  export default function deleteProject(projectId :number)
  {
    return deleteData(`https://psa-proyecto.onrender.com/projects/${projectId}`);
  }