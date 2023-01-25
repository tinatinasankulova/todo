import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import style from "./ToDos.module.css";

const ToDos = (props) => {

  return (
    <Card className={style.wrapper}>
      {props.todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li
              className={todo.completed ? style["checked-todo"] : ""}
              onClick={() => props.toggle(todo.id)}
            >
              <input type="checkbox" id={todo.id} defaultChecked={todo.completed}  />
              {todo.todo}
              <div className={style.date}>{todo.date} </div>
            </li>
            <Button onClick={() => props.deleteItemHandler(todo.id)}>
              delete
            </Button>
          </ul>
        );
      })}
    </Card>
  );
};

export default ToDos;
