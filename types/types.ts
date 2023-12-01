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

import React from "react";

// Definición del Enum
enum Status {
  IN_PROGRESS,
  NOT_STARTED,
  COMPLETED,
  BLOCKED,
}

const getStatusFromString = (statusString: string): Status | undefined => {
  const lowercaseStatusString = statusString.toLowerCase();

  switch (lowercaseStatusString) {
    case "In progress":
      return Status.IN_PROGRESS;
    case "Completed":
      return Status.COMPLETED;
    case "Not started":
      return Status.NOT_STARTED;
    case "Blocked":
      return Status.BLOCKED;
    default:
      return undefined;
  }
};
