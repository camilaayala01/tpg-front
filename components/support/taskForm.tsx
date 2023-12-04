import { FormEvent, useEffect, useRef, useState } from "react";
import TextBox from "../projects/TextBox";
import DescriptionBox from "../projects/DescriptionBox";
import fetchEmployees from "@/services/project/fetchEmployees";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import { Dayjs } from "dayjs";
import { useRouter } from "next/router";
import { Employee, Project } from "@/types/types";
import createTask from "@/services/project/createTask";
import fetchProject from "@/services/project/fetchProject";
import createTicketAssociatedTask from "@/services/support/createTicketAssociatedTask";

export default function CreationForm() {
    // return (
    //     <>
    //         <div style={{position: "fixed", backgroundColor: "verde"}}>Llegue a crear tarea</div>
    //     </>
    // )
  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };
  const router = useRouter();
  const { code } = router.query;
  const [formData, setFormData] = useState({ name: "", description: "", estimatedDuration:""});
  const projectLeaderRef = useRef<HTMLSelectElement>(null);
  const projectRef = useRef<HTMLSelectElement>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const [finishDate, setFinishDate] = useState<Dayjs | null>(null);
  const [projects, setProjects] = useState<Project[]>();
  const {employees,error} = fetchEmployees();

  async function getProjects(): Promise<Project[]> {
    try {
      const response = await fetch('https://psa-proyecto.onrender.com/projects');
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener proyectos:', error);
      throw error; 
    }
  }

  async function fetchProjects(): Promise<Project[]> {
    return await getProjects();
  }

  useEffect(() => {
    const fetchProjectData = async () => {
        const data = await fetchProjects();
        setProjects(data);
    };
    fetchProjectData();
  }, []);



  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.description || !formData.estimatedDuration|| !startDate || !finishDate || !priorityRef.current?.value || !projectLeaderRef.current?.value || !projectRef.current?.value) {
      alert("Por favor, complete todos los campos.");
      return;
    }else{
      createTicketAssociatedTask(code, projectRef.current?.options[projectRef.current?.selectedIndex].value, formData.name, formData.description, formData.estimatedDuration, startDate, finishDate, projectLeaderRef.current?.options[projectLeaderRef.current?.selectedIndex].value,priorityRef.current?.options[priorityRef.current?.selectedIndex].value);
      router.back();
    }
  };
  
  return (
    <>
    <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Crear Tarea</div>
    <form onSubmit={handleSubmit}>
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre de la tarea' style={{ position: 'absolute', top: '1%', left: '1%' }} name={"name"} defaultValue="" handleChange={handleChange} />

      
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

      <div style = {{position: 'absolute', top: '35%', left: '1%'}}>
        <label htmlFor="priority" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Prioridad</label>
        <select ref={priorityRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Seleccione la prioridad</option>
            {['LOW', 'MEDIUM', 'HIGH'].map((opcion, index) => (
            <option key={index} value={opcion}>
                {opcion}
            </option>
            ))}
        </select>
      </div>
      <TextBox label='Duracion estimada' description='Indique la duracion estimada en horas' style={{ position: 'absolute', top: '35%', left: '40%' }} name={"estimatedDuration"} defaultValue="" handleChange={handleChange} />


      <div style = {{position: 'absolute', top: '20%', left: '1%'}}>
        <label htmlFor="projectLeader" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Responsable</label>
        <select ref={projectLeaderRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Asigne un responsable </option>
            {employees?.map((opcion) => (
            <option key ={opcion.legajo} value={opcion.legajo}>
                {opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}
            </option>
            ))}
        </select>
      </div>

      <div style = {{position: 'absolute', top: '20%', left: '75%'}}>
        <label htmlFor="project" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Proyecto</label>
        <select ref={projectRef} style={{position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Asigne un proyecto </option>
            {projects?.map((opcion) => (
            <option key ={opcion.id} value={opcion.id}>
                {opcion ? `${opcion['name']}` : "-"}
            </option>
            ))}
        </select>
      </div>

      <DescriptionBox label='Descripcion' description='Detalles de la tarea' style={{ position: 'absolute', top: '50%', left: '1%', width: '70%', height: '50%'}} name={"description"}  defaultValue="" handleChange={handleChange} />

      <button type="submit" className="buttonStyle">
        Aceptar
      </button>
    </div>  
    </form>
    </>
  );
}
