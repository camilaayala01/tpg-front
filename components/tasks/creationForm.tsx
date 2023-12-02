import { FormEvent, useRef, useState } from "react";
import TextBox from "../projects/TextBox";
import DescriptionBox from "../projects/DescriptionBox";
import fetchEmployees from "@/services/project/fetchEmployees";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import { Dayjs } from "dayjs";
import createProject from "@/services/project/createProject";

export default function creationForm() {
    
    const estiloRectangulo: React.CSSProperties = {
      position: 'fixed',
      width: '70vw',
      height: '80vh',
      backgroundColor: '#FFFFFF',
      top: '18vh',
      left: '25vw'
    };

  const [formData, setFormData] = useState({ name: "", description: ""});
  const projectLeaderRef = useRef<HTMLSelectElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [finishDate, setFinishDate] = useState<Dayjs | null>(null);

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    
    alert(`Nombre: ${formData.name}, Descripcion: ${formData.description}, Fecha de Inicio: ${startDate}, Fecha de Fin: ${finishDate}, Prioridad: ${ priorityRef.current}, Lider:  ${projectLeaderRef.current}`);
  };
  
  const Employees = fetchEmployees();
  const EmployeeNames = Employees.list;
  EmployeeNames.map((employee) => {
    const fullName = employee ? `${employee['Nombre']} ${employee['Apellido']}` : "-";
    return fullName;
  });

  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Crear Proyecto</div>
    <form onSubmit={handleSubmit}>
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre del proyecto' style={{ position: 'absolute', top: '1%', left: '1%' }} name={"name"} handleChange={handleChange} />

      <div style = {{position: 'absolute', top: '20%', left: '1%'}}>
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
     
      <div style =  {{position: 'absolute', top: '20%', left: '40%'}}>
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
      
      <div style = {{position: 'absolute', top: '35%', left: '1%'}}>
        <label htmlFor="priority" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Prioridad</label>
        <select ref={priorityRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Seleccione la prioridad</option>
            {['Baja', 'Media', 'Alta'].map((opcion, index) => (
            <option key={index} value={opcion}>
                {opcion}
            </option>
            ))}
        </select>
      </div>

      <div style = {{ position: 'absolute', top: '35%', left: '40%' }}>
        <label htmlFor="projectLeader" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Project Leader</label>
        <select ref={projectLeaderRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Asigne un líder</option>
            {Employees.list.map((opcion) => (
            <option key={opcion.legajo} value={opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}>
                {opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}
            </option>
            ))}
        </select>
      </div>

      <DescriptionBox label='Descripcion' description='Detalles del proyecto' style={{ position: 'absolute', top: '50%', left: '1%', width: '70%', height: '50%'}} name={"description"} handleChange={handleChange} />

      <button type="submit" className="buttonStyle">
        Aceptar
      </button>
    </div>  
    </form>
    </>
  );
}