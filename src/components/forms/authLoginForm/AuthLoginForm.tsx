import React, {useRef, useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {IAuthFrom} from "../../../models";

const DEFAULT_FORM_DATA: IAuthFrom = {
    login: "",
    password: "",
}

const AuthLoginForm = () => {
    const onButtonClick = () => {
        console.log(targetElementRef.current?.focus())
    }
    const targetElementRef = useRef<HTMLInputElement | null>(null);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }
    const [formData, setFormData] = useState<IAuthFrom>(DEFAULT_FORM_DATA)
    const updateValue = (nameValue: keyof IAuthFrom, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [nameValue]: value
        }))
    }
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input ref={targetElementRef} type={"text"}/>
                <Input
                    type={"text"}
                    placeholder={"Login"}
                    value={formData.login}
                    updateValue={(val) => updateValue("login", val)}
                />
                <Input
                    type={"text"}
                    placeholder={"Password"}
                    value={formData.password}
                    updateValue={(val) => updateValue("password", val)}
                />
                <Button buttonClass={"button__primary"} type={"submit"}/>
                <button onClick={onButtonClick}>Click</button>
            </form>
        </div>
    );
};

export default AuthLoginForm;
