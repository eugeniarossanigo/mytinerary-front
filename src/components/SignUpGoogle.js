import React, { useEffect, useRef } from "react";
import * as jose from 'jose'
import { useGetNewUserMutation } from "../features/usersAPI";
import { useNavigate } from "react-router-dom";

export default function SignUpGoogle() {
    const navigate = useNavigate()
    const buttonDiv = useRef(null)
    const [addUser, result] = useGetNewUserMutation();

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
            name: userObject.name,
            lastName: userObject.family_name,
            photo: userObject.picture,
            mail: userObject.email,
            country: 'Argentina',
            password: userObject.sub,
            role: 'user',
            from: 'google'
        }
        await addUser(data)
        .then(response => {
            navigate("/auth/signin", {replace:true})
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
            context: 'signup'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large" , text: 'signup_with', locale: 'en'} // customization attributes
        );
    }, [])
    
    return (
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )
}