import ListGroup from "react-bootstrap/ListGroup";

const TodoItem = (props) => {
  
    return(
        <>
        <ListGroup.Item >
            {props.todo.text}, This is a task
        </ListGroup.Item>
      
           </>
    );
};

export default TodoItem;