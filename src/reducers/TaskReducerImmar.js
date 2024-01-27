export default function TaskReducerImmar(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "changed": {
      let index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
