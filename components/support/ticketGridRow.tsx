import { Ticket } from "@/types/types";
import MyButton from "../projects/ViewButton";
import router from "next/router";
import StatusText from "../projects/StatusText";
import { supportFetcher } from "@/services/support/fetcher";
import useSWR from "swr";
import { log } from "console";


export default function TicketGridRow({ ticket }: {ticket: Ticket}) {
    
    function handleButtonClick() {
        const id = ticket['code'];
        console.log(id);
        console.log(ticket);
        router.push(`tickets/${id}`)
    }
    
    return (
        <tr key={`${ticket['code']}`}>
          
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{ticket['title']}</div>
            </td>
            
            <td className= "px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <div className="flex items-center text-gray-900">{ticket['status']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{ticket['severity']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{ticket['priority']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900"><MyButton onClickHandler={handleButtonClick} /></div>
            </td>

        </tr>
    )
}

