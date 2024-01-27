import { useReducer } from "react";
import TaskReducer from "../../reducers/TaskReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./taskApp.css";
export default function TaskAppReducer() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  const nextTaskId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0
    );

    return maxId + 1;
  };

  const handleTaskAdd = (text) => {
    // action object
    dispatch({
      type: "added",
      text: text,
      id: nextTaskId(tasks),
    });
  };

  const handleTaskChange = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };
  const handleTaskDeleted = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onTaskChange={handleTaskChange}
        onTaskDeleted={handleTaskDeleted}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
