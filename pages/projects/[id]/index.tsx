import Image from "next/image"
import { Inter } from "next/font/google"
import { useRouter } from "next/router";
import MyButton from "@/components/button";
import { useEffect, useState } from "react";
import { Project } from "@/types/types";
import SkeletonLoader from "@/components/SkeletonLoader";
import LeaderBox from "@/components/projects/LeaderBox";
import DateBox from "@/components/projects/DateBox";

const inter = Inter({ subsets: ["latin"] })

// export default function ProjectMainPage({ params }: { params: { id: string } }) {
 
//   const router = useRouter();
//   const {id} = router.query;

//   function handleButtonClick() {
//     router.push(`${id}/tasks`)
//   }

//   const [curProject, setProject] = useState<Project>()
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:8080/projects/${id}`)
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         setProject(data)
//         setLoading(false);
//       })
//   }, [])
  
//   return (
//     <div className="flex h-full flex-col justify-center items-center bg-white">
//         {loading ? (
//             SkeletonLoader()
//           ) :
//             //mostrar pag d proyecto
//             <h1 className="text-4xl mb-5 font-bold text-black">Ahora estás en proyecto {id}</h1>
//           }
//       <div className="text-sm leading-5 text-gray-900">
//         <MyButton onClickHandler={handleButtonClick} />
//       </div>

//       <span className="text-7xl">proyecto</span>
//     </div>
//   );
// }

export default function ProjectMainPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = router.query;

  const [curProject, setProject] = useState<Project>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/projects/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('This project does not exist.');
        }
        setLoading(false);
      });
  }, [id]);

  function handleButtonClick() {
    router.push(`${id}/tasks`);
  }

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      {loading ? (
        SkeletonLoader()
      ) : error || !curProject ? (
        <h1 className="text-4xl mb-5 font-bold text-red-500">{error}</h1>
      ) : (
        <>
          <h1 className="text-4xl mb-5 font-bold text-black">Ahora estás en proyecto {curProject['id']}</h1>
          <LeaderBox leaderId={1}/>
          <DateBox dateName={"hola"} date={"chau"} />
          <div className="text-sm leading-5 text-gray-900">
            <MyButton onClickHandler={handleButtonClick} />
          </div>
        </>
      )}
    </div>
  );
}