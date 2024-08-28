import { ToDoList } from "./components/ToDoList";
import { Dialog } from "primereact/dialog";

export function ToDoer({
  tasks,
  addTask,
  deleteTask,
  isOpen,
  toggleDialog
}) {

  return (
    <Dialog
      header="✅ Tarefas"
      visible={isOpen}
      position="bottom-right"
      modal={isOpen}
      onHide={toggleDialog}
    >
      <ToDoList
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask} />
    </Dialog>
  );
}