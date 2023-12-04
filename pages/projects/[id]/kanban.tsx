
import Image from "next/image"
import { Inter } from "next/font/google"
import { HeaderItem } from "@/pages/projects";
import { useState } from "react";
import { useEffect } from "react";
import { Task} from "@/types/types";
import TaskGridRow from "@/components/projects/taskGridRow";
import router, { useRouter } from "next/router";
import KanbanBoard from "@/components/projects/kanban";
import SkeletonLoader from "@/components/SkeletonLoader";

const inter = Inter({ subsets: ["latin"] })

export default function Kanban() {

  const [list, setList] = useState<Task[]>([])
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
        setList(data)
        setLoading(false);
      })
    }, [])
    return (
      <div className="flex h-full flex-col justify-center items-center bg-white">
      loading ? ( SkeletonLoader() ) :
      <KanbanBoard tasks={list}/>
      </div>
    );

}

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
