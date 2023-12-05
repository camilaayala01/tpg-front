import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Project } from "@/types/types";
import SkeletonLoader from "@/components/SkeletonLoader";
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
          if (error instanceof TypeError) 
          {
            setError(error.message);
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