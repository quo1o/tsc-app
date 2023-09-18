import React from 'react';

// @ts-ignore
import styles from "./Button.module.css";
import {IButtonProps} from "./Button.props";
const Button = ({buttonClass, type, buttonClick, title}: IButtonProps) => {
    return (
        <button className={`button ${styles[buttonClass]}`}
                type={type || "button"}
                onClick={buttonClick}
        >
            {title || "No title"}
        </button>
    );
};

export default Button;