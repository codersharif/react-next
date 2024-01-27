import { useState } from "react";

export default function Task({ task, onTaskChange, onTaskDeleted }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onTaskChange({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  const handleAction = () => {};

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onTaskChange({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button onClick={() => onTaskDeleted(task.id)}>Delete</button>
    </label>
  );
}
