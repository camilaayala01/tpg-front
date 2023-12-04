import Image from 'next/image';
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import TicketGridRow from "@/components/projects/ticketGridRow";
import { useRouter } from 'next/router';
import Link from 'next/link';
import BotonAtras from "@/components/support/backButton";
import ProjectGridRow from "@/components/projects/projectGridRow";
import { supportFetcher } from "@/services/support/fetcher";
import { Ticket } from "@/types/types";
import FetchTicketsForTask from '@/services/project/fetchTicketsForTask';
import MyButton from '../projects/viewButton';


const inter = Inter({ subsets: ["latin"] })

function HeaderItem({ title }: { title: string }) {
    return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
  }

export default function TicketsView({id, taskId} : {id:any, taskId:any}) {

  const {ticketList,errorTickets} = FetchTicketsForTask(id,taskId);
  if (ticketList && ticketList.length > 0)
  {
    return (
      <div>
        <p style = {{top: '10vh', left: '0vw', fontSize: '1.2rem', fontWeight: 'bold', color: 'black'}}>Tickets asociados</p>
        <table style={{ width: '60%', maxWidth: '90vw', overflowX: 'auto' }}>
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
        <BotonAtras />
    </div>
    )
    
  }
}