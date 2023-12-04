import Image from 'next/image';
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import TicketGridRow from "@/components/projects/ticketGridRow";
import FetchTicketsForTask from '@/services/project/fetchTicketsForTask';
import MyButton from '../projects/viewButton';


const inter = Inter({ subsets: ["latin"] })

function HeaderItem({ title }: { title: string }) {
    return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
  }

export default function TicketsView({id, taskId} : {id:any, taskId:any}) {

  const {ticketList, errorTickets} = FetchTicketsForTask(id,taskId);
  if (ticketList && ticketList.length > 0)
  {
    return (
      <div style={{maxHeight:'10vh'}}>
        <p style = {{top: '10vh', left: '0vw', fontSize: '1rem', fontWeight: 'bold', color: 'black'}}>Tickets asociados</p>
        <table style={{ width: '90%', maxWidth: '90vw', height: 'auto', overflowX: 'auto' }}>
          <thead>
            <tr>
              <HeaderItem title="Nombre" />
              <HeaderItem title="Severidad" />
              <HeaderItem title="Acciones" />
            </tr>
          </thead>
          <tbody>
            {
              ticketList.map((ticket) => (TicketGridRow(ticket)))
            }
          </tbody>
        </table>
    </div>
    )
  }
  return (<></>)
}