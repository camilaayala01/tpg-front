import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Ticket } from "@/types/types";
import SkeletonLoader from "@/components/SkeletonLoader";
import TicketVisualization from "@/components/support/ticketVisualization";


import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})


export default function TicketsMainPage({ params }: { params: { code: string } }) {
  const router = useRouter();
  const { code } = router.query;

  const [curTicket, setTicket] = useState<Ticket>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    if(!code) return;
    setLoading(true);
    fetch(`https://psa-soporte-1yfx.onrender.com/tickets/${code}`)
    
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setTicket(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setError('No se puede conectar al servidor. Verifica tu conexion e intentalo de nuevo.');
        } else {
          setError('This Ticket does not exist.');
        }
        setLoading(false);
      });
  }, [code]);

  return (
    <div className="flex h-full flex-col justify-center items-center bg-white">
      {loading ? (
        SkeletonLoader()
        
      ) : error || !curTicket ? (
        <h1 className="text-4xl mb-5 font-bold text-red-500">{error}</h1>
      ) : (
        <TicketVisualization ticket={curTicket}/>
      )}
    </div>
  );
}