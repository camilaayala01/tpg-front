import { useEffect, useState } from "react"
import { Task } from "@/types/types"
import TaskGridRow from "@/components/projects/taskGridRow"
import { useRouter } from "next/router"
import SkeletonLoader from "@/components/SkeletonLoader"
import { BotonAtrasTop } from "@/components/projects/bottonBackTop"
import { Stack } from "@mui/material"
import BotonMultiuso from "@/components/projects/addButton"

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function Tasks() {
  const [list, setList] = useState<Task[]>([])
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {id} = router.query; 
  const creationUrl: string = `/projects/${id}/tasks/crear`;
  
  useEffect(() => {
    if(!id) return;
    setLoading(true);
    fetch(`https://psa-proyecto.onrender.com/projects/${id}/tasks`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setList(data)
        setLoading(false);
      })
  }, [id])

  return (
    <>
      
      <div className="container max-w-7xl mx-auto mt-8">
      {loading ? (
            <SkeletonLoader/>
        ) : list.length > 0 ? (
        <>
        <div className="mb-4 justify-around">
          <h1 className="text-3xl font-bold decoration-gray-400 text-black">Backlog del proyecto</h1>
        </div>
        <div className="flex flex-col" >
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b ">
               
              <table className="mt-10" style={{ width: '90%', maxWidth: '90vw', height: 'auto', maxHeight: '60vw', overflowX: 'auto' }}>
                  <thead>
                    <tr>
                      <HeaderItem title="Name" />
                      <HeaderItem title="Status" />
                      <HeaderItem title="Priority" />
                      <HeaderItem title="Creation Date" />
                      <HeaderItem title="Actions" />
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((task) => (
                      <TaskGridRow key={task.id} task={task} />
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
        </>
        ) : (
          <div>
            <h1 className="text-3xl mb-5 font-bold text-black" style={{ position: "absolute", left:"30%", top:"20%"}}>Aún no hay tareas asignadas a este proyecto.</h1>
            <BotonAtrasTop distanceLeft="30%" distanceTop="70%"/>
            <div style={{ position: "absolute", left:"60%", top:"70%"}}>
              <BotonMultiuso name="Agregar tareas" urlDestination={creationUrl} urlImg="https://i.ibb.co/pbXRFvd/add.png" backColor="rgba(66, 125, 157, 1)"/>
            </div>
            <div style={{ position: "absolute", left:"43%", top:"35%"}}>
              <img src="https://i.ibb.co/JBdmpRv/no-data.png" alt="add" style={{width: "12vw"}} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
