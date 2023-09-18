import React from 'react';
// @ts-ignore
import styles from "./Modal.module.css"
import {ModalPropsType} from "./Modal.props";
import Button from "../Button/Button";


const Modal = ({onClose, modalFlag, title}: ModalPropsType) => {
    return (
        <div onClick={onClose} className={styles.modal}>
            <div className={styles.modal__content} onClick={event => event.stopPropagation()}>
                {<h1>{title}</h1> ||  <h1>No title</h1>}
                <Button buttonClick={onClose} buttonClass={`button__primary`} title={"Close"}/>
            </div>
        </div>
    );
};

export default Modal;