import Task from 'models/Task';
import useTasks from 'hooks/useTasks';

import TaskItem from 'components/TaskItem';
import List from 'components/ui/List';

function App() {
  const { tasks, nextStatus, deleteTask } = useTasks();

  return (
    <List
      items={tasks}
      emptyItem={<strong>No tasks found</strong>}
    >
      { (item: Task) => (
        <TaskItem
          id={item.id}
          title={item.title}
          priority={item.priority}
          status={item.status}
          progress={item.progress}
          onToggleStatus={nextStatus}
          onDelete={deleteTask}
        />
      )}
    </List>
  );
}

export default App;
