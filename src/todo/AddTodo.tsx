import React, { useState } from "react";
import Popup from "../components/Popup";

interface Todo {
  id: number;
  text: string;
}

const AddTodo: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addTodoHandler = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: name,
    };
    setTodos([...todos, newTodo]);
    setName("");
  };

  const removeTodoHandler = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <>
      <h1>AddTodo</h1>
      <input
        type="text"
        name="name"
        placeholder="Todo"
        value={name}
        onChange={onChangeHandler}
      />
      <button onClick={addTodoHandler}>Add</button>
      <div>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <h1>{item.text}</h1>
              <button onClick={() => removeTodoHandler(index)}>Remove</button>
            </div>
          );
        })}
      </div>
      <Popup/>
    </>
  );
};

export default AddTodo;
