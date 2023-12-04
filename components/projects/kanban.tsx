import { Status, Task } from '@/types/types';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ButtonKanban from '../buttonKanbanVer';

function generarColorAleatorioConTransparencia() {
  const componenteColor = () => Math.floor(Math.random() * 256);

<<<<<<< HEAD
  const colorRojo = componenteColor();
  const colorVerde = componenteColor();
  const colorAzul = componenteColor();

  // Utiliza rgba para especificar el color con transparencia
  const colorRGBA = `rgba(${colorRojo}, ${colorVerde}, ${colorAzul}, 0.2)`;

  return colorRGBA;
}
=======
  return (
  
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="LIST">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {Object.entries(taskLists).map(([status, taskList], index) => (
              <div key={status} className="list-container">
                <h3>{status}</h3>
                <Droppable droppableId={status} index={index} type="CARD">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="card-list"
                    >
                      {taskList.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="card"
                            >
                              {task.name}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
);
                   
    
};
>>>>>>> d3dda301fedd172a7ec36ff2dcdaf8086d65e627

export default function KanbanRow({ task }: {task: Task}) {
  const router = useRouter();
  const {id} = router.query;

  function handleButtonClick() {
      router.push(`/projects/${task.projectId}/tasks/${task.id}`)
  }
    
  return (
      <>       
          
          <a href="#" style={{background: generarColorAleatorioConTransparencia()}} className="block max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex flex-row border-x-black "> 
                  <div className="flex items-center text-gray-900">{task['name']}</div>
                  <div className="px-6 py-4 whitespace-no-wrap  border-gray-200">
                        <div ><ButtonKanban  onClickHandler={handleButtonClick} /></div>
                  </div>
              </div>
          </a>

          </>
  )
}


