import { useState } from "react";
import "../../styles/todoinput.scss";

function TodoInputComponent({ todoTask, setTodoTask }) {
  const [currentTask, setCurrentTask] = useState("");

  function handleTodoTask(e) {
    setTodoTask([...todoTask, {task: currentTask, id: new Date().getTime()}]); 
    setCurrentTask('')
  }

  function handleInputTask(e){
    setCurrentTask(e.target.value);
  }

  return (
    <div className="todoinput">
      <input
        onChange={(e) => handleInputTask(e)}
        className="todoinput_input"
        type="text"
        placeholder="Insert Your Task"
        value={currentTask}
      />
      <button onClick={handleTodoTask} className="todoinput_button">
        Add Task
      </button>
    </div>
  );
}

export default TodoInputComponent;
