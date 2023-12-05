import { BotonAtrasTop } from "@/components/projects/BottonBackTop";
import { CancelarBoton } from "@/components/projects/CancelButton";
import CreationForm from "@/components/projects/CreationForm";
import { Ubuntu } from "next/font/google"
import { useRouter } from "next/router";

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})

export default function CrearProyecto() {
  const router= useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center items-center bg-white">
        <CreationForm/>
      </div>
      <CancelarBoton distanceLeft="61%" distanceTop="87.7%" handlerClick={handleClick}/>
    </>
  )
  }  