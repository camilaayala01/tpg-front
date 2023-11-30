import { useEffect, useState } from "react"
import { Task } from "@/types/types"
import TaskGridRow from "@/components/projects/taskGridRow"
import { useRouter } from "next/router"
import SkeletonLoader from "@/components/SkeletonLoader"

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function Tasks() {
  const [list, setList] = useState<Task[]>([])
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {id} = router.query;
  
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/projects/${id}/tasks`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setList(data)
        setLoading(false);
      })
  }, [])

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Tasks</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              {loading ? (
                SkeletonLoader()
              ) : list.length > 0 ? (
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <HeaderItem title="Name" />
                      <HeaderItem title="Status" />
                      <HeaderItem title="Creation Date" />
                      <HeaderItem title="Actions" />
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((task) => (
                      <TaskGridRow key={task.id} task={task} />
                    ))}
                  </tbody>
                </table>
              ) : (
                // agregar que pueda crear tasks
                <h1 className="text-3xl mb-5 font-bold text-black">No tasks created for this project.</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
