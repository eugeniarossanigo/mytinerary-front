import '../styles/NewItinerary.css'
import React, { useEffect, useRef, useState } from "react";
import apiURL from "../api";
import InputItineraries from '../components/inputItineraries';
import { useGetNewItineraryMutation } from '../features/itinerariesAPI';
import { useSelector } from 'react-redux';



const inputsArray = [
                    {_id: 301, name: "name", type: "text"},
                    {_id: 304, name: "price", type: "number"},
                    {_id: 306, name: "tags", type: "array"},
                    {_id: 307, name: "duration", type: "number"}
                    ]

export default function NewItinerary() {
    const newInputs = useRef({})
    const [addItinerary, result] = useGetNewItineraryMutation()
    const cityId = '631768d0c561b3f4a98d5534'
    const user = useSelector(state => state.auth.user) //trae el usuario logeado
    // const userId = '632bbc99b8c1caa12a20eb9d'
    const userId = user?.id
    console.log(cityId, userId)
    let values = {user:userId, city:cityId, likes:[]}

    const handleChanged = async (e) => {
        e.preventDefault()
        const formItinerary = document.getElementById('Form-itinerary')
        const newData = Object.fromEntries(new FormData(newInputs.current))
        newData.tags = newData.tags.split(',')
        await addItinerary({...newData, ...values })
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

