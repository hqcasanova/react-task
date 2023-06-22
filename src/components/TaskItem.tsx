import { HTMLAttributes, ReactNode } from 'react';

import Task from '../models/Task';

import CircularProgressbar from './ui/CircularProgressbar';
import DeleteIcon from './ui/DeleteIcon';
import EditIcon from './ui/EditIcon';

import classes from './TaskItem.module.scss';

type PropType = {
  name?: string,
  className?: string,
  children: ReactNode,
};
type TaskPropType = PropType & HTMLAttributes<HTMLElement>;

function TaskProp({
  name = '',
  className = '',
  children,
}: TaskPropType) {
  const rootClasses = [
    classes.task__prop,
    ...className.split(' '),
  ];
  const rootClassName = rootClasses
    .map((cName) => classes[cName] || cName)
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClassName}>
      <dt className={classes.task__name}>{ name }</dt>
      <dd className={classes.task__value}>{ children }</dd>
    </div>
  );
}

type TaskItemType = {
  onToggleStatus: (id: string) => void,
  onDelete: (id: string) => void,
} & Task;

function TaskItem({
  id,
  title,
  priority,
  status,
  progress,
  onToggleStatus,
  onDelete,
}: TaskItemType) {
  const clickStatusHandler = () => {
    onToggleStatus(id);
  };

  const clickDeleteHandler = () => {
    onDelete(id);
  };

  return (
    <dl className={classes.task}>
      <TaskProp name='Task'>{ title }</TaskProp>
      <TaskProp
        name='Priority'
        className={classes[`task__prop--${priority}`]}
      >
        <p className={classes.task__priority}>{ priority }</p>
      </TaskProp>
      <TaskProp className={classes.task__status}>
        <button
          type='button'
          className={classes['task__prop--btn']}
          onClick={clickStatusHandler}
        >
          { status }
        </button>
      </TaskProp>
      <CircularProgressbar
        percentage={progress}
        className={`${classes.task__prop} ${classes.task__progress}`}
      />

      <div className={classes.task__actions}>
        <button
          type='button'
          className={classes.task__edit}
        >
          <EditIcon />
        </button>
        <button
          type='button'
          className={classes.task__delete}
          onClick={clickDeleteHandler}
        >
          <DeleteIcon />
        </button>
      </div>
    </dl>
  );
}

export default TaskItem;
