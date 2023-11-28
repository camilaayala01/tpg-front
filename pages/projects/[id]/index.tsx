import Image from "next/image"
import { Inter } from "next/font/google"
import { useRouter } from "next/router";
import MyButton from "@/components/button";

const inter = Inter({ subsets: ["latin"] })

export default function ProjectMainPage({ params }: { params: { id: string } }) {
 
  const router = useRouter();
  const {id} = router.query;
  function handleButtonClick() {
    router.push(`${id}/tasks`)
  }

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      <h1 className="text-4xl mb-5 font-bold text-black">Ahora estás en proyecto {id}</h1>
      
      <div className="text-sm leading-5 text-gray-900">
        <MyButton onClickHandler={handleButtonClick} />
      </div>

      <span className="text-7xl">proyecto</span>
    </div>
  );
}



