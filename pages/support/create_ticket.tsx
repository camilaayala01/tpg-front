import Image from "next/image"
import { Inter } from "next/font/google"
import ImagenComponente from "@/components/support/componentImage";
import BotonAtras from "@/components/support/BackButton";
import RectanguloConBorde from "@/components/support/createTicket";



const inter = Inter({ subsets: ["latin"] })

export default function CreateTicket() {
  return (
    <div>
      <BotonAtras />
      {/* Otros componentes que quieras agregar */}
      <RectanguloConBorde/>
    </div>
    );
  }  // ES PARA PROBAR LA VENTANA DE CREAR TICKET