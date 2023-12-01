import { ChangeEvent, FormEvent, forwardRef, useRef, useState } from "react";
import TextBox from "./TextBox";
import fetchEmployees from "@/services/project/fetchEmployees";
import { format } from "date-fns";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from "@mui/material";

export default function creationForm() {
    
    const estiloRectangulo: React.CSSProperties = {
      position: 'fixed',
      width: '70vw',
      height: '80vh',
      backgroundColor: '#FFFFFF',
      top: '15vh',
      left: '25vw'
    };

  const [formData, setFormData] = useState({ name: "", description: "", startDate: "",finishDate: "", selectedDate:""});
  const projectLeaderRef = useRef(null);
  const priorityRef = useRef(null);

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    alert(`Nombre: ${formData.name}, Descripcion: ${formData.description}, fecha de inicio: ${formData.startDate}, fecha de fin: ${formData.finishDate},prioridad: ${ priorityRef.current}, lider:  ${projectLeaderRef.current} `);
  };
  
  const Employees = fetchEmployees();
  const EmployeeNames = Employees.list;
  EmployeeNames.map((employee) => {
    const fullName = employee ? `${employee['Nombre']} ${employee['Apellido']}` : "-";
    return fullName;
  });

  return (
    <form onSubmit={handleSubmit}>
    <div style={estiloRectangulo}>

      <TextBox label='Nombre' description='Indique el nombre del proyecto' style={{ position: 'absolute', top: '5%', left: '1%' }} name={"name"} handleChange={handleChange} />
      <TextBox label='Descripcion' description='Detalles del proyecto' style={{ position: 'absolute', top: '5%', left: '35%' }} name={"description"} handleChange={handleChange} />
      <TextBox label = 'Fecha inicio (yyyy-MM-dd)' description={''} style = {{position: 'absolute', top: '30%', left: '1%'}} name={"startDate"} handleChange={handleChange}  />
      <TextBox label = 'Fecha estimada finalizacion (yyyy-MM-dd)' description={''} style = {{position: 'absolute', top: '30%', left: '35%'}} name={"finishDate"} handleChange={handleChange} />

      <div style = {{position: 'absolute', top: '55%', left: '1%'}}>
        <label htmlFor="priority" style={{ fontSize: '1.3em', fontWeight: 'bold', color: 'black' }}>Prioridad</label>
        <select ref={priorityRef} style={{position: 'absolute', top: '100%', left: '10%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Seleccione la prioridad</option>
            {['Baja', 'Media', 'Alta'].map((opcion, index) => (
            <option key={index} value={opcion}>
                {opcion}
            </option>
            ))}
        </select>
      </div>

      <div style = {{ position: 'absolute', top: '55%', left: '35%' }}>
        <label htmlFor="projectLeader" style={{ fontSize: '1.3em', fontWeight: 'bold', color: 'black' }}>Project Leader</label>
        <select ref={priorityRef} style={{position: 'absolute', top: '100%', left: '10%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666'}}>
            <option value="" style= {{color: 'black'}}>Asigne un líder</option>
            {Employees.list.map((opcion) => (
            <option key={opcion.legajo} value={opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}>
                {opcion ? `${opcion['Nombre']} ${opcion['Apellido']}` : "-"}
            </option>
            ))}
        </select>
      </div>
    
                
      {/* <label>
        Selecciona una fecha:
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={"un calendario"}
            openTo="year"
            views={['year', 'month', 'day']}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </label> */}

      <button type="submit" className="buttonStyle">
        Aceptar
      </button>
    </div>  
    </form>
  );
}
