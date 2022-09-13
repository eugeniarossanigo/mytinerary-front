import React from "react";
import InputUsers from "../components/InputUsers";
import '../styles/SignIn.css'
// import SignUpGoogle from '../components/SignUpGoogle'

// const inputsArray = [
//         {_id: 600, name: "name", type: "text"},
//         {_id: 601, name: "lastName", type: "text"},
//         {_id: 602, name: "mail", type: "email"},
//         {_id: 603, name: "password", type: "text"},
//         {_id: 604, name: "photo", type: "text"},
//         {_id: 605, name: "country", type: "text"},
//         {_id: 606, name: "role", type: "text"}
//         ]

const inputsArray = [
        {_id: 602, name: "mail", type: "email"},
        {_id: 603, name: "password", type: "text"},
        ]

export default function SignIn() {
    localStorage.setItem('userLogged',JSON.stringify({user:'Eugenia',logged:true}))

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
                <form id="Form-signin"> 
                {/* onSubmit={HandleSignin} */}
                    <h2>WELCOME BACK!</h2>
                    {inputsArray.map(inputObj => <InputUsers inputObj={inputObj} values={""}/>)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">LOG IN</button>
                    </div>
                </form>
            </main>
        </>
    );
}
