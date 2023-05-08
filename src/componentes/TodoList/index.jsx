import { useState } from "react";
import { Task } from "../Task";
import AddTaskForm from "../AddTaskForm";

function TodoList() {
  const [tasks, setTasks] = useState([
    { name: "Comprar leite", completed: false },
    { name: "Pagar a conta de luz", completed: false },
    { name: "Ler um livro", completed: true },
  ]);

  function handleTaskCompletion(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    // setTasks(newTasks);
  }

  function handleNewTaskSubmit(event) {
    event.preventDefault();
    const newTasks = { name: event.target.taskName.value, completed: false };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            completed={task.completed}
            onCompletion={() => handleTaskCompletion(index)}
          />
        ))}
      </ul>
      <AddTaskForm onSubmit={handleNewTaskSubmit} />
    </div>
  );
}

export { TodoList };
