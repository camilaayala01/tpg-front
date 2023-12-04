import Image from 'next/image';
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import TicketGridRow from "@/components/support/ticketGridRow";
import { useRouter } from 'next/router';
import Link from 'next/link';
import BotonAtras from "@/components/support/backButton";
import ProjectGridRow from "@/components/projects/projectGridRow";
import { supportFetcher } from "@/services/support/fetcher";
import { Ticket } from "@/types/types";
import { translateInputTicket } from '@/services/support/translateTicket';


const inter = Inter({ subsets: ["latin"] })

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function ManageTickets() {

  const [tickets, setList] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supportFetcher("/tickets", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
        },
    })
    .then((data) => {
      setList(data)
      setLoading(false);
    })
  }, [])

  return (
    <div>
        <p style = {{top: '10vh', left: '10vw', fontSize: '1.5rem', fontWeight: 'bold', color: 'black'}}>Tickets</p>
        <table className="min-w-full">
          <thead>
            <tr>
              <HeaderItem title="Titulo" />
              <HeaderItem title="Estado" />
              <HeaderItem title="Severidad" />
              <HeaderItem title="Prioridad" />
              <HeaderItem title="Acciones" />
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
                  <TicketGridRow key={ticket['code']} ticket={translateInputTicket(ticket)} />
                ))}
          </tbody>
        </table>
        <BotonAtras />
    </div>
  );
}