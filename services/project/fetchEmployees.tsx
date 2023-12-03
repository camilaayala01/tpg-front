import { Employee } from "@/types/types";

async function getEmployees(): Promise<Employee[]> {
  try {
    const response = await fetch('https://psa-proyecto.onrender.com/employees');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener empleados:', error);
    throw error; 
  }
}

export default async function fetchEmployees(): Promise<Employee[]> {
  return await getEmployees();
}