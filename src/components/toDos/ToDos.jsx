import { useState} from "react";
import Card from "../ui/card/Card";
import style from "./ToDos.module.css";

const ToDos = (props) => {
const [isChecked, setIsChecked] = useState(false);


const checkedInput = (event) => {
  const complited = event.target.checked
  
  if(complited) {
    setIsChecked(true)
  }
  if(!complited) {
    setIsChecked(false)
  }
}

  return (
    <Card className={style.wrapper}>
      <ul>
        {props.todos.map((todo) => {
          return (
            <div  key={todo.id} className={style.div} >
              <li key={todo.id} className={`${isChecked ? style.checked : ''}`} >
                <input type="checkbox" onChange={checkedInput} id={todo.id}/>
                  {todo.todo}     </li>
                <div className={style.date}>
                  {todo.date}
                </div>
            </div>
          );
        })}
      </ul>
    </Card>
  );
};

export default ToDos;
