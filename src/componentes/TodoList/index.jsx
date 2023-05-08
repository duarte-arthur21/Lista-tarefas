import { useState } from "react";
import { Task } from "../Task";
import AddTaskForm from "../AddTaskForm";

function TodoList() {
  const [inputValue, setInputValue] = useState([
    { name: "", completed: false },
  ]);
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

  function handleInputChange(event) {
    // setTasks({ ...tasks, name: event.target.value, completed: false });
    setInputValue(event.target.value);
  }

  function handleNewTaskSubmit(event) {
    event.preventDefault();
    const newTasks = [{ name: event.target.value, completed: false }];
    setTasks([...tasks, newTasks]);

    console.log("O valor do input é:", inputValue);
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
      <AddTaskForm
        value={inputValue.name}
        onChange={handleInputChange}
        onSubmit={handleNewTaskSubmit}
      />
    </div>
  );
}

export { TodoList };
