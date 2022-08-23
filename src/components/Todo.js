import React from "react";
import "../components/todo.css";
import { useState, useRef } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const storage = JSON.parse(localStorage.getItem("todos"));
    return storage ?? [];
    // "??" : if the first param is null or undefined, it will recieve
    //the value of the second param
  });
  const [input, setInput] = useState("");

  const inputContainer = useRef();
  const handleSubmit = () => {
    if (input) {
      setTodos((prev) => {
        const todoItems = [...prev, input];
        const jsonTodoItem = JSON.stringify(todoItems);
        localStorage.setItem("todos", jsonTodoItem);

        return todoItems;
      });
    } else if (!input) {
      alert("Write your task in your To Do");
    }
    setInput("");
    inputContainer.current.focus();
  };

  //Delete todo item
  const handleDelete = (index) => {
    setTodos((prev) => {
      const toDoList = [...prev];
      toDoList.splice(index, 1);

      const jsonDeleteItem = JSON.stringify(toDoList);
      localStorage.setItem("todos", jsonDeleteItem);
      return toDoList;
    });
  };
  // FIXME color random
  // const colors = ["#FF7C7C", "#9ED2C6", "#D36B00", "#F94892"];
  // const randColor = colors[Math.floor(Math.random() * colors.length)];
  // console.log(randColor);
  // const itemBackground = {
  //   backgroundColor: ",
  // };

  return (
    <div className="todo-container">
      <div className="todo">
        <input
          ref={inputContainer}
          value={input} // Need this line to reset Input
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={() => handleSubmit()} className="todo-btn">
          Submit
        </button>
      </div>

      <ul className="todo-display">
        {todos.map((todo, index) => (
          <ul key={index} className="todo-item">
            <ion-icon className="arrow-icon" name="arrow-redo-sharp"></ion-icon>
            <li className="todo-action">{todo}</li>
            {/* FIXME todo line-through bug */}
            <div onClick={() => handleDelete(index)} className="eye-icon">
              <ion-icon name="eye"></ion-icon>
            </div>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
