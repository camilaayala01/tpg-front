import { Inter } from "next/font/google"
import SoftRectangle1 from "@/components/support/primaryRectangle1";
import SoftRectangle2 from "@/components/support/primaryRectangle2";


const inter = Inter({ subsets: ["latin"] })

export default function Tickets() {
  return (
    <div>
      <SoftRectangle1 />
      <SoftRectangle2 />
    </div>
  );
}