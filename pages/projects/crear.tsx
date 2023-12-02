import { Inter } from "next/font/google"
import CreationForm from "@/components/projects/creationForm";

const inter = Inter({ subsets: ["latin"] })

export default function crearProyecto() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <CreationForm/>
    </div>

  )
  }  