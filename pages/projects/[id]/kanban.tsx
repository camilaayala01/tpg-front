
import Image from "next/image"
import { Inter } from "next/font/google"
import { HeaderItem } from "@/pages/projects";
import { useState } from "react";
import { useEffect } from "react";
import { Task} from "@/types/types";
import TaskGridRow from "@/components/projects/taskGridRow";
import router, { useRouter } from "next/router";
import TableClass from "@/components/projects/TableClass";
import KanbanRow from "@/components/projects/kanban";

const inter = Inter({ subsets: ["latin"] })


export default function Home() {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    const fetchData = async () => {
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

  return (
    <div>
      {notStartedFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))
        }
        {doingFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
        {doneFilter.map((task) => (
          <KanbanRow key={task.id} task={task} />
        ))}
    </div>
  );
};

/*
export default function Home() {

  const [toDoList, setToDoList] = useState<Task[]>([])
  const [DoingList, setDoingList] = useState<Task[]>([])
  const [doneList, setDoneList] = useState<Task[]>([])
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setLoading(true);
    fetch(`https://psa-proyecto.onrender.com/projects/${id}/tasks`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setToDoList(data.status === "NOT_STARTED")
        setDoingList(data.status.includes("IN_PROGRESS"))
        setDoneList(data.status.includes("COMPLETED"))
        setLoading(false);
      })
    }, [id])
    console.log(toDoList)
    /*
    const tableData = {
      setToDoList["name"],
      setDoingList["name"],
      setDoneList["name"],
    };
    */
      /*
      <table className="min-w-full">
                  <thead>
                    <tr>
                      <HeaderItem title="TO DO" />
                      <HeaderItem title="DOING" />
                      <HeaderItem title="DONE" />
                    </tr>
                  </thead>
                  <tbody>

                    

                  </tbody>
                </table>
      */
     /*
          return(
                <div className="App">
                   
                </div>
              );
};

*/


/*
interface Props {
  index: number;
  todo: Task;
  todos: Task[];
  inbox: Task[];
  completed: Task[];
  setTodos: (s: Task[]) => void;
  setInbox: (s: Task[]) => void;
  setCompleted: (s: Task[]) => void;
}


  const TodoItem: React.FC<Props> = ({ index, todo, todos, setTodos, inbox, completed, setInbox, setCompleted }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
    if (textareaRef.current) {
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [edit]);

  const handleDone = (id: string) => {
    if (todo.status ) {
      setTodos(
        todos.filter((todo) => todo.id !== id)
      );
      setInbox([...inbox, { ...todo, isDone: false }]);
    } else {
      setTodos(
        todos.filter((todo) => todo.id !== id)
      );
      setCompleted([...completed, { ...todo, isDone: true }]);
    }
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleClickToEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };
*/
