import { FormEvent, useEffect, useRef, useState } from "react";
import TextBox from "../projects/TextBox";
import DescriptionBox from "../projects/DescriptionBox";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import {  Employee, Priority, Status, Task, getEnumToString } from "@/types/types";
import { useRouter } from "next/router";
import fetchEmployees from "@/services/project/fetchEmployees";
import editTask from "@/services/project/editTask";

export default function ModifyForm({task}: {task: Task}) {
    
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };

  const [formData, setFormData] = useState({ name: task.name, description: task.description, estimatedDuration: task.estimatedDuration});
  const projectLeaderRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const [finishDate, setFinishDate] = useState<Dayjs|null>(dayjs(task.finishDate, "YYYY-MM-DD"));
  const priorityRef = useRef<HTMLSelectElement>(null);
  const router = useRouter();
  const {employees,error} = fetchEmployees();
  function handleClick() {
    router.push(`/projects/${task.projectId}/tasks/${task.id}`);
  }
  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };

  useEffect(() => {
    setFinishDate(dayjs(task.finishDate, "YYYY-MM-DD"));
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.name || !formData.description || !formData.estimatedDuration|| !finishDate || !projectLeaderRef.current?.value || !statusRef.current?.value || !priorityRef.current?.value) {
      alert("Por favor, complete todos los campos.");
      return;
    }else{
      editTask(task.id,task.projectId, formData.name, formData.description, formData.estimatedDuration, priorityRef.current?.options[priorityRef.current?.selectedIndex].value,statusRef.current?.options[statusRef.current?.selectedIndex].value, projectLeaderRef.current?.options[projectLeaderRef.current?.selectedIndex].value, finishDate);
    }
  };
  
  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Modificar Tarea</div>
    <form onSubmit={handleSubmit} >
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre del proyecto' style={{ position: 'absolute', top: '1%', left: '1%' }} name={"name"} defaultValue={task.name} handleChange={handleChange} />
       
     
      <div style =  {{position: 'absolute', top: '22%', left: '40%'}}>
        <label htmlFor="finishDate" style={{fontWeight: 'bold', color: 'black'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"Fecha finalizacion estimada"}
              openTo="year"
              defaultValue={dayjs(task.finishDate, "YYYY-MM-DD")}
              views={['year', 'month', 'day']}
              onChange={(newValue: Dayjs | null) => setFinishDate(newValue)}
            />
          </LocalizationProvider>
        </label>
      </div>
      <div style = {{position: 'absolute', top: '35%', left: '1%'}}>
        <label htmlFor="status" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Estado</label>
        <select ref={statusRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}} defaultValue={task.status}>
            {Object.keys(Status).map((opcion) => (
            <option value={opcion} key={opcion}>
                {getEnumToString(opcion)}
            </option>
            ))}
        </select>
      </div>

      <div style = {{position: 'absolute', top: '45%', left: '1%'}}>
        <label htmlFor="priority" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Prioridad</label>
        <select ref={priorityRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}} defaultValue={task.priority}>
            {Object.keys(Priority).map((opcion) => (
            <option value={opcion} key={opcion}>
                {getEnumToString(opcion)}
            </option>
            ))}
        </select>
      </div>
      
      <TextBox label='Duracion estimada' description='Indique la duracion estimada en horas' style={{ position: 'absolute', top: '35%', left: '40%' }} name={"estimatedDuration"} defaultValue={task.estimatedDuration.toString()} handleChange={handleChange} />
       
      <div style = {{position: 'absolute', top: '20%', left: '1%'}}>
        <label htmlFor="projectLeader" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Lider de Proyecto</label>
        <select ref={projectLeaderRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
        {employees?.map((opcion) => (
            <option value={opcion.legajo} key={opcion.legajo}>
                {opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}
            </option>
            ))}
        </select>
            </div>
        
      <DescriptionBox label='Descripcion' description='Detalles del proyecto' style={{ position: 'absolute', top: '60%', left: '1%', width: '70%', height: '50%'}} name={"description"} defaultValue={task.description} handleChange={handleChange} />

      <button type="submit" className="buttonStyle" onClick={handleClick}>
        Aceptar
      </button>
    </div>  
    </form>
    </>
  );
}
