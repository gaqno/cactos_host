import { useToDoer } from "../ToDoer/hooks/useToDoer";
import { SpeedDial } from "primereact/speeddial";
import { Tooltip } from "primereact/tooltip";
import { ToDoer } from "../ToDoer/ToDoer";

export function Fab() {
  const { tasks, addTask, deleteTask, isOpen, toggleDialog } = useToDoer();
  const items = [
    {
      label: 'Tarefas',
      icon: 'pi pi-check',
      command: () => {
        console.log('Tarefas');
        toggleDialog();
      }
    },
    {
      label: 'Assistente',
      icon: 'pi pi-chat',
      command: () => {
      }
    }
  ];

  return (
    <div className="absolute bottom-0 right-0">
      <Tooltip target=".speeddial-bottom-right .p-speeddial-action" />
      <SpeedDial 
        model={items} 
        direction="up" 
        className="speeddial-bottom-right right-2 bottom-0" 
        buttonClassName="p-button-help" />
      <ToDoer 
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        isOpen={isOpen}
        toggleDialog={toggleDialog} />
    </div>
  );
}