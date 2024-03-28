import React, { useState } from "react";
import Popup from "../components/Popup";
import { Box, Button, Text, TextInput, Title } from "@mantine/core";

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
    <Box>
      <Title>AddTodo</Title>
      <TextInput
        type="text"
        name="name"
        placeholder="Todo"
        value={name}
        onChange={onChangeHandler}
        w={500}
      />
      <Button onClick={addTodoHandler}>Add</Button>
      <Box>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <h1>{item.text}</h1>
              <Button onClick={() => removeTodoHandler(index)}>Remove</Button>
            </div>
          );
        })}
        <Popup />
      </Box>

      <Box>
        <TextInput
          w={300}
          placeholder="Your name"
          label={
            <Text
              sx={{
                color: "orange",
              }}
            >
              FullName:
            </Text>
          }
          sx={{
            input: {
              backgroundColor: "#fcd0d0",
              border: "none",
            },
          }}
        />
        <br />
        <TextInput
          w={300}
          placeholder="disabled input"
          disabled
          sx={{
            background: "#FAA0A0",
            borderRadius: "6px",
            input: {
              border: "none",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AddTodo;
