
import { useState } from "react";
import { useEffect } from "react";
import { Task } from "@/types/types";
import router, { useRouter } from "next/router";
import KanbanRow from "@/components/projects/kanban";
import { BotonAtrasTop } from "@/components/projects/bottonBackTop"

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

  const notStartedFilter = data.filter(task => task.status.includes('NOT_STARTED'));
  const doingFilter = data.filter(task => task.status.includes('IN_PROGRESS'));
  const doneFilter = data.filter(task => task.status.includes('COMPLETED'));
  const cancelledFilter = data.filter(task => task.status.includes('BLOCKED'));
  
  return (

    <div className="flex flex-row justify-center">

      <div className="flex flex-col w-64  p-4 bg-white border border-gray-200 rounded-lg" style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18  bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl text-black font-bold decoration-gray-400" style={{textAlign: "center"}}>TO DO</h1>
        </div>
        {notStartedFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))
        }
      </div>

      <div className="flex flex-col  w-64 p-4 bg-white border border-gray-200 rounded-lg" style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18 bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl text-black font-bold decoration-gray-400" style={{textAlign: "center"}}>DOING</h1>
        </div>
        {doingFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
      </div>

      <div className="flex flex-col w-64 p-4 bg-white border border-gray-200 rounded-lg " style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18 bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl text-black font-bold decoration-gray-400" style={{textAlign: "center"}}>DONE</h1>
        </div>
        {doneFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
      </div>

      <div className="block w-64 p-4 bg-white border border-gray-200 rounded-lg " style={{marginRight:15}}>
        <div className="block max-w-md p-4 px-18 bg-blue-100 border border-gray-200 rounded-lg ">
          <h1 className="text-xl text-black font-bold decoration-gray-400" style={{textAlign: "center"}}>BLOCKED</h1>
        </div>
        {cancelledFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
      </div>
      <BotonAtrasTop distanceLeft="20%" distanceTop="80%"/>
    </div>
  );
};

