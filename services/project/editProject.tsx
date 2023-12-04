import { Project } from "@/types/types";
import { Dayjs } from "dayjs";

async function editData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  console.log(JSON.stringify(data));
  console.log(responseData);

  return responseData;
}

export default async function editProject(
  projectId: number,
  name: string,
  description: string,
  status: string,
  leaderId: string,
  estimatedFinishDate?: Dayjs | null
) {
  try {
    const data = await editData(`https://psa-proyecto.onrender.com/projects/${projectId}`, {
      name: name,
      description: description,
      status: status,
      estimatedFinishDate: estimatedFinishDate?.format("YYYY-MM-DD") ?? null,
      leaderId: leaderId,
    });

    return data;
  } catch (error) {
    console.error('Error en la edición del proyecto:', error);
    throw error; // Puedes decidir si quieres relanzar el error o manejarlo de otra manera
  }
}
