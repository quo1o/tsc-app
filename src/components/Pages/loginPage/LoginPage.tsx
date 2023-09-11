import React from 'react';
import {NavLink} from "react-router-dom";


const LoginPage = () => {
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
            <h1>Login Page</h1>
        </div>
    );
};

export default LoginPage;