import { Status, Task } from '@/types/types';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ButtonKanban from '../buttonKanbanVer';
import { Stack } from '@mui/material';

function generarColorAleatorioConTransparencia() {
  const componenteColor = () => Math.floor(Math.random() * 256);

  const colorRojo = componenteColor();
  const colorVerde = componenteColor();
  const colorAzul = componenteColor();

  // Utiliza rgba para especificar el color con transparencia
  const colorRGBA = `rgba(${colorRojo}, ${colorVerde}, ${colorAzul}, 0.2)`;

  return colorRGBA;
}

export default function KanbanRow({ task }: {task: Task}) {
  const router = useRouter();
  const {id} = router.query;

  function handleButtonClick() {
      router.push(`/projects/${task.projectId}/tasks/${task.id}`)
  }
    
  return (
      <>       
          
          <a href="#" style={{background: generarColorAleatorioConTransparencia() ,marginBottom:10, marginTop:10}}  className="block max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex flex-row border-x-black justify-between" > 
                  <div className="px-5 py-4 whitespace-no-wrap  border-gray-200">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <div className="flex text-gray-900">{task['name']}</div>
                    <div ><ButtonKanban  onClickHandler={handleButtonClick} /></div>
                  </Stack>
                  </div>
              </div>
          </a>

          </>
  )
}


