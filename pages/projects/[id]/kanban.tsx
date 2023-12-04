
import Image from "next/image"
import { Inter } from "next/font/google"
import { HeaderItem } from "@/pages/projects";
import { useState } from "react";
import { useEffect } from "react";
import { Task } from "@/types/types";
import TaskGridRow from "@/components/projects/taskGridRow";
import router, { useRouter } from "next/router";
import TableClass from "@/components/projects/TableClass";
import KanbanRow from "@/components/projects/kanban";
import { Ubuntu } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })


export default function Home() {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await fetch(`https://psa-proyecto.onrender.com/projects/${id}/tasks`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Separate the data based on a condition (e.g., category includes 'SpecialCategory')

  const notStartedFilter = data.filter(task => task.status.includes('NOT_STARTED'));
  const doingFilter = data.filter(task => task.status.includes('IN_PROGRESS'));
  const doneFilter = data.filter(task => task.status.includes('COMPLETED'));
  const cancelledFilter = data.filter(task => task.status.includes('CANCELLED'));
  return (

    <div className="flex flex-row justify-center">

      <div className="flex flex-col w-64  p-4 bg-white border border-gray-200 rounded-lg" style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18  bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl font-bold decoration-gray-400" style={{textAlign: "center"}}>TO DO</h1>
        </div>
        {notStartedFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))
        }
      </div>

      <div className="flex flex-col  w-64 p-4 bg-white border border-gray-200 rounded-lg" style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18 bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl font-bold decoration-gray-400" style={{textAlign: "center"}}>DOING</h1>
        </div>
        {doingFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
      </div>

      <div className="flex flex-col w-64 p-4 bg-white border border-gray-200 rounded-lg " style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18 bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl font-bold decoration-gray-400" style={{textAlign: "center"}}>DONE</h1>
        </div>
        {doneFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
      </div>

      <div className="block w-64 p-4 bg-white border border-gray-200 rounded-lg " style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18 bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl font-bold decoration-gray-400" style={{textAlign: "center"}}>CANCELLED</h1>
        </div>
        {cancelledFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

