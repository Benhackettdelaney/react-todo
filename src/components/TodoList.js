import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let initialist = [
    { id: 1, text: "Clean the office", done: true },
    { id: 2, text: "Eat ceral", done: false },
    { id: 3, text: "Do React shtuff", done: false },
  ];

  const [list, setList] = useState(initialist);
  const [textInput, setTextInput] = useState("");

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const addTodoItem = () => {
    let newTodo = {
      id: list[list.length - 1].id + 1,
      text: textInput,
      done: false,
    };

    setList((prevList) => [...prevList, newTodo]);
    setTextInput("");
  };

  const markAsDone = (id) => {
    const newList = list.map((item) => {
        if(item.id === id){
            item.done = true;
        }
        
        return item;
    });

    setList(newList);
  };

  const getOutLad = () => {

  };

  const todoItems = list.map((item) => {
    return <TodoItem key={item.id} todo={item} markAsDone={markAsDone}/>;
  });

  return (
    <Card>
      <Card.Header>To Do List</Card.Header>

      <Card.Body>
        <ListGroup>{todoItems}</ListGroup>
      </Card.Body>

      <Card.Footer>
        <input type="text" onChange={handleTextInput} value={textInput} />
        <Button variant="primary" className="float-end" onClick={addTodoItem}>
          Add
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TodoList;
