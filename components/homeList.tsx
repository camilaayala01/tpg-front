import { Project } from "@/types/types";
import {useState} from "react";
import ProjectGridRow from "./projects/projectGridRow";
import { HeaderItem } from "@/pages/projects";
import { useRouter } from "next/router";


export default function AppSearchBarProjects({listProject}: {listProject: [Project]}) {
    const router = useRouter();
    const onClickHandler = () => {
      router.push("/projectos/crear")
    };
  

    const [query, setQuery] = useState("")
    return (
        <div>
            <label className="relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row border py-2 px-2 rounded-2xl gap-2 shadow text-black focus-within:border-grey-300"> 
                <input className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Nombre del proyecto..." onChange={e => setQuery(e.target.value)} />  
            </label> 
                       
            <table  className="mt-10" style={{ width: '90%', maxWidth: '90vw', overflowX: 'auto' }}>
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


  
