import Image from "next/image"
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <h1 className="text-4xl mb-5 font-bold text-black">Ahora estas en el archivo HOME</h1>
      <span className="text-7xl">🏡</span>
    </div>
  )
}
