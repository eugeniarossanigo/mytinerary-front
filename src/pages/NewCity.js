import InputCities from "../components/InputCities";
import '../styles/NewCity.css'
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import apiURL from "../api";
import { useGetNewCityMutation } from "../features/citiesAPI";

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
    // const [newData, setNewData] = useState({})
    const [addCity, result] = useGetNewCityMutation()

    // const {city, province, country, photo, population, fundation, description} = newData
    // useEffect(() => {
    //     axios.post('http://localhost:4000/cities', {
    //         city, province, country, photo, population, fundation, description
    //     })
    //         .then(response=>{
    //             console.log(response.data)
    //     })
    // }, [newData])

    // const handleChanged = (e) => {
    //     e.preventDefault()
    //     const formCity = document.getElementById('Form-city')
    //     const formObject = Object.fromEntries(new FormData(newInputs.current))
    //     setNewData(formObject)
    //     formCity.reset()
    // }
    
    const handleChanged = async(e) => {
        e.preventDefault()
        const formCity = document.getElementById('Form-city')
        const newData = Object.fromEntries(new FormData(newInputs.current))
        await addCity(newData)
        formCity.reset()
    }

    return (
        <>
            <main>
                <form id="Form-city" onSubmit={handleChanged} ref={newInputs}>
                    <h2>CREATE A NEW CITY</h2>
                    {inputsArray.map(inputObj => <InputCities inputObj={inputObj} values={""}/>)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">SEND</button>
                    </div>
                </form>
            </main>
        </>
    );
}

