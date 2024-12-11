import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./todo";
import Header from "./header";
import "../Css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="main">
    <React.StrictMode>
      <Header />
      <Todo />
    </React.StrictMode>
  </div>
);
