import { TicketForTask } from "@/types/types";
import router from "next/router";
import MyButton from "./ViewButton";

export default function TicketGridRow(ticket: TicketForTask) {
    
    function handleButtonClick() {
        const id = ticket['code'];
        router.push(`/support/tickets/${id}`)
    }
      
    return (
        <tr key={`${ticket['code']}`}>
          
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{ticket['title']}</div>
            </td>
            
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{ticket['severity']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900"><MyButton onClickHandler={handleButtonClick} /></div>
            </td>

        </tr>
    )
}

