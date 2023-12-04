import { FormEvent, useEffect, useRef, useState } from "react";
import TextBox from "./TextBox";
import DescriptionBox from "./DescriptionBox";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import editProject from "@/services/project/editProject";
import {  Employee, Project, Status, getEnumToString} from "@/types/types";
import { useRouter } from "next/router";
import fetchEmployees from "@/services/project/fetchEmployees";

export default function ModifyForm({project}: {project: Project}) {
    
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };

  const [formData, setFormData] = useState({ name: project.name, description: project.description});
  const projectLeaderRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const [finishDate, setFinishDate] = useState<Dayjs|null>(dayjs(project.finishDate, "YYYY-MM-DD"));
  const {employees,error} = fetchEmployees();

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };

  useEffect(() => {
    setFinishDate(dayjs(project.finishDate, "YYYY-MM-DD"));
  })

  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.name || !formData.description ||  !finishDate || !projectLeaderRef.current?.value || !statusRef.current?.value ) {
      alert("Por favor, complete todos los campos.");
    }else{
      await editProject(project.id, formData.name, formData.description, statusRef.current?.options[statusRef.current?.selectedIndex].value, projectLeaderRef.current?.options[projectLeaderRef.current?.selectedIndex].value, finishDate);
      router.push(`/projects/${project.id}`).then(() => window.location.reload());
    }
    return;
  };
  
  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Modificar Proyecto</div>
    <form onSubmit={handleSubmit} >
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre del proyecto' style={{ position: 'absolute', top: '1%', left: '1%' }} name={"name"} defaultValue={project.name} handleChange={handleChange} />
       
     
      <div style =  {{position: 'absolute', top: '22%', left: '40%'}}>
        <label htmlFor="finishDate" style={{fontWeight: 'bold', color: 'black'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"Fecha finalizacion estimada"}
              openTo="year"
              defaultValue={dayjs(project.finishDate, "YYYY-MM-DD")}
              views={['year', 'month', 'day']}
              onChange={(newValue: Dayjs | null) => setFinishDate(newValue)}
            />
          </LocalizationProvider>
        </label>
      </div>
      <div style = {{position: 'absolute', top: '35%', left: '1%'}}>
        <label htmlFor="status" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Estado</label>
        <select ref={statusRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}} defaultValue={project.status}>
            {Object.keys(Status).map((opcion) => (
            <option value={opcion} key={opcion}>
                {getEnumToString(opcion)}
            </option>
            ))}
        </select>
      </div>
      
       
      <div style = {{position: 'absolute', top: '20%', left: '1%'}}>
        <label htmlFor="projectLeader" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Lider de Proyecto</label>
        <select ref={projectLeaderRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}} defaultValue="">
        {employees?.map((opcion) => (
            <option value={opcion.legajo} key={opcion.legajo}>
                {opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}
            </option>
            ))}
        </select>
            </div>
        
      <DescriptionBox label='Descripcion' description='Detalles del proyecto' style={{ position: 'absolute', top: '50%', left: '1%', width: '70%', height: '50%'}} name={"description"} defaultValue={project.description} handleChange={handleChange} />

      <button type="submit" className="buttonStyle">
        Aceptar
      </button>
    </div>  
    </form>
    </>
  );
}
