import React from "react";
import SignUpGoogle from '../components/SignUpGoogle'
import InputUsers from "../components/InputUsers";
import '../styles/SignUp.css'
import { useGetNewUserMutation } from "../features/usersAPI";
import { useRef } from "react";

const inputsArray = [
    { _id: 600, name: "name", type: "text" },
    { _id: 601, name: "lastName", type: "text" },
    { _id: 602, name: "mail", type: "email" },
    { _id: 603, name: "password", type: "password" },
    { _id: 604, name: "photo", type: "text" },
    { _id: 605, name: "country", type: "text" }
]

export default function SignUp() {
    
    const newInputs = useRef({})
    let data = {from: 'form', role: 'user'}

    const [addUser] = useGetNewUserMutation();

    const handleSignup = async(e) => {
        e.preventDefault()
        const formSignup = document.getElementById('Form-signup')
        const formObject = Object.fromEntries(new FormData(newInputs.current))
        let newUserData = {...formObject, ...data}
        await addUser(newUserData)
        formSignup.reset()
    }

    return (
        <>
            <main>
                <form id="Form-signup" onSubmit={handleSignup} ref={newInputs}>
                    <h2>CREATE YOUR ACCOUNT</h2>
                    {inputsArray.map(inputObj => <InputUsers inputObj={inputObj} values={""} />)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">SIGN UP</button>
                        <SignUpGoogle />
                    </div>
                </form>
            </main>
        </>
    );
}