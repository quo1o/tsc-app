import React, {useRef, useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {IAuthFrom} from "../../../models";
import { useForm } from "react-hook-form"

const DEFAULT_FORM_DATA: IAuthFrom = {
    login: "",
    password: "",
}

const AuthLoginForm = () => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IAuthFrom>({defaultValues: DEFAULT_FORM_DATA});
    const onSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        console.log(event)
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
            <form onSubmit={handleSubmit(onSubmit)} >

                <Input
                    {...register("login", {required: {value: true, message: "Blin"}})}
                    type={"text"}
                    placeholder={"Login"}
                    errors={errors.login}
                    //value={formData.login}
                    // updateValue={(val) => updateValue("login", val)}
                />
                <Input
                    {...register("password", {required: {value: true, message: "Blin"}})}
                    type={"text"}
                    placeholder={"Password"}
                    errors={errors.password}
                    // value={formData.password}
                    // updateValue={(val) => updateValue("password", val)}
                />
                <Button buttonClass={"button__primary"} type={"submit"}/>
            </form>
        </div>
    );
};

export default AuthLoginForm;
