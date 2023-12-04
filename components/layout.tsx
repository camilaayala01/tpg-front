import Link from "next/link"
import { useRouter } from "next/router"
import SideBarItem from "./SidebarItem"
import { ISidebarItem } from "./types"
import Logo from "../public/icono.svg"
import Image from "next/image"
import { SVGAttributes } from "react";

function UserCircleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
}


export default function Layout({ children }: { children: any }) {
  const menuItems: ISidebarItem[] = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/support",
      title: "Soporte",
    },
    {
      href: "/projects",
      title: "Proyectos",
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-grisBarra sticky top-0 h-10  flex justify-between items-center font-semibold uppercase text-black">

      <div className="items-center mx-5">
        <img
          src="https://i.ibb.co/z2d6z5k/svgviewer-output-1.png"
          alt="Logo SVG"
          width={100}
          height={100}
          />
        </div>

        <div className="flex items-center mx-5">
          <UserCircleIcon className="top-0 h-10 m-auto "></UserCircleIcon>
          <p className="sm:ml+10 text-sm">Cody Codea</p>
        </div>
        
      </header>
      <div className="flex flex-col md:flex-row flex-1 " >
        <aside className="bg-grisLateral w-full md:w-60 text-black">
          <nav>
            <ul>
              {menuItems.map((item) => (
                <SideBarItem {...item} key={item.title} />
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
