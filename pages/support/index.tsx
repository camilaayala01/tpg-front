import Image from "next/image"
import { Inter } from "next/font/google"

import { useRouter } from 'next/router';
import Link from 'next/link';  // Importa el componente Link para enlaces internos
import SoftRectangle1 from "@/components/support/primaryRectangle1";
import SoftRectangle2 from "@/components/support/primaryRectangle2";
import BotonAtras from "@/components/support/backButton";
import ImagenComponente from "@/components/support/componentImage";


const inter = Inter({ subsets: ["latin"] })

export default function Tickets() {
  return (
    <div>
      <SoftRectangle1 />
      <SoftRectangle2 />
      <BotonAtras />
      {/* Otros componentes que quieras agregar */}
    </div>
  );
}