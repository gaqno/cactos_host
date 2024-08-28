import React from "react";

export function ToDoForm({ 
  addTask,
  deleteTask,
}: { 
  addTask: () => void
  deleteTask: ({ id }: any) => void
}) {
  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}