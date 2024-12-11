import { useState } from "react";
import "../Css/style.css";
import Display from "./display";

export default function Todo() {
  const [todo, setTodo] = useState(""); 
  const [todos, setTodos] = useState([]); 
  function handlesubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);

  }
   
  return (
    <div>
       <div>
        <form onSubmit={handlesubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button className="btn" type="Submit">
          Add
        </button>
      </form>
    </div>

      {todos.map((item) => (
        <Display key={item} item={item} /> //prop
      ))}
    </div>
  );
}
