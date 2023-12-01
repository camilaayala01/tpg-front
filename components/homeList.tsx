import { Project } from "@/types/types";
import {useState} from "react";
import ProjectGridRow from "./projects/projectGridRow";
import { HeaderItem } from "@/pages/projects";


export default function AppSearchBarProjects({listProject}: {listProject: [Project]}) {
    const [query, setQuery] = useState("")
    return (
        <div>
            <label className="relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row  border py-2 px-2 rounded-2xl gap-2 shadow  focus-within:border-gray-300"> 
                <input className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Nombre del proyecto..." onChange={e => setQuery(e.target.value)} />  
                {/** 
                 * Si quieren ver como queda el botón, simplemente descomenten y saquen las llaves :)
                 * <button type="submit" className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                        Search
                    </button>
                    */
                }               
            </label> 
                       
            <table className="min-w-full h-10 mt-10">
                <thead>
                    <tr>
                        <HeaderItem title="Name" />
                        <HeaderItem title="Status" />
                        <HeaderItem title="Creation Date" />
                        <HeaderItem title="Actions" />
                    </tr>
                </thead>
            <tbody>
                {
                    listProject.filter(project => {
                        if (query === '') {
                        return project;
                        } else if (project.name.toLowerCase().includes(query.toLowerCase())) {
                        return project;
                        }
                    }
                    ).map((project, key) => (
                        <ProjectGridRow key={project['name']} project={project}/>))
                }
            </tbody>
        </table>       
        </div>
    )
}


  