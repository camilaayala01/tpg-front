import Image from "next/image"
import { Inter } from "next/font/google"
import TicketGridRow from "@/components/support/ticketGridRow";
import { useRouter } from 'next/router';
import Link from 'next/link';  // Importa el componente Link para enlaces internos
import BotonAtras from "@/components/support/backButton";
import ProjectGridRow from "@/components/projects/projectGridRow";


const inter = Inter({ subsets: ["latin"] })

export default function ManageTickets() {
  return (
    <div>
        <p style = {{top: '10vh', left: '10vw', fontSize: '1.5rem', fontWeight: 'bold', color: 'black'}}>Tickets</p>
        <TicketGridRow />
        <BotonAtras />
    </div>
  );
}