import '../styles/PatchItinerary.css'
import React, { useEffect, useRef, useState } from "react";
import apiURL from "../api";
import InputItineraries from '../components/inputItineraries';
import { useGetItineraryIdQuery, useGetPatchItineraryMutation } from '../features/itinerariesAPI';
import { useSelector } from 'react-redux';


const inputsArray = [
                    {_id: 300, name: "_id", type: "hidden"},
                    {_id: 301, name: "name", type: "text"},
                    {_id: 304, name: "price", type: "number"},
                    {_id: 306, name: "tags", type: "array"},
                    {_id: 307, name: "duration", type: "number"}
                    ]

export default function PatchItinerary() {
    const newInputs = useRef({})
    const [updateItinerary, result] = useGetPatchItineraryMutation()
    const {data:itinerary} = useGetItineraryIdQuery('632cb83bd30bfdbc016a4da1')
    const user = useSelector(state => state.auth.user) //trae el usuario logeado
    const itineraryData = itinerary?.response
    const itineraryArray = [
        {_id: 301, name: "name", type: "text"},
        {_id: 304, name: "price", type: "number"},
        {_id: 306, name: "tags", type: "array"},
        {_id: 307, name: "duration", type: "number"}
    ]

    
    // const userId = '632a6c6faeccbd78655f6705'
    // // const userId = user?.id
    // console.log(itineraryId, userId)
    // let values = {user:userId, city:cityId, likes:[]}

    const handleChanged = async (e) => {
        e.preventDefault()
        const formItinerary = document.getElementById('Form-itinerary')
        const newData = Object.fromEntries(new FormData(newInputs.current))
        newData.tags = newData.tags.split(',')
        await updateItinerary({...newData})
        formItinerary.reset()
    }

    return (
        <>
            <main>
                <form id="Form-patchitinerary" onSubmit={handleChanged} ref={newInputs}>
                    <h2>EDIT ITINERARY</h2>
                    {inputsArray.map(inputObj => <InputItineraries inputObj={inputObj} values={""}/>)}
                    <div className="button-container">
                        <button className="Form-btn" type="submit">SEND</button>
                    </div>
                </form>
            </main>
        </>
    );
}

