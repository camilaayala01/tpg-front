export interface Usuario {
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