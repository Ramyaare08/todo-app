import TaskItem from "./TaskItem.jsx";

export default function TaskList({ visibleTasks, toggleTask, deleteTask }) {
  return (
    <ul className="task-list">
      {visibleTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
