import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import {IFormData} from "./HomePage.model";

const DEFAULT_FORM_DATA: IFormData = {
    name: "das",
    lastName: "das",
}

type t = {
    name: string
    lastName: string
}

const HomePage = () => {
    const [isModalFlag, setIsModalFlag] = useState(false)
    const [formData, setFormData] = useState<IFormData>(DEFAULT_FORM_DATA)

    const updateValue = (nameValue: keyof t, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [nameValue]: value
        }))
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }
    const closeModal = (): void => {
        setIsModalFlag((prevState: boolean) => (!prevState))
    }
    const linkStyles = {
        marginLeft: 20
    }
    return (
        <div>
            <header>
                <nav>
                    <NavLink  to={"/login"} style={({isActive}) => ({...linkStyles, color: isActive ?'green' : 'red'})}>LoginPage</NavLink>
                    <NavLink  to={"/"} style={({isActive}) => ({...linkStyles, color: isActive ?'green' : 'red'})}>MainPage</NavLink>

                </nav>
            </header>
            <button onClick={closeModal}>Open</button>
            <div>
                {isModalFlag &&
                    <Modal onClose={closeModal} modalFlag={true } title={"Modal"}/>
                }
            </div>
            <form onSubmit={onSubmit} >
                <Input
                    type={"text"}
                    placeholder={"Name"}
                    value={formData.name}
                    updateValue={(val) => updateValue("name", val)}
                />
                <Input
                    type={"text"}
                    placeholder={"LastName"}
                    value={formData.lastName}
                    updateValue={(val) => updateValue("lastName", val)}
                />
                <Button buttonClass={"button__primary"} type={"submit"}/>
            </form>


        </div>
    );
}

export default HomePage;