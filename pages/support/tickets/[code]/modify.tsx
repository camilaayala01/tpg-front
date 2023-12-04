import { Inter } from "next/font/google"
import { useRouter } from "next/router";

import { Ubuntu } from "next/font/google";
import ModifyForm from "@/components/support/modifyForm";
import FetchTicket from "@/services/support/fetchTicket";
import Button from "@/components/support/button";
import AddButton from "@/components/projects/addButton";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });


export default function ModificarTicket() {

    const router = useRouter();
  
    //const { codeTicket } = router.query;

   // console.log(router.query.code);

    const {curTicket, error} = FetchTicket(router.query.code); 

    if (!curTicket) {
        return <h1>Ticket not found</h1>;
    }

    const pressTaskButton = () => {
        router.push(`/create_task`);
    }

    const urlModify = `/support/tickets/${curTicket.code}/create_task`

    return (
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <div style={{ position: 'absolute', top: '70%', left: '12%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
                <AddButton urlImg="https://i.ibb.co/Z68w2Mj/edit.png" name="Crear Tarea" urlDestination={urlModify} backColor="rgba(155, 190, 200, 1)"/>
            </div>
            {/* <Button label="Crear tarea" style={{backgroundColor: "verde"}} funcion={pressTaskButton}></Button> */}
            <ModifyForm ticket ={curTicket} />
        </div>)
} 