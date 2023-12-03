import { FormEvent, useEffect, useRef, useState } from "react";
import ListBox from './ListBox';
import Boton from './button';
import TextBox from './TextBox';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from "dayjs";
import dayjs from 'dayjs';
import { set } from "date-fns";
import { employeeFetcher, supportFetcher } from "@/services/support/fetcher";



const RectanguloConBorde: React.FC = () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [nombres_clientes, setNombresClientes] = useState<string[]>([]);
    const [nombres_empleados, setNombresEmpleados] = useState<string[]>([]);
    const [finishDate, setFinishDate] = useState<Dayjs | null>(null);
    const [baseClientes, setBaseClientes] = useState<any[]>([]);
    const [baseEmpleados, setBaseEmpleados] = useState<any[]>([]);

    const estiloRectangulo: React.CSSProperties = {
      position: 'fixed',
      width: '73vw',
      height: '83vh',
      backgroundColor: '#FFFFFF',
      border: '14px solid #9BBEC8',
      borderRadius: '12px',
      top: '12vh',
      left: '22vw'
    };

    interface formData {
      clientId: String,
      description: String,
      employeeId: String,
      estimatedClosingDate: String,
      priority: String,
      product: String,
      severity: String,
      status: String,
      title: String,
      version: String
      }
    
    const [formData, setFormData] = useState({
      clientId: "",
      description: "",
      employeeId: "",
      estimatedClosingDate: "",
      priority: "",
      product: "",
      severity: "",
      status: "",
      title: "",
      version: "",
      });

      
    const handleFieldChange = (name: string, value: string) => {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
      
      
    // Función para mapear nombres de clientes a IDs
    const mapClientesToIds = (razonSocialCliente: string, clientesData: any[]): string => {
      const cliente = clientesData.find((cliente) => {
        console.log(`string de comparacion: ${cliente['razon social']} - CUIT: ${cliente['CUIT']}`);
        `${cliente['razon social']} - CUIT: ${cliente['cuit']}` == razonSocialCliente});
      console.log(`razonSocialCLiente: ${razonSocialCliente}`);
      console.log(`cliente: ${cliente}`);
      return cliente ? cliente.id : 'ID no encontrado'; // Reemplaza 'id' con la propiedad real del ID
    };
      
    // Función para mapear nombres de empleados a IDs
    const mapEmpleadosToIds = (nombreEmpleado: string, empleadosData: any[]): string => {
      const empleado = empleadosData.find((empleado) => {
        console.log(`string de comparacion: ${empleado['Nombre']} ${empleado['Apellido']} - Legajo: ${empleado['legajo']}`);
        `${empleado['Nombre']} ${empleado['Apellido']} - Legajo: ${empleado['legajo']}` == nombreEmpleado});
      console.log(`empleado: ${empleado}`);
      console.log(`nombreEmpleado: ${nombreEmpleado}`);
      return empleado ? empleado.legajo.toString() : 'Legajo no encontrado'; // Reemplaza 'legajo' con la propiedad real del ID
    };
    
    useEffect(() => {
      const fetchClientes = async () => {
        try {
          const clientes = await supportFetcher("/clients", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          // Verifica que la respuesta sea un array de objetos cliente
          if (Array.isArray(clientes)) {
            // Extrae los nombres de los clientes y asigna a nombres_clientes
            const nombres_clientes = clientes.map((cliente) => `${cliente['razon social']} - CUIT: ${cliente['CUIT']}` ?? 'NN');
            const baseClientes = clientes.map((cliente) => cliente);
            setNombresClientes(nombres_clientes);
            setBaseClientes(baseClientes);
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchClientes();
    }, []); // Ejecuta solo una vez al montar el componente
    
    useEffect(() => {
      const fetchEmpleados = async () => {
        try {
          const empleados = await employeeFetcher("/employees/", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          // Verifica que la respuesta sea un array de objetos empleado
          if (Array.isArray(empleados)) {
            // Extrae los nombres de los clientes y asigna a nombres_clientes
            const nombres_empleados = empleados.map((empleado) => `${empleado['Nombre']} ${empleado['Apellido']} - Legajo: ${empleado['legajo']}` ?? 'NN');
            const baseEmpleados = empleados.map((empleado) => empleado);
            setNombresEmpleados(nombres_empleados)
            setBaseEmpleados(baseEmpleados)
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEmpleados();
    }, []); // Ejecuta solo una vez al montar el componente



    const handleCrearTicket = async () => {
      try {
        //console.log(baseClientes);
        //console.log(baseEmpleados);

        // Mapear nombres a IDs antes de enviar la solicitud
        const clientId = mapClientesToIds(formData['clientId'], baseClientes);
        const employeeId = mapEmpleadosToIds(formData['employeeId'], baseEmpleados);;
    
        // Modificar el formData con los IDs antes de enviar la solicitud
        const formDataWithIds: formData = {
          ...formData,
          clientId,
          employeeId,
        };
    
        // Hacer la solicitud y esperar a que la promesa se resuelva
        const response = await fetch('https://psa-soporte-1yfx.onrender.com/tickets', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formDataWithIds),
        });
    
        // Esperar a que se resuelva la promesa JSON
        const responseData = await response.json();
    
        // Imprimir los datos después de que la promesa se haya resuelto
        console.log(responseData);
    
        // Retornar los datos
        return responseData;
      } catch (error) {
        // Manejar errores aquí
        console.error(error);
      }
    };


    return (

        <div style={estiloRectangulo}>
            {/* Contenido del rectángulo */}
            <h1 style = {{position: 'absolute', color: 'black',top: '3%', left: '3%', fontSize: '36px',  fontWeight: 'bold'}}>Crear Ticket</h1>
            <ListBox label = 'Cliente' onChange={(value) => handleFieldChange('clientId', value)} opciones = {nombres_clientes} style = {{position: 'absolute', top: '13%', left: '33%'}}/>
            <TextBox label = 'Título' onChange={(value) => handleFieldChange('title', value)} description = 'Indique el título del Ticket' style = {{position: 'absolute', top: '13%', left: '3%'}}/>
            <TextBox label = 'Descripción' onChange={(value) => handleFieldChange('description', value)} description = 'Indique la descripción del Ticket' style = {{position: 'absolute', top: '13%', left: '70%'}}/>
            <ListBox label = 'Estado' onChange={(value) => handleFieldChange('status', value)} opciones = {['No comenzado', 'En proceso', 'Bloqueado', 'Completado']} style = {{position: 'absolute', top: '33%', left: '3%',fontSize:'17px'}}/>
            <ListBox label = 'Severidad' onChange={(value) => handleFieldChange('severity', value)}  opciones = {['S1', 'S2', 'S3', 'S4']} style= {{position: 'absolute', top:'33%', left: '25%',fontSize:'17px'}}/>
            <ListBox label = 'Prioridad' onChange={(value) => handleFieldChange('priority', value)} opciones = {['Baja', 'Media', 'Alta']} style = {{position: 'absolute', top: '33%', left: '46%',fontSize:'17px',width:'30vh'}}/>
            <ListBox label = 'Producto' onChange={(value) => handleFieldChange('product', value)} opciones = {['SiuGuarani', 'SiuTehuelche', 'SiuDiaguita',"SiuKolla"]} style = {{position: 'absolute', top: '47%', left: '25%',fontSize:'17px',width:'30vh'}}/>
            <ListBox label = 'Versión del producto' onChange={(value) => handleFieldChange('version', value)} opciones = {['v1', 'v2', 'v3']} style = {{position: 'absolute', top: '47%', left: '46%',fontSize:'17px',width:'40vh'}}/>
            <ListBox label = 'Empleado asignado' onChange={(value) => handleFieldChange('employeeId', value)} opciones = {nombres_empleados} style = {{position: 'absolute', top: '47%', left: '3%',fontSize:'17px',width:'30vh'}}/>
            <Boton label = 'Crear el ticket' funcion = {handleCrearTicket} style = {{position: 'absolute', width: '170px', backgroundColor: '#9BBEC8',color: 'black',padding: '20px', border: 'none', borderRadius: '10px', cursor: 'pointer',display: 'flex',alignItems: 'left',justifyItems:'left',top: '79%', left: '75%'}} />
            
            <h3 style = {{position: 'absolute', color: 'black',top: '31%', left: '70%', fontSize: '22px',  fontWeight: 'bold'}}>Seleccionar Fecha</h3>
            
            <div style =  {{position: 'absolute', top: '54%', left: '69%'}}>
              <label htmlFor="finishDate" style={{fontWeight: 'bold', color: 'black'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label={"Fecha finalizacion estimada"}
                    openTo="year"
                    views={['year', 'month', 'day']}
                    onChange={(newValue: Dayjs | null) => {
                        setFinishDate(newValue);
                        if (newValue != null){
                          handleFieldChange('estimatedClosingDate', newValue.format('YYYY-MM-DD'));
                        }
                      }
                    }                  
                  />
                </LocalizationProvider>
              </label>
            </div>
        </div>
    ); 
};

// <TextBox label = 'Cliente' description = 'Indique el cliente al que se debe el ticket' style = {{position: 'absolute', top: '15%', left: '50%'}}/>
// <TextBox label = 'Nombre' description = 'Indique el nombre del cliente' style = {{position: 'absolute', top: '15%', left: '50%'}}/>
// <ListBox label = 'Tarea/s Asociada/s' onChange={(value) => handleFieldChange('TareasAsociadas', value)} opciones={['hola', 'como', 'estas']} style={{ position: 'absolute', fontSize: '17px', width: '80vh',top:'65%',left:'3%'}} />


export default RectanguloConBorde;