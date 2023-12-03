import { FormEvent, useEffect, useRef, useState } from "react";
import TextBox from "./TextBox";
import DescriptionBox from "./DescriptionBox";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import editProject from "@/services/project/editProject";
import {  Task, Status, getStatusToString } from "@/types/types";
import { useRouter } from "next/router";
import fetchEmployees from "@/services/project/fetchEmployees";
import editTask from "@/services/project/editTask";
import Tasks from "@/pages/projects/[id]/tasks";


export function ModifyFormTask({task}: {task: Task}) {
    
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };

  const [formData, setFormData] = useState({ name: task.name, description: task.description, priority: task.priority, estimatedDuration: task.estimatedDuration});
  const projectLeaderRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const [finishDate, setFinishDate] = useState<Dayjs|null>(dayjs(task.finishDate, "MM-DD-YYYY"));
  const router = useRouter();
  
  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    if (!formData.name || !formData.description ||  !finishDate || !statusRef.current?.value ) {
      alert("Por favor, complete todos los campos.");
      return;
    }else{
    
        editTask(task.id, task.projectId,formData.name, formData.description , statusRef.current?.options[statusRef.current?.selectedIndex].value,formData.priority, finishDate ,formData.estimatedDuration);
        router.push(`/projects/${task.projectId}/Tasks/${task.id}`)
    }
  };
  
  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Modificar Tarea</div>
    <form onSubmit={handleSubmit}>
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre de la tarea' style={{ position: 'absolute', top: '1%', left: '1%' }} name={"name"} defaultValue={task.name} handleChange={handleChange} />
       
     
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
            <option value={opcion}>
                {getStatusToString(opcion)}
            </option>
            ))}
        </select>
      </div>
      
      <DescriptionBox label='Descripcion' description='Detalles' style={{ position: 'absolute', top: '60%', left: '1%', width: '70%', height: '50%'}} name={"description"} defaultValue={task.description} handleChange={handleChange} />

      <button type="submit" className="buttonStyle">
        Aceptar
      </button>
    </div>  
    </form>
    </>
  );
}