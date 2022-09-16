import React, { useRef } from "react";
import InputUsers from "../components/InputUsers";
import '../styles/SignIn.css'
import { useGetUserLoginMutation } from "../features/usersAPI";
import '../styles/Modals.css'
import ModalOk from "../components/ModalOk";
import ModalGo from "../components/ModalGo";

const inputsArray = [
        {_id: 602, name: "mail", type: "email"},
        {_id: 603, name: "password", type: "text"},
        ]

export default function SignIn() {

    const modalGo = document.querySelector('.Modal-container-go')
    const modalOk = document.querySelector('.Modal-container-ok')

    const newInputs = useRef({})
    const [userLogin, result] = useGetUserLoginMutation()

    const closeModal = (e) => {
        e.preventDefault()
        modalOk.classList.remove('Modal-container--show')
    }

    const handleSignin = async(e) => {
        e.preventDefault()
        const formSignin = document.getElementById('Form-signin')
        const dataLogin = Object.fromEntries(new FormData(newInputs.current))
        let newUserData = {...dataLogin,...{from: 'form'}}
        let isEmpty = Object.values(newUserData).some(elem => (elem.trim() === ''))
        await userLogin(newUserData)
        if (result.isSuccess && !isEmpty) {
            modalGo.classList.add('Modal-container--show')
            localStorage.setItem('userLogged', JSON.stringify(result.data.response.user))
            formSignin.reset()
        } else {
            modalOk.classList.add('Modal-container--show')
        }
    }
    
    return (
        <>
            <main>
                <form id="Form-signin" onSubmit={handleSignin} ref={newInputs}> 
                    <h2>WELCOME BACK!</h2>
                    {inputsArray.map(inputObj => <InputUsers inputObj={inputObj} values={""}/>)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">LOG IN</button>
                    </div>
                </form>
                <div className="Modal-container Modal-container-ok">
                    <ModalOk closeModal={closeModal}  msgOk={["Try Again!!", "Please fill in all fields!", "OK"]}/>
                </div>
                <div className="Modal-container Modal-container-go">
                    <ModalGo msgGo={["Hi!", "Get a tour in your next trip", "GO ON"]}/>
                </div>
            </main>
        </>
    );
}
