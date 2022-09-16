import React from "react";
import SignUpGoogle from '../components/SignUpGoogle'
import InputUsers from "../components/InputUsers";
import '../styles/SignUp.css'
import { useGetNewUserMutation } from "../features/usersAPI";
import { useRef } from "react";
import '../styles/Modals.css'
import ModalOk from "../components/ModalOk";
import ModalGo from "../components/ModalGo";

const inputsArray = [
    { _id: 600, name: "name", type: "text" , ph: "e.g. Maria"},
    { _id: 601, name: "lastName", type: "text", ph: "e.g Phillips"},
    { _id: 602, name: "mail", type: "email", ph: "mariaphillips@gmail.com" },
    { _id: 603, name: "password", type: "password", ph: "must contains letters or numbers" },
    { _id: 604, name: "photo", type: "text", ph: "must be a url"},
    { _id: 605, name: "country", type: "text", ph: "Argentina"}
]

export default function SignUp() {

    const modalGo = document.querySelector('.Modal-container-go')
    const modalOk = document.querySelector('.Modal-container-ok')
    const formSignup = document.getElementById('Form-signup')

    let data = {from: 'form', role: 'user'}
    const newInputs = useRef({})
    const [addUser, result] = useGetNewUserMutation();
   
    const closeModal = (e) => {
        e.preventDefault()
        modalOk.classList.remove('Modal-container--show')
    }

    const handleSignup = async(e) => {
        e.preventDefault()

        const formObject = Object.fromEntries(new FormData(newInputs.current))
        let newUserData = {...formObject, ...data}
        let isEmpty = Object.values(newUserData).some(elem => (elem.trim() === ''))
        await addUser(newUserData)
        
        if (result.isSuccess && !isEmpty) {
            modalGo.classList.add('Modal-container--show')
            formSignup.reset()
        } else {
            modalOk.classList.add('Modal-container--show')
        }
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
                <div className="Modal-container Modal-container-ok">
                    <ModalOk closeModal={closeModal}  msgOk={["Try Again!!", "Please fill in all fields!", "OK"]}/>
                </div>
                <div className="Modal-container Modal-container-go">
                    <ModalGo msgGo={["Welcome to MyTinerary!", "Please verified the account in your email and come back", "GO ON"]}/>
                </div>
            </main>
        </>
    );
}