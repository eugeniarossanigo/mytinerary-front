import React, { useEffect, useRef } from "react";
import * as jose from 'jose'

export default function SignUpGoogle() {

    const buttonDiv = useRef(null)
    console.log(buttonDiv.current)
    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)

        // let [newUser] = useSignup

        let data = {
            name: userObject.name,
            photo: userObject.picture,
            mail: userObject.mail,
            role: 'user',
            from: 'google'
        }
        // newUser (data)

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
            { theme: "outline", size: "large" , text: 'signup_with'}  // customization attributes
        );
    }, [])
    return (
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )
}