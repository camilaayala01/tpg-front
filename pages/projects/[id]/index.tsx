import Image from "next/image"
import { Inter } from "next/font/google"
import { useRouter } from "next/router";
import MyButton from "@/components/projects/viewButton";
import { useEffect, useState } from "react";
import { Project } from "@/types/types";
import SkeletonLoader from "@/components/SkeletonLoader";
import LeaderBox from "@/components/projects/LeaderBox";
import DateBox from "@/components/projects/DateBox";
import ProjectVisualization from "@/components/projects/projectVisualization";

import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})


export default function ProjectMainPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = router.query;

  const [curProject, setProject] = useState<Project>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if(!id) return;
    setLoading(true);
    fetch(`https://psa-proyecto.onrender.com/projects/${id}`)
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

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      {loading ? (
        SkeletonLoader()
        
      ) : error || !curProject ? (
        <h1 className="text-4xl mb-5 font-bold text-red-500">{error}</h1>
      ) : (
        <ProjectVisualization project={curProject}/>
      )}
    </div>
  );
}