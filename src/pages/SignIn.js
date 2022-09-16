import React, { useRef } from "react";
import SignInGoogle from '../components/SignInGoogle'
import InputUsers from "../components/InputUsers";
import '../styles/SignIn.css'
import { useGetUserLoginMutation } from "../features/usersAPI";
import { useNavigate } from "react-router-dom";

const inputsArray = [
        {_id: 602, name: "mail", type: "email"},
        {_id: 603, name: "password", type: "text"},
        ]

export default function SignIn() {
    const newInputs = useRef({})
    const [userLogin, result] = useGetUserLoginMutation()
    const navigate = useNavigate()

    const handleSignin = async(e) => {
        e.preventDefault()
        const formSignin = document.getElementById('Form-signin')
        const dataLogin = Object.fromEntries(new FormData(newInputs.current))
        let newUserData = {...dataLogin,...{from: 'form'}}
        await userLogin(newUserData)
        formSignin.reset()
        navigate("/", {replace:true})
    }

    if (result.isSuccess) {
        localStorage.setItem('userLogged', JSON.stringify(result.data.response.user))
    }
    
    return (
        <>
            <main>
                <form id="Form-signin" onSubmit={handleSignin} ref={newInputs}> 
                    <h2>WELCOME BACK!</h2>
                    {inputsArray.map(inputObj => <InputUsers inputObj={inputObj} values={""}/>)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">LOG IN</button>
                        <SignInGoogle />
                    </div>
                </form>
            </main>
        </>
    );
}
