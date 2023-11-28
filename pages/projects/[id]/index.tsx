import Image from "next/image"
import { Inter } from "next/font/google"
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] })

export default function ProjectMainPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const {id} = router.query;

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <h1 className="text-4xl mb-5 font-bold text-black">Ahora estas en proyecto {id}</h1>
      <span className="text-7xl">proyecto</span>
    </div>
  )
}
