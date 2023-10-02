import React, {ChangeEvent, ForwardedRef, forwardRef} from 'react';
// @ts-ignore
import styles from "./Input.module.css";
import {IInputProps} from "./Input.props";


const Input = forwardRef(({value, type, placeholder, updateValue, ...props}: IInputProps, ref:ForwardedRef<HTMLInputElement>) => {
    // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const val = event.target.value
    //     updateValue(val);
    // }

    return (
        <input
            ref={ref}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            {...props}
            // value={value}
            // onChange={handleInputChange}
        />
    );
})

export default Input;