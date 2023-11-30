import { useEffect, useState } from "react"
import UserGridRow from "@/components/userGridRow"
import { Project, Usuario } from "@/types/types"
import ProjectGridRow from "@/components/projectGridRow"
import MyButton from "@/components/button"
import SkeletonLoader from "@/components/SkeletonLoader"

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}


export default function Projects() {
  const [list, setList] = useState<Project[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/projects")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setList(data)
      })
  }, [])

  return (
    <>
      {/* ACA EMPIEZA LA GRILLA */}
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              {
                (list.length > 0) ? //Esto es para el loader, si la lista está vacía te tira el Skeleton. Usarlo en todas las tablas :D
                  (
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <HeaderItem title="Name" />
                          <HeaderItem title="Status" />
                          <HeaderItem title="Creation Date" />
                          <HeaderItem title="Actions" />
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((project) => (
                          <ProjectGridRow key={project['id']} project={project} />
                        ))}
                      </tbody>
                    </table>
                  ):
                  (
                    SkeletonLoader()
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

