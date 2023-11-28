import Image from "next/image"
import { Inter } from "next/font/google"
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] })

export default function TaskMainPage({ params }: { params: { taskId: string } }) {
  const router = useRouter();
  const {taskId} = router.query;

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <h1 className="text-4xl mb-5 font-bold text-black">Ahora estas en tarea {taskId}</h1>
      <span className="text-7xl">tarea</span>
    </div>
  )
}