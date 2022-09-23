import React, { useEffect, useRef } from "react";
import * as jose from 'jose'
import { useGetUserLoginMutation } from "../features/usersAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from '../features/userSlice';

export default function SignInGoogle() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const buttonDiv = useRef(null)
    const [userLogin] = useGetUserLoginMutation()
    
    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let newData = {
            mail: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        
        await userLogin(newData)
        .then(response => {
            dispatch(setCredentials(response?.data?.response.user))
            localStorage.setItem('token', response?.data?.response.token)
            navigate("/", {replace:true})
        })
        .catch(error => {
            console.log(error)
        })     
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '211709152900-3rj383na21uctdphfsv20083qqv9q2lh.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signin'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large" , text: 'signin_with', locale: 'en'} // customization attributes
        );
    }, [])

    return (
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )
}