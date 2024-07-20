import { useEffect, useState } from "react";
import TodoInputComponent from "./assets/components/TodoInputComponent";
import TodoTaskComponent from "./assets/components/TodoTaskComponent";

function App() {
  const [todoTask, setTodoTask] = useState([]);

  useEffect(() => {
    
  }, [todoTask]);

  return (
    <div className="container">
      <h1 className="title">To Do App</h1>
      <TodoInputComponent todoTask={todoTask} setTodoTask={setTodoTask} />
      <TodoTaskComponent todoTask={todoTask} />
    </div>
  );
}

export default App;
