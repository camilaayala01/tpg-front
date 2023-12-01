import Image from "next/image"
import { Inter } from "next/font/google"
import ImagenComponente from "@/components/support/componentImage";
import BotonAtras from "@/components/support/backButton";
import CreationForm from "@/components/projects/creationForm";

const inter = Inter({ subsets: ["latin"] })

export default function crearProyecto() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <CreationForm/>
    </div>

  )
  }  