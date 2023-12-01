import { Project } from "@/types/types";
import MyButton from "../button";
import router from "next/router";
import StatusText from "../StatusText";


export default function TicketGridRow() {
    
    function handleButtonClick() {
    }
      
    return (
        <tr key={`Id`}>
          
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{'Nombre'}</div>
            </td>
            
            <td className= "px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                {"Estado"}
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{'Severidad'}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{'Prioridad'}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900"><MyButton onClickHandler={handleButtonClick} /></div>
            </td>

        </tr>
    )
}

