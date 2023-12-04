import Image from 'next/image';
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import TaskGridRow from "@/components/support/taskGridRow";
import { useRouter } from 'next/router';
import Link from 'next/link';
import BotonAtras from "@/components/support/backButton";
import ProjectGridRow from "@/components/projects/projectGridRow";
import { supportFetcher } from "@/services/support/fetcher";
import { Task, Ticket } from "@/types/types";
import FetchTasksForTicket from '@/services/support/fetchTasksForTicket';
import MyButton from '../projects/viewButton';


const inter = Inter({ subsets: ["latin"] })

function HeaderItem({ title }: { title: string }) {
    return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
  }

export default function TaskView({ids} : {ids: number[]})
{

  const taskList = FetchTasksForTicket(ids).taskList;
 
  
  if (taskList && taskList.length > 0)
  {
    return (
      <div>
        <p style = {{top: '10vh', left: '0vw', fontSize: '1.2rem', fontWeight: 'bold', color: 'black'}}>Tareas asociadas</p>
        <table style={{ width: '60%',  overflowX: 'auto' }}>
          <thead>
            <tr>
              <HeaderItem title="Nombre" />
              <HeaderItem title="Prioridad" />
              <HeaderItem title="Estado" />
            </tr>
          </thead>
          <tbody>
            {
              taskList.map((task) => (TaskGridRow(task)))
            }
          </tbody>
        </table>
        <BotonAtras />
    </div>
    )
}else
  {
    return(<div> </div>);
  }   

}