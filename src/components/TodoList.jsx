import React, { useState } from 'react';

import { TodoListItem } from './TodoListItem';

const tasks = [
  {
    id: 1,
    name: "fazer algo 1",
    status: "pending",
  },
  {
    id: 2,
    name: "fazer algo 2",
    status: "pending",
  },
  {
    id: 3,
    name: "fazer algo 3",
    status: "pending",
  },
  {
    id: 4,
    name: "fazer algo 4",
    status: "pending",
  },
];

export const TodoList = () => {
  const [taskItems, setTaskItems] = useState(tasks);

  const handleOnToggleCompleted = (taskId, event) => {
    const newTask = taskItems.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: event.target.checked ? "completed" : "pending",
        };
      }

      return task;
    });

    setTaskItems(newTask);
  };

  return (
    <div>
      <ul>
        {taskItems.map((task) => (
          <li key={task.id}>
            <TodoListItem
              onToggleCompleted={handleOnToggleCompleted}
              taskId={task.id}
              status={task.status}
              taskName={task.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
