export const TodoListItem = ({
  onToggleCompleted,
  taskId,
  status,
  taskName,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => onToggleCompleted(taskId, event)}
        id={taskId}
      />
      <label
        for={taskId}
        style={{
          textDecoration: status === "completed" ? "line-through" : "none",
          background: status === "completed" ? "#56ff00" : "#ffbc00",
        }}
      >
        Tarefa: {taskName}
      </label>
    </div>
  );
};
