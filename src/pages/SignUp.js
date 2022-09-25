import React from "react";
import SignUpGoogle from '../components/SignUpGoogle'
import InputUsers from "../components/InputUsers";
import '../styles/SignUp.css'
import { useGetNewUserMutation } from "../features/usersAPI";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const inputsArray = [
    { _id: 600, name: "name", type: "text" , ph: "e.g. Maria"},
    { _id: 601, name: "lastName", type: "text", ph: "e.g Phillips"},
    { _id: 602, name: "mail", type: "email", ph: "mariaphillips@gmail.com" },
    { _id: 603, name: "password", type: "password", ph: "must contains letters or numbers" },
    { _id: 604, name: "photo", type: "text", ph: "must be a url"},
    { _id: 605, name: "country", type: "text", ph: "Argentina"}
]

export default function SignUp() {
    
    const navigate = useNavigate()
    const formSignup = document.getElementById('Form-signup')
    const user = useSelector(state => state.auth.user)
    const role = user?.role
    let data = {from: 'form', role: 'user'}
    const selectRole = useRef("")
    const newInputs = useRef({})
    const [addUser, result] = useGetNewUserMutation();

    const handleSignup = async(e) => {
        e.preventDefault()
        const formObject = Object.fromEntries(new FormData(newInputs.current))
        let newUserData = role === "admin" ? {...formObject, ...{from: 'form', role: selectRole.current.value}} : {...formObject, ...data}
        let isEmpty = Object.values(newUserData).some(elem => (elem.trim() === ''))
        await addUser(newUserData)
        if (result.isSuccess && !isEmpty) {
            formSignup.reset()
            navigate(role==="admin"? "/" : "/auth/signin", {replace:true})
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
                        { role === "admin" ?
                            <select className="selectRole" ref={selectRole} required>
                                <option value="user" key="user123">User</option>
                                <option value="admin" key="admin123">Admin</option>
                                
                            </select>
                        :
                            <SignUpGoogle />
                        }
                        
                    </div>
                </form>
            </main>
        </>
    );
}