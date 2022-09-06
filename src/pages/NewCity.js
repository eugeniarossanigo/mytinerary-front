import LabelInput from "../components/LabelInput";
import '../styles/NewCity.css'
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import apiURL from "../api";

const year = new Date().getFullYear()

const inputsArray = [
                    {_id: 301, name: "city", type: "text"},
                    {_id: 302, name: "province", type: "text"},
                    {_id: 303, name: "country", type: "text"},
                    {_id: 304, name: "photo", type: "text"},
                    {_id: 305, name: "population", type: "number", min: "1000", max: "100000000"},
                    {_id: 306, name: "fundation", type: "date", max: year},
                    {_id: 307, name: "description", type: "textarea", minlength:"10", cols: "27", rows:"5"}
                    ]

export default function NewCity() {
    const newInputs = useRef({})
    const [newData, setNewData] = useState({})
    
    // const citiesView = (elem) => (
    //     `<p>${Object.values(elem).join(" - ")}</p>`
    // )

    const {city, province, country, photo, population, fundation, description} = newData
    useEffect(() => {
        axios.post('http://localhost:4000/cities', {
            city, province, country, photo, population, fundation, description
        })
            .then(response=>{
                console.log(response.data)
        })
    }, [newData])

    const handleChanged = (e) => {
        e.preventDefault()
        const formCity = document.getElementById('Form-city')
        // const formArray = document.getElementById('Form-array')
        const formObject = Object.fromEntries(new FormData(newInputs.current))
        console.log(formObject)
        setNewData(formObject)
        // formArray.innerHTML += citiesView(formObject)
        formCity.reset()
    }

    return (
        <>
            <main>
                <form id="Form-city" onSubmit={handleChanged} ref={newInputs}>
                    <h2>CITY</h2>
                        {inputsArray.map(inputObj => <LabelInput inputObj={inputObj} values={""}/>)}
                        <div className="button-container">
                            <button className="Form-btn" type="submit">SEND</button>
                        </div>
                </form>
                <div id="Form-array"></div>
            </main>
        </>
    );
}

