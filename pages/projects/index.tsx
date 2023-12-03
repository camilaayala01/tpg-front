import { useEffect, useState } from "react"
import { Project } from "@/types/types"
import ProjectGridRow from "@/components/projects/projectGridRow"
import SkeletonLoader from "@/components/SkeletonLoader"
import router, { useRouter } from "next/router"
import AppSearchBar from "@/components/homeList"
import BotonAgregar from "@/components/projects/addButton"

export function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function Projects() {
  const [list, setList] = useState<Project[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://psa-proyecto.onrender.com/projects")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setList(data)
        setLoading(false);
      })
  }, [])

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4" style={{  color: 'black', top: '8%', left: '16%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20} }>Proyectos PSA</div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden my-6 align-middle border-b border-gray-200 shadow sm:rounded-lg">
            {loading ? (                
               SkeletonLoader()
              ) : list.length > 0 ? (
                <> 
                <div  > 
                  <AppSearchBar listProject={list}/> 
                </div>
                
                <div style={{position: 'absolute', top: '18%', right: '8%'}}>
                <BotonAgregar name="Agregar Proyecto" urlDestination="projects/crear" urlImg="https://i.ibb.co/pbXRFvd/add.png" backColor="rgba(66, 125, 157, 1)"/>
                </div>
                </>
              ) : (
                <h1>No projects created.</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

