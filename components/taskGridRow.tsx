import { Project, Task } from "@/types/types";
import MyButton from "./button";
import router, { useRouter } from "next/router";

export default function TaskGridRow({ task }: {task: Task}) {
    const router = useRouter();
    const {id} = router.query;

    function handleButtonClick() {
        const taskId = task['id'];
        router.push(`/projects/${id}/tasks/${taskId}`)
    }
      
    return (
        <tr key={`${task['id']}`}>
          

            <td className="px-6 py-4 whitespace-no-swrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{task['name']}</div>
            </td>

      
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{task['status']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{task['creationDate']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900"><MyButton onClickHandler={handleButtonClick} /></div>
            </td>


        </tr>
    )
}

