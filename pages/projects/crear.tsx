import Image from "next/image"
import { Inter } from "next/font/google"
import ImagenComponente from "@/components/support/componentImage";
import BotonAtras from "@/components/support/backButton";
import CamposCreacion from "@/components/projects/createProject";

const inter = Inter({ subsets: ["latin"] })

export default function crearProyecto() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <h1 className="text-4xl mb-5 font-bold text-black">Ahora estas en crear projecto</h1>
      <span className="text-7xl">🏡</span>
      <CamposCreacion/>
    </div>

  )
  }  