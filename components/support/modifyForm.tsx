import { FormEvent, useEffect, useRef, useState } from "react";
import TextBox from "@/components/projects/TextBox";
import ListBox from "@/components/support/ListBox";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import {Employee, Ticket, Status, getEnumToString, Priority} from "@/types/types";
import { useRouter } from "next/router";
import fetchEmployees from "@/services/project/fetchEmployees";
import DescriptionBox from "@/components/projects/DescriptionBox";
import editTicket from "@/services/support/editTicket";
import { supportFetcher } from "@/services/support/fetcher";

export default function ModifyForm({ ticket }: { ticket: Ticket }) {
  const [formData, setFormData] = useState({ title: ticket.title, description: ticket.description });
  const statusRef = useRef<HTMLSelectElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const [nombres_clientes, setNombresClientes] = useState<string[]>([]);
  const [baseClientes, setBaseClientes] = useState<any[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [closingDate, setclosingDate] = useState<Dayjs | null>(dayjs(ticket.closingDate, "YYYY-MM-DD"));
  const router = useRouter();

  const estiloRectangulo: React.CSSProperties = {
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    top: '18vh',
    left: '25vw'
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    fetchData();
  }, []);

  function handleClick() {
    router.push(`/tickets/${ticket.code}`);
  }

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

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    setclosingDate(dayjs(ticket.closingDate, "YYYY-MM-DD"));
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title || !formData.description || !closingDate || !statusRef.current?.value) {
      alert("Por favor, complete todos los campos.");
      return;
    } else {
      editTicket(ticket.code, formData.title, formData.description, ticket.priority, statusRef.current?.options[statusRef.current?.selectedIndex].value, closingDate);
    }
  };

  return (
      <>
        <div style={{ position: 'absolute', color: 'black', top: '10%', left: '25%', fontSize: '2em', fontWeight: 'bold', letterSpacing: 0.20 }}>Modificar Ticket</div>
        <form onSubmit={handleSubmit} >
          <div style={estiloRectangulo}>

            <TextBox label='Titulo' description='Indique el titulo del ticket' style={{ position: 'absolute', top: '1%', left: '1%' }} name="title" defaultValue={ticket.title} handleChange={handleChange} />

            <ListBox label='Cliente' onChange={(value) => handleFieldChange('clientId', value)} opciones={nombres_clientes} style={{ position: 'absolute', top: '20%', left: '1%' }} initialValue={ticket.description}/>

            <div style={{ position: 'absolute', top: '6%', left: '40%' }}>
              <label htmlFor="closingDate" style={{ fontWeight: 'bold', color: 'black' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                      label={"Fecha finalizacion estimada"}
                      openTo="year"
                      defaultValue={dayjs(ticket.closingDate, "YYYY-MM-DD")}
                      views={['year', 'month', 'day']}
                      onChange={(newValue: Dayjs | null) => setclosingDate(newValue)}
                  />
                </LocalizationProvider>
              </label>
            </div>

            <div style={{ position: 'absolute', top: '35%', left: '1%' }}>
              <label htmlFor="priority" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Prioridad</label>
              <select ref={priorityRef} style={{ position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666' }} defaultValue={ticket.priority}>
                {Object.keys(Priority).map((opcion) => (
                    <option value={opcion} key={opcion}>
                      {getEnumToString(opcion)}
                    </option>
                ))}
              </select>
            </div>

            <div style={{ position: 'absolute', top: '35%', left: '20%' }}>
              <label htmlFor="status" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Estado</label>
              <select ref={statusRef} style={{ position: 'absolute', top: '100%', left: '20%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666' }} defaultValue={ticket.priority}>
                {Object.keys(Status).map((opcion) => (
                    <option value={opcion} key={opcion}>
                      {getEnumToString(opcion)}
                    </option>
                ))}
              </select>
            </div>

            <div style={{ position: 'absolute', top: '48%', left: '1%' }}>
              <label htmlFor="status" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Estado</label>
              <select ref={statusRef} style={{ position: 'absolute', top: '100%', left: '1%', width: '200px', height: '40px', borderRadius: '12px', color: '#666666' }} defaultValue={ticket.status}>
                {Object.keys(Status).map((opcion) => (
                    <option value={opcion} key={opcion}>
                      {getEnumToString(opcion)}
                    </option>
                ))}
              </select>
            </div>

            <DescriptionBox label='Descripcion' description='Detalles del proyecto' style={{ position: 'absolute', top: '60%', left: '1%', width: '70%', height: '50%' }} name={"description"} defaultValue={ticket.description} handleChange={handleChange} />

            <button type="submit" className="buttonStyle" onClick={handleClick}>
              Aceptar
            </button>
          </div>
        </form>
      </>
  );
}
