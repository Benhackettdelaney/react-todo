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
  const [textInput, setTextInput] = useState('');

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  }

  const todoItems = list.map((item) => {
    return <TodoItem key={item.id} todo={item} />;
  });

  return (
    <Card>
      <Card.Header>To Do List</Card.Header>

      <Card.Body>
        <ListGroup>{todoItems}</ListGroup>
      </Card.Body>

      <Card.Footer>
        <input type ='text' onChange = {handleTextInput} value = {textInput}/>
        <Button variant="primary" className="float-end">
          Add
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TodoList;
