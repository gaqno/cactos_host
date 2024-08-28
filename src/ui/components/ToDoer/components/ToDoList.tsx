import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

export function ToDoList({ tasks, addTask, deleteTask }) {
  return (
    <div className="flex flex-col h-full gap-1 ">
      <Button
        icon="pi pi-plus"
        severity="danger"
        aria-label="Cancel"
        onClick={addTask}
        label="Adicionar"
      />

      <div className="overflow-y-auto h-[24em]">
        {tasks.map(task => (
          <div key={task.id} className="flex flex-row gap-1 justify-between items-center">
            <Checkbox checked={task.completed} />
            <InputText className="p-inputtext-sm" value={task.title} />
            <Button icon="pi pi-times" size="small" severity="danger" aria-label="Cancel" onClick={() => deleteTask(task)} />
          </div>
        ))}
      </div>
    </div>
  );
}