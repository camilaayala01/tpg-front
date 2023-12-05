import CreationForm from "@/components/support/taskForm";
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})

export default function crearTareaAsociadaTicket() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <CreationForm/>
    </div>
  )
} 