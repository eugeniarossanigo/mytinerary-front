import React, { useEffect, useRef } from "react";
import * as jose from 'jose'
import { useGetUserLoginMutation } from "../features/usersAPI";
import { useNavigate } from "react-router-dom";

export default function SignInGoogle() {

    const navigate = useNavigate()
    const buttonDiv = useRef(null)
    const [signUser, result] = useGetUserLoginMutation();
    
    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
            mail: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        await signUser(data)
        window.location.reload()
    }

    if (result.isSuccess) {
        localStorage.setItem('userLogged', JSON.stringify(result.data.response))
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