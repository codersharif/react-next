import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./taskApp.css";
export default function TaskApp() {
  const [tasks, setTask] = useState(initialTasks);

  const nextTaskId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0
    );

    return maxId + 1;
  };

  const handleTaskAdd = (text) => {
    setTask([
      ...tasks,
      {
        id: nextTaskId(tasks),
        text,
        done: false,
      },
    ]);
  };

  const handleTaskChange = (task) => {
    setTask(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };
  const handleTaskDeleted = (taskId) => {
    setTask(tasks.filter((t) => t.id !== taskId));
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
