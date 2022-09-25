import '../styles/NewItinerary.css'
import React, { useRef, useState} from "react";
import InputItineraries from '../components/inputItineraries';
import { useGetNewItineraryMutation } from '../features/itinerariesAPI';
import { useGetAllCitiesQuery } from '../features/citiesAPI'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputsArray = [
                    {_id: 301, name: "name", type: "text", ph: "Museum trip"},
                    {_id: 304, name: "price", type: "number", ph: "7000"},
                    {_id: 306, name: "tags", type: "array", ph: "(separate tags with spaces)"},
                    {_id: 307, name: "duration", type: "number", ph: "7"}
                    ]

export default function NewItinerary() {
    const selectCity = useRef("")
    const {data: cities} = useGetAllCitiesQuery()
    const citiesArray = cities?.response
    const navigate = useNavigate()
    
    const optionsSelect = (city) => (
        <option value={city._id} key={city._id}>{city.city}</option>
    )

    const [open, setOpen] = useState(false)
    const newInputs = useRef({})
    const [addItinerary] = useGetNewItineraryMutation() 
    const user = useSelector(state => state.auth.user)
    const userId = user?.id
    const cityId = selectCity.current.value
    let values = {user:userId, city:cityId, likes:[]}

    const handleSelect = (e) => {
        e.preventDefault()
        setOpen(true)
    }

    const handleChanged = async(e) => {
        e.preventDefault()
        const formItinerary = document.getElementById('Form-itinerary')
        const newData = Object.fromEntries(new FormData(newInputs.current))
        newData.tags = newData.tags.split(',')
        await addItinerary({...newData, ...values })
        .then(response =>{
            formItinerary.reset()
            toast.success("Itinerary created", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
            navigate('/newactivity')
        })
        .catch(error =>{
            console.log(error)
            toast.error("Try again!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        })
    }

    return (
        <>
            <main>
                <form id="Form-select">
                    <select onChange={handleSelect} ref={selectCity}>
                        <option>Select one city:</option>
                        {citiesArray.map(optionsSelect)}
                    </select>
                </form>
                { open ?
                    <form id="Form-itinerary" onSubmit={handleChanged} ref={newInputs}>
                        <h2>CREATE A NEW ITINERARY</h2>
                        {inputsArray.map(inputObj => <InputItineraries inputObj={inputObj} values={""}/>)}
                        <div className="button-container">
                            <button className="Form-btn" type="submit">SEND</button>
                        </div>
                    </form>
                : null }
            </main>
        </>
    );
}

