import Image from "next/image"
import { Inter } from "next/font/google"
import RectanguloConBorde from "../components/createTicket"
import SoftRectangle1 from "../components/primaryRectangle1"
import SoftRectangle2 from "../components/primaryRectangle2"
import BotonAtras from "../components/backButton"
import ImagenComponente from "../components/componentImage"
import { useRouter } from 'next/router';
import Link from 'next/link';  // Importa el componente Link para enlaces internos


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <BotonAtras />
      <ImagenComponente 
        src={"https://i.ibb.co/26zPC6S/Whats-App-Image-2023-11-14-at-16-29-1.png"} 
        alt={""} 
        style={{position: 'fixed', top: '0px', left: '0vw'}} />
      <ImagenComponente 
        src={"https://i.ibb.co/Tgdyrsj/icon.png"} 
        alt={""} 
        style={{position: 'fixed', right: '40vw'}} />
      <ImagenComponente
        src={"https://i.ibb.co/rGzHTtf/icon.png"} 
        alt={""} 
        style={{position: 'fixed', right: '30vw'}} />
      {/* Otros componentes que quieras agregar */}
      <RectanguloConBorde/>
    </div>
    );
  }  // ES PARA PROBAR LA VENTANA DE CREAR TICKET