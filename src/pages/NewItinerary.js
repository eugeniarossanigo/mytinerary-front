import '../styles/NewItinerary.css'
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import apiURL from "../api";
import InputItineraries from '../components/inputItineraries';

const inputsArray = [
                    {_id: 301, name: "name", type: "text"},
                    {_id: 302, name: "user", type: "text"},
                    {_id: 303, name: "city", type: "text"},
                    {_id: 304, name: "price", type: "number"},
                    {_id: 305, name: "likes", type: "array"},
                    {_id: 306, name: "tags", type: "array"},
                    {_id: 307, name: "duration", type: "number"}
                    ]

export default function NewItinerary() {
    const newInputs = useRef({})
    const [newData, setNewData] = useState({})

    const {name, user, city, price, likes, tags, duration} = newData
    useEffect(() => {
        axios.post('http://localhost:4000/itineraries', {
            name, user, city, price, likes, tags, duration
        })
            .then(response=>{
                console.log(response.data)
        })
    }, [newData])

    const handleChanged = (e) => {
        e.preventDefault()
        const formItinerary = document.getElementById('Form-itinerary')
        const formObject = Object.fromEntries(new FormData(newInputs.current))
        setNewData(formObject)
        formItinerary.reset()
    }

    return (
        <>
            <main>
                <form id="Form-itinerary" onSubmit={handleChanged} ref={newInputs}>
                    <h2>CREATE A NEW ITINERARY</h2>
                    {inputsArray.map(inputObj => <InputItineraries inputObj={inputObj} values={""}/>)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">SEND</button>
                    </div>
                </form>
            </main>
        </>
    );
}

