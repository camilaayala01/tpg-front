import { Status, Task } from '@/types/types';
import { Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = ({tasks}: { tasks : Task[] }) => {

  function generarColorAleatorio() {
    const componenteColor = () => Math.floor(Math.random() * 256);
  
    const colorRojo = componenteColor();
    const colorVerde = componenteColor();
    const colorAzul = componenteColor();
  
    const colorHex = `#${colorRojo.toString(16)}${colorVerde.toString(16)}${colorAzul.toString(16)}`;
  
    return colorHex;
  }

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
      const updatedTaskLists = {
      [Status.NOT_STARTED]: [] as Task[],
      [Status.IN_PROGRESS]: [] as Task[],
      [Status.COMPLETED]: [] as Task[],
      [Status.BLOCKED]: [] as Task[],
      };
  
      tasks.forEach((task) => {
        if (task.status && Object.keys(updatedTaskLists).includes(task.status)) {
          updatedTaskLists[task.status].push(task);
        }
      });      
  
      setTaskLists(updatedTaskLists);
  }, [tasks]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={'10vw'}
    >
      
      {Object.entries(taskLists).map(([status, taskList]: [string, Task[]]) => (
        <div style={{color: 'rgba(146, 166, 197, 0.62)'}}>
        <h3>{status}</h3>
        <Stack>
            {taskList.map((task: Task) => (
              <div style={{position: 'relative', maxWidth: '80vw'}}>
                <h3 key={task.id}>{task.name}</h3>
              </div>
            ))}
        </Stack>
        </div>
      ))}

    </Stack>
  );
};

export default KanbanBoard;
