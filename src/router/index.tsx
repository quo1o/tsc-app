import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import HomePage from "../components/Pages/homePage/HomePage";
import LoginPage from "../components/Pages/loginPage/LoginPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </>
    )
)