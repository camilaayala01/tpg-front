import { Project } from "@/types/types";
import React from "react";
import LeaderBox from "./LeaderBox";
import DateBox from "./DateBox";
import MyButton from "./viewButton";
import { useRouter } from "next/router";

export default function projectVisualization({ project }: {project: Project}) {
    
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };

  const router = useRouter();
  function handleButtonClick() {
    router.push(`${project.id}/tasks`);
  }

  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Proyecto "{project.name}"</div>
    <div style={estiloRectangulo}>
        <div style={{ position: 'absolute', top: '20%', left: '0%', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'grey', marginRight: '20px' }}>Leader</p>
            <LeaderBox id={project.projectLeaderId} />
        </div>
        <div style={{ position: 'absolute', top: '5%', left: '0%', width: '90%', background: 'rgba(217, 217, 217, 0.16)', borderRadius: 10, border: '1px #999999 solid', padding: '10px', boxSizing: 'border-box' }}>
            <h2 style={{ color: '#666666', fontSize: '1rem', fontFamily: 'Arial, sans-serif', margin: 0, fontWeight: 'bold' }}>
                Descripción
            </h2>
            <p style={{ color: 'black', fontSize: '0.8rem', fontFamily: 'Arial, sans-serif', margin: 0 }}>
                {project.description}
            </p>
        </div>
        
          <DateBox dateName={"hola"} date={"chau"} />

          <div style={{ position: 'absolute', top: '70%', left: '0%', display: 'flex', alignItems: 'center' }} className="text-sm leading-5 text-gray-900">
            <MyButton onClickHandler={handleButtonClick} />
          </div>

      <button className="buttonStyle">
        Aceptar
      </button>
    </div>
    </>
  );
}
