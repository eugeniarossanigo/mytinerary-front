import LabelInput from "../components/LabelInput";
import '../styles/NewCity.css'
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const year = new Date().getFullYear()

const inputsArray = [
                    {_id: 301, name: "photo", type: "text"},
                    {_id: 302, name: "province", type: "text"},
                    {_id: 302, name: "city", type: "text"},
                    {_id: 303, name: "country", type: "text"},
                    {_id: 303, name: "population", type: "number", min: "1000", max: "100000000"},
                    {_id: 303, name: "fundation", type: "date", max: year},
                    {_id: 303, name: "description", type: "textarea", minlength:"10", cols: "27", rows:"5"}
                    ]

export default function NewCity() {
    const newInputs = useRef({})
    const [newData, setNewData] = useState({})
    
    const citiesView = (elem) => (
        `<p>${Object.values(elem).join(" - ")}</p>`
    )

    const {city, province, country, photo, population, fundation, description} = newData 
    useEffect(() => {
        axios.post('http://localhost:4000/cities', {
            city, province, country, photo, population, fundation, description 
        })
            .then(response=>{
                console.log(response.data)
            })
    })

    const handleChanged = (e) => {
        e.preventDefault()
        const formCity = document.getElementById('Form-city')
        const formArray = document.getElementById('Form-array')
        const formObject = Object.fromEntries(new FormData(newInputs.current))
        console.log(formObject)
        setNewData(formObject)
        formArray.innerHTML += citiesView(formObject)
        formCity.reset()
    }

    return (
        <>
            <main>
                <form id="Form-city" onSubmit={handleChanged} ref={newInputs}>
                <h2>CITY</h2>
                    {inputsArray.map(inputObj => <LabelInput inputObj={inputObj}/>)}
                    <div className="button-conteiner">
                        <button className="Form-btn" type="submit" onSubmit={handleChanged} ref={newInputs}>SEND</button>
                    </div>
                </form>
                <div id="Form-array"></div>
            </main>
        </>
    );
}

