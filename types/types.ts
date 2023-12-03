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
  status: Status;
  priority: string;
  estimatedDuration: number;
  creationDate: string;
  startDate: string;
  finishDate: string;
}

export enum Status {
  IN_PROGRESS = "In progress",
  NOT_STARTED = "Not started",
  COMPLETED = "Completed",
  BLOCKED = "Blocked",
}

export enum Priority {
  HIGH = "High",
  LOW = "Low",
  MEDIUM = "Medium",
}

export const getStatusToString = (status: string): string | undefined => {

  switch (status) {
    case "IN_PROGRESS":
      return "In progress";
    case "COMPLETED":
      return "Completed";
    case "NOT_STARTED":
      return "Not started";
    case "BLOCKED":
      return "Blocked";
    case "HIGH":
      return "High"
    case "LOW":
      return "Low"
    case "MEDIUM":
      return "Medium"
    case undefined: 
      return undefined;
  }
};

export const getStringToStatus = (status: string): string | undefined => {

  switch (status) {
    case "IN_PROGRESS":
      return Status.IN_PROGRESS;
    case "COMPLETED":
      return Status.COMPLETED;
    case "NOT_STARTED":
      return Status.NOT_STARTED;
    case "BLOCKED":
      return Status.BLOCKED;
    case undefined: 
      return undefined;
  }
};

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
  tasks: number[];
  creationDate: string;
  deadline: string;
  // lastEditionDate: string;
  client: string; // despues vemos de pasarlo a que sea el id (number)
};
