import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import AuthLoginForm from "../../forms/authLoginForm/AuthLoginForm";

const HomePage = () => {
    const [isModalFlag, setIsModalFlag] = useState(false)

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
            <AuthLoginForm/>
        </div>
    );
}

export default HomePage;