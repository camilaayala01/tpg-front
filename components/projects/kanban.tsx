import { Status, Task } from '@/types/types';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import MyButton from './viewButton';

/*
const KanbanBoard = ({tasks}: { tasks : Task[] }) => {
    const [taskLists, setTaskLists] = useState<{
        [Status.NOT_STARTED]: Task[];
        [Status.IN_PROGRESS]: Task[];
        [Status.COMPLETED]: Task[];
        [Status.BLOCKED]: Task[];
    }>({
        [Status.NOT_STARTED]: [],
        [Status.IN_PROGRESS]: [],
        [Status.COMPLETED]: [],
        [Status.BLOCKED]: [],
    });
    
    useEffect(() => {
        // Actualiza las listas de tareas cuando cambian las tareas
        const updatedTaskLists = {
        [Status.NOT_STARTED]: [] as Task[],
        [Status.IN_PROGRESS]: [] as Task[],
        [Status.COMPLETED]: [] as Task[],
        [Status.BLOCKED]: [] as Task[],
        };
    
        tasks.forEach((task) => {
        updatedTaskLists[task.status];
        });
    
        setTaskLists(updatedTaskLists);
    }, [tasks]);

  const onDragEnd = (result) => {
    // Lógica para actualizar el orden de las tarjetas después de arrastrar y soltar
    // Puedes gestionar el estado aquí y realizar las actualizaciones necesarias
  };

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

*/
export default function KanbanRow({ task }: {task: Task}) {
  const router = useRouter();
  const {id} = router.query;

  function handleButtonClick() {
      router.push(`/projects/${task.projectId}/tasks/${task.id}`)
  }
    
  return (
      <>       
          <h2>To Do</h2>
          <div className="flex flex-row">
              <div className="px-6 py-4 whitespace-no-swrap border-b border-gray-200">
                <div className="flex items-center text-gray-900">{task['name']}</div>
              </div>

              <div className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900"><MyButton onClickHandler={handleButtonClick} /></div>
              </div>
          </div>
           

          </>
  )
}


