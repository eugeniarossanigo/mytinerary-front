import LabelInput from "../components/LabelInput";
import '../styles/NewCity.css'
import React, { useRef } from "react";

const year = new Date().getFullYear()

const inputsArray = [
                    {_id: 301, name: "photo", type: "file", src:""},
                    {_id: 302, name: "city", type: "text"},
                    {_id: 303, name: "country", type: "text"},
                    {_id: 303, name: "population", type: "number", min: "1"},
                    {_id: 303, name: "fundation", type: "number", min: "1000", max: year},
                    {_id: 303, name: "description", type: "textarea", minlength:"10", cols: "27", rows:"5"}
                    ]

export default function NewCity() {
    const newInputs = useRef("")
    
    const citiesView = (elem) => (
        `<p>${Object.values(elem).join(" - ")}</p>`
    )

    const handleChanged = (e) => {
        e.preventDefault()
        const formCity = document.getElementById('Form-city')
        const formArray = document.getElementById('Form-array')
        
        const formObject = Object.fromEntries(new FormData(newInputs.current))
        formArray.innerHTML += citiesView(formObject)
        formCity.reset()
    }

    return (
        <>
            <main>
                <h2>CITY</h2>
                <form id="Form-city" onSubmit={handleChanged} ref={newInputs}>
                    {inputsArray.map(inputObj => <LabelInput inputObj={inputObj}/>)}
                    <button className="Form-btn" type="submit">ENVIAR</button>
                </form>
                <div id="Form-array"></div>
            </main>
        </>
    );
}

