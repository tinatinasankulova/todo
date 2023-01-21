import Button from '../button/Button';
import Card from '../card/Card';
import style from './Modal.module.css';

const Modal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm}/>
      <Card className={style.modal} >
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Modal;
