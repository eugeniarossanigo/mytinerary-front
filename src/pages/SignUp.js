import React from "react";
import SignUpGoogle from '../components/SignUpGoogle'
import InputUsers from "../components/InputUsers";
import '../styles/SignUp.css'

const inputsArray = [
    { _id: 600, name: "name", type: "text" },
    { _id: 601, name: "lastName", type: "text" },
    { _id: 602, name: "mail", type: "email" },
    { _id: 603, name: "password", type: "text" },
    { _id: 604, name: "photo", type: "text" },
    { _id: 605, name: "country", type: "text" },
    { _id: 606, name: "role", type: "text" }
]


export default function SignUp() {

    // const handleSignin = (e) => {
    //     e.preventDefault()
    //     const formSignin = document.getElementById('Form-signin')
    //     const formObject = Object.fromEntries(new FormData(newInputs.current))
    //     console.log(formObject)
    //     setNewData(formObject)
    //     formSignIn.reset()
    // }

    return (
        <>
            <main>
                <form id="Form-signup">
                    {/* onSubmit={HandleSignin} */}
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