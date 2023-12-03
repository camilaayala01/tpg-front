import CreationForm from "@/components/projects/creationForm";
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})

export default function crearProyecto() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <CreationForm/>
    </div>

  )
  }  