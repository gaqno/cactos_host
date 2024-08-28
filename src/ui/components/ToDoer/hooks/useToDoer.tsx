import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface ToDoer {
  tasks: Task[];
  isOpen: boolean;
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  editTask: (task: Task) => void;
  completeTask: (task: Task) => void;
  toggleDialog: () => void;
  handleSubmit: any;
}

type Inputs = {
  example: string;
}

export function useToDoer(): ToDoer {
  const [tasks, setTasks] = useState([] as Task[]);
  const [isOpen, setIsOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }

    return () => {
      console.log('cleanup');
    }
  }, []);

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(task: Task) {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  function editTask(task: Task) {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          title: task.title
        };
      }
      return t;
    }))
  }

  function completeTask(task: Task) {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          completed: !t.completed
        };
      }
      return t;
    }))
  }

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return {
    tasks,
    isOpen,
    toggleDialog,
    addTask,
    deleteTask,
    editTask,
    completeTask,
    handleSubmit,
  };
}
