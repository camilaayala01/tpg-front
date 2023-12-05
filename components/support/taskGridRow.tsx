import { Task } from "@/types/types";
import router from "next/router";
import MyButton from "@/components/projects/viewButton";
import StatusText from "@/components/projects/StatusText";
import PriorityText from "@/components/projects/PriorityText";

export default function TaskGridRow(task: Task) {
    
    function handleButtonClick() {
        const id = task['id'];
        router.push(`/support/tickets/${id}`)
    }
      
    return (
        <tr key={`${task['id']}`}>
          
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{task['name']}</div>
            </td>
            
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{PriorityText(task['priority'])}</div>
            </td>

            <td className="px-10 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{StatusText(task['status'])}</div>
            </td>

        </tr>
    )
}

