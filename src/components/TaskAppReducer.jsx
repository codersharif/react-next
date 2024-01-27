import TasksProvider from "../contexts/TasksContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./taskApp.css";
export default function TaskAppReducer() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
