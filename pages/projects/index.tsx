import { useEffect, useState } from "react"
import { Project } from "@/types/types"
import SkeletonLoader from "@/components/SkeletonLoader"
import AppSearchBar from "@/components/homeList"
import BotonAgregar from "@/components/projects/addButton"

import { Ubuntu } from "next/font/google"
import { BotonAtrasTop } from "@/components/projects/bottonBackTop"
import BotonMultiuso from "@/components/projects/addButton"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})

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
  }, []) //catch error

  return (
      <div className="container max-w-7xl mx-auto mt-8">
        {loading ? (                
          SkeletonLoader()
        ) : list.length > 0 ? (
        <><div className="mb-4" style={{ color: 'black', top: '8%', left: '16%', fontSize: '2.4em', fontWeight: 'bold', letterSpacing: 0.20 }}>Proyectos PSA</div><div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="inline-block min-w-full overflow-hidden my-6 align-middle border-white shadow sm:rounded-lg">

                <div>
                  <AppSearchBar listProject={list} />
                </div>

                <div style={{ position: 'absolute', top: '25%', right: '12%' }}>
                  <BotonAgregar name="Agregar Proyecto" urlDestination="projects/crear" urlImg="https://i.ibb.co/pbXRFvd/add.png" backColor="rgba(66, 125, 157, 1)" />
                </div>

              </div>
            </div>
          </div></>
              ) : (
                <div>
                  <h1 className="text-3xl mb-5 font-bold text-black" style={{ position: "absolute", left:"30%", top:"20%"}}>Aún no hay ningún proyecto.</h1>
                  <BotonAtrasTop distanceLeft="30%" distanceTop="70%"/>
                  <div style={{ position: "absolute", left:"60%", top:"70%"}}>
                    <BotonMultiuso name="Agregar proyectos" urlDestination="/projects/crear" urlImg="https://i.ibb.co/pbXRFvd/add.png" backColor="rgba(66, 125, 157, 1)"/>
                  </div>
                  <div style={{ position: "absolute", left:"43%", top:"35%"}}>
                    <img src="https://i.ibb.co/JBdmpRv/no-data.png" alt="add" style={{width: "12vw"}} />
                  </div>
                </div>
              )}
      </div>
  )
}