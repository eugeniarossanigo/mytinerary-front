import React, { useRef } from "react";
import InputUsers from "../components/InputUsers";
import '../styles/SignIn.css'
import { useGetUserLoginMutation, useGetAllUsersQuery } from "../features/usersAPI";

// import SignUpGoogle from '../components/SignUpGoogle'

const inputsArray = [
        {_id: 602, name: "mail", type: "email"},
        {_id: 603, name: "password", type: "text"},
        ]

export default function SignIn() {
    const newInputs = useRef({})
    const [userLogin] = useGetUserLoginMutation()
    // localStorage.setItem('userLogged',JSON.stringify({user:'Eugenia',logged:true}))

    const handleSignin = async(e) => {
        e.preventDefault()
        const formSignin = document.getElementById('Form-signin')
        const dataLogin = Object.fromEntries(new FormData(newInputs.current))
        console.log(dataLogin[0])
        // const {data: users} = useGetAllUsersQuery()
        await userLogin({...dataLogin,...{from: 'form'}})
        formSignin.reset()
    }

    const {data: users} = useGetAllUsersQuery()
    const userLogged = users?.response.filter(user => user.logged == true)
    
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
            </main>
        </>
    );
}
