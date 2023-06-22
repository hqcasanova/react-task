import { useReducer } from 'react';

import TASKLIST from 'models/TaskList';
import Task from 'models/Task';

const STATUSES = JSON.parse(process.env.REACT_APP_CLIENT_STATUSES || '');

enum ActionType {
  UPDATE_STATUS = 'update_status',
  DELETE_TASK = 'delete_task',
}
type Action = {
  type: ActionType,
  payload: Partial<Task>,
}

const reducer = (tasks: Task[], action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_STATUS:
      return tasks.map((task: Task) => {
        if (task.id === action.payload.id) {
          const currIndex = STATUSES.indexOf(task.status || '');
          const nextIndex = (currIndex + 1) % STATUSES.length;
          const nextStatus = STATUSES[nextIndex];

          let nextProgress = 50;
          if (nextStatus === 'To Do') {
            nextProgress = 0;
          } else if (nextStatus === 'Done') {
            nextProgress = 100;
          }

          return { ...task, status: nextStatus, progress: nextProgress };
        }

        return task;
      });

    case ActionType.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.payload.id);

    default:
      return tasks;
  }
};

function useTasks() {
  const [tasks, dispatch] = useReducer(reducer, TASKLIST);

  const nextStatus = (id: string) => {
    dispatch({ type: ActionType.UPDATE_STATUS, payload: { id } });
  };
  const deleteTask = (id: string) => {
    dispatch({ type: ActionType.DELETE_TASK, payload: { id } });
  };

  return {
    tasks,
    nextStatus,
    deleteTask,
  };
}

export default useTasks;
