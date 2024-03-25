import React, { useState } from "react";

interface Todo {
  todo: string;
}

const AddTodo: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addTodoHandler = () => {
    setTodos([...todos, { todo: name }]);
    setName(''); 
  };

  const removeTodoHandler = (index: number) => {
    setTodos(prevTodos => prevTodos.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <>
      <h1>AddTodo</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter your Todo"
        value={name}
        onChange={onChangeHandler}
      />
      <button onClick={addTodoHandler}>Add</button>
      <div>
        {todos.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.todo}</h1>
              <button onClick={() => removeTodoHandler(index)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AddTodo;
