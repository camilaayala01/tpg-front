import { Inter } from "next/font/google"
import { useRouter } from "next/router";
import FetchTask from "@/services/project/fetchTask";
import { useEffect } from "react";
import ModifyForm from "@/components/tasks/ModifyForm";

const inter = Inter({ subsets: ["latin"] })

export default function ModificarTarea() {

  const router = useRouter();
  const { taskId, id } = router.query;
  const {curTask, error} = FetchTask(id, taskId); 

  useEffect ( () => {
    console.log(id, taskId)
  },[id, taskId])

  if (!curTask) {
    return <h1>Tarea no encontradaaa</h1>;
  }

  return (
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <ModifyForm  task={curTask} />
        </div>)
} 