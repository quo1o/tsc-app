import React, {ChangeEvent} from 'react';
// @ts-ignore
import styles from "./Input.module.css";
import {IInputProps} from "./Input.props";

const Input = ({value, type, placeholder, updateValue}: IInputProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value
        updateValue(val);
    }

    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
        />
    );
};

export default Input;