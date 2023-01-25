import { Fragment } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import style from './Modal.module.css';
import ReactDOM from 'react-dom';

const Modal = (props) => {

  const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onConfirm}/>
  }  


  const ModalOverlay = (props) => {
    return (
      <Card className={style.modal}>
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
    )
  } 

  return (
    <Fragment>
      {ReactDOM.createPortal(
         <Backdrop onConfirm={props.onConfirm}/>,
         document.getElementById('backdrop-root')
      )}
     {ReactDOM.createPortal(
         <ModalOverlay onConfirm={props.onConfirm}
         title={props.title}
         message={props.message}
         />,
         document.getElementById('modal-root')
      )}
      
    </Fragment>
  );
}

export default Modal;
