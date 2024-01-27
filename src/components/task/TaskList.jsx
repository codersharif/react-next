import Task from "./Task";

export default function TaskList({ tasks, onTaskChange, onTaskDeleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onTaskChange={onTaskChange}
            onTaskDeleted={onTaskDeleted}
          />
        </li>
      ))}
    </ul>
  );
}
