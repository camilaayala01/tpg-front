import { Inter } from "next/font/google"
import { useRouter } from "next/router";

import { Ubuntu } from "next/font/google";
import ModifyForm from "@/components/support/modifyForm";
import FetchTicket from "@/services/support/fetchTicket";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });


export default function ModificarTicket() {

    const router = useRouter();
  
    //const { codeTicket } = router.query;

   // console.log(router.query.code);

    const {curTicket, error} = FetchTicket(router.query.code); 

    if (!curTicket) {
        return <h1>Ticket not found</h1>;
    }

    return (
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <ModifyForm ticket ={curTicket} />
        </div>)
} 