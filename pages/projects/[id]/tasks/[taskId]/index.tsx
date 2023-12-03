import Image from "next/image"
import { Inter } from "next/font/google"
import { useRouter } from "next/router";
import MyButton from "@/components/projects/viewButton";
import { useEffect, useState } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";
import LeaderBox from "@/components/projects/LeaderBox";
import DateBox from "@/components/projects/DateBox";
import { Task } from "@/types/types";
import { TaskVisualization } from "@/components/tasks/TaskVisualization";


const inter = Inter({ subsets: ["latin"] })

export default function TaskMainPage({ params }: { params: { id: string} }) {
  const router = useRouter();
  const { id, taskId } = router.query;

  const [curTask, setTask] = useState<Task>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if(!id || !taskId) return;
    setLoading(true);
    fetch(`https://psa-proyecto.onrender.com/projects/${id}/tasks/${taskId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexión e inténtalo de nuevo.');
        } else {
          setError('This task does not exist.');
        }
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, taskId]);

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      {loading ? (
        SkeletonLoader()
        
      ) : error || !curTask ? (
        <h1 className="text-4xl mb-5 font-bold text-red-500">{error}</h1>
      ) : (
        <TaskVisualization task={curTask} />
      )}
    </div>
  );
}

