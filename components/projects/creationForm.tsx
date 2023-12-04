import { FormEvent, useEffect, useRef, useState } from "react";
import TextBox from "./TextBox";
import DescriptionBox from "./DescriptionBox";
import fetchEmployees from "@/services/project/fetchEmployees";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import { Dayjs } from "dayjs";
import createProject from "@/services/project/createProject";
import { useRouter } from "next/router";

export default function creationForm() {
    
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", description: ""});
  const projectLeaderRef = useRef<HTMLSelectElement>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [finishDate, setFinishDate] = useState<Dayjs | null>(null);
  const {employees,error} = fetchEmployees();


  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.description || !startDate || !finishDate || !projectLeaderRef.current?.value) {
      alert("Por favor, complete todos los campos.");
    }else{
      await createProject(formData.name, formData.description, startDate, finishDate, projectLeaderRef.current?.options[projectLeaderRef.current?.selectedIndex].value);
      router.push(`/projects`).then(() => window.location.reload());
    }
  };
  
  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Crear Proyecto</div>
    <form onSubmit={handleSubmit}>
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre del proyecto' style={{ position: 'absolute', top: '1%', left: '1%' }} name={"name"} defaultValue="" handleChange={handleChange} />

      <div style = {{ position: 'absolute', top: '5%', left: '40%' }}>
        <label htmlFor="startDate" style={{fontWeight: 'bold', color: 'black'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"Fecha de inicio"}
              openTo="year"
              views={['year', 'month', 'day']}
              onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
            />
          </LocalizationProvider>
        </label>
      </div>
     
      <div style =  {{position: 'absolute', top: '22%', left: '40%'}}>
        <label htmlFor="finishDate" style={{fontWeight: 'bold', color: 'black'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"Fecha finalizacion estimada"}
              openTo="year"
              views={['year', 'month', 'day']}
              onChange={(newValue: Dayjs | null) => setFinishDate(newValue)}
            />
          </LocalizationProvider>
        </label>
      </div>

      <div style = {{position: 'absolute', top: '20%', left: '1%'}}>
        <label htmlFor="projectLeader" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Project Leader</label>
        <select ref={projectLeaderRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Asigne un líder</option>
            {employees?.map((opcion) => (
            <option value={opcion.legajo}>
                {opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}
            </option>
            ))}
        </select>
      </div>

      <DescriptionBox label='Descripcion' description='Detalles del proyecto' style={{ position: 'absolute', top: '40%', left: '1%', width: '70%', height: '50%'}} name={"description"}  defaultValue="" handleChange={handleChange} />

      <button type="submit" className="buttonStyle">
        Aceptar
      </button>
    </div>  
    </form>
    </>
  );
}
