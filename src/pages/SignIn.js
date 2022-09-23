import React, { useRef } from "react";
import SignInGoogle from '../components/SignInGoogle'
import InputUsers from "../components/InputUsers";
import '../styles/SignIn.css'
import { useGetUserLoginMutation } from "../features/usersAPI";
import { useDispatch } from "react-redux";
import { setCredentials } from '../features/userSlice';
import { useNavigate } from "react-router-dom";

const inputsArray = [
        {_id: 602, name: "mail", type: "email"},
        {_id: 603, name: "password", type: "password"},
        ]

export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const newInputs = useRef({})
    const [userLogin] = useGetUserLoginMutation()
    
    const handleSignin = (e) => {
        e.preventDefault()
        const formSignin = document.getElementById('Form-signin')
        const dataLogin = Object.fromEntries(new FormData(newInputs.current))
        let newUserData = {...dataLogin,...{from: 'form'}}
        userLogin(newUserData)
        .then(response => {
            localStorage.setItem('token', response.data.response.token)
            dispatch(setCredentials(response.data.response.user))
            formSignin.reset()
            navigate("/",{replace:true})
        })
        .catch(error => {
            console.log(error)
        })
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
