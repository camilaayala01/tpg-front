import { Ticket } from "@/types/types";
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


  export default function editTicket(
    code: number,
    title: string,
    description:string,
    priority: string,
    //employeeId: string, 
    status: string,
    closingDate?: Dayjs    
    | null
    )
  {
    return editData(`https://psa-soporte-1yfx.onrender.com/tickets/${code}/modify`, 
    {
        name: name,
        description: description, 
        priority: priority,
        status: status,
        estimatedClosingDate: closingDate?.format('YYYY-MM-DD')?? null,
        //employeeId: employeeId,
       
    }).then((data) => {data});
  }