import { Inter } from "next/font/google"
import { useRouter } from "next/router";
import FetchTask from "@/services/project/fetchTask";
import { useEffect } from "react";
import ModifyForm from "@/components/tasks/ModifyForm";
import { CancelarBoton } from "@/components/projects/cancelButton";

const inter = Inter({ subsets: ["latin"] })

export default function ModificarTarea() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  
  const { taskId, id } = router.query;
  const {curTask, error} = FetchTask(id, taskId); 

  useEffect (() => {
    console.log(id, taskId)
  },[id, taskId])

  if (!curTask) {
    return <h1>Tarea no encontradaaa</h1>;
  }

  return (
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <ModifyForm  task={curTask} />
            <CancelarBoton distanceLeft="62%" distanceTop="87.7%" handlerClick={handleClick}/>
        </div>)
} 