export interface Employee {
  Nombre: string
  Apellido: string
  legajo: number
}

export interface Cliente {
  id: string
  'razon social': string
  CUIT: number
}

export interface Project
{
  id: number;
  name: string;
  description: string;
  status: string
  creationDate: string;
  startDate: string;
  finishDate: string;
  projectLeaderId: number;
}

export interface Task
{
  id: number;
  projectId:number;
  name: string;
  description: string;
  status: string;
  priority: string;
  estimatedDuration: number;
  creationDate: string;
  startDate: string;
  finishDate: string;
}


export type ProductVersion = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  versions: ProductVersion[];
};

// export type Status = "Abierto" | "Cerrado"

export type Ticket = {
  id: number;
  status: string;
  name: string;
  description: string;
  severity: string;
  priority: string;
  // employees: number[];
  // tasks: number[];
  creationDate: string;
  deadline: string;
  // lastEditionDate: string;
  client: string; // despues vemos de pasarlo a que sea el id (number)
};
