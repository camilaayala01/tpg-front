import { Project } from "@/types/types";
import MyButton from "./button";
import router from "next/router";
import StatusText from "./StatusText";


export default function ProjectGridRow({ project }: {project: Project}) {
    
    function handleButtonClick() {
        const id = project['id'];
        router.push(`projects/${id}`)
    }
      
    return (
        <tr key={`${project['id']}`}>
          
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{project['name']}</div>
            </td>
            
            <td className= "px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                {StatusText(project["status"])}
            </td>
            
            
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{project['creationDate']}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900"><MyButton onClickHandler={handleButtonClick} /></div>
            </td>

        </tr>
    )
}

