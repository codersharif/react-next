import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "../contexts/TasksContext";
import { nextTaskId } from "../utils/nextTaskId";

export default function AddTask() {
  const [text, setText] = useState("");
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text: text,
            id: nextTaskId(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
