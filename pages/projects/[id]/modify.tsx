import { Inter } from "next/font/google"
import ModifyForm from "@/components/projects/modifyForm";
import { useRouter } from "next/router";
import fetchProject from "@/services/project/fetchProject";
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})


export default function ModificarProyecto() {

  const router = useRouter();

  const { id } = router.query;
  const {curProject, error} = fetchProject(id); //manejar error jej

  if (!curProject) {
    return <h1>Project not found</h1>;
  }

  return (
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <ModifyForm  project={curProject} />
        </div>)
} 