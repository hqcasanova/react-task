let count = -1;

const STATUSES = JSON.parse(process.env.REACT_APP_CLIENT_STATUSES || '');

export type Priority = 'high' | 'medium' | 'low';
export type Status = typeof STATUSES[number];

export default class {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  progress: number;

  constructor({
    title = 'Task',
    priority = 'low' as Priority,
    status = 'To Do' as Status,
    progress = 0,
  }, id?: string) {
    count++;
    this.id = id || count.toString();
    this.title = title;
    this.priority = priority;
    this.status = status;
    this.progress = progress;
  }
}
