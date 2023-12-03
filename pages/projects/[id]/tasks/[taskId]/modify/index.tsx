import { Inter } from "next/font/google"
import { ModifyFormTask } from "@/components/tasks/ModifyFormTask";
import { useRouter } from "next/router";
import FetchTask from "@/services/project/fetchTask";

const inter = Inter({ subsets: ["latin"] })

export default function ModificarTarea() {

  const router = useRouter();

  const { projectId, id } = router.query;
  const {curTask, error} = FetchTask(projectId, id); 

  if (!curTask) {
    return <h1>Tarea no encontrada</h1>;
  }

  return (
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <ModifyFormTask  task={curTask} />
        </div>)
} 