import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const TodoItem = (props) => {
    
  let itemHTML = (
    <>
      {props.todo.text}
      <Badge onClick={() => props.markAsDone(props.todo.id)} pill bg="success" className="float-end">
        &#10003;
      </Badge>
    </>
  );
  if (props.todo.done) {
    itemHTML = (
      <>
        <span className="done">{props.todo.text}</span>
        <span className="float-end">👽</span>
      </>
    );
  }

  return (
    <>
      <ListGroup.Item>{itemHTML}</ListGroup.Item>
    </>
  );
};

export default TodoItem;
