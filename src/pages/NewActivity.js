import InputItineraries from "../components/inputItineraries";
import '../styles/NewActivity.css'
import { useRef, useState, useEffect} from 'react'
import { useGetNewActivityMutation } from "../features/activitiesAPI";
import { useGetAllItinerariesQuery } from "../features/itinerariesAPI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputsArray = [
    {_id: 301, name: "name", type: "text"},
    {_id: 302, name: "photo", type: "text"},
    {_id: 303, name: "itinerary", type: "text"}
    ]

export default function NewActivity() {
    
    const selectItinerary = useRef("")
    const {data: itineraries} = useGetAllItinerariesQuery()
    const itinerariesArray = itineraries?.response
    const navigate = useNavigate()
    
    const optionsSelect = (itinerary) => (
        <option value={itinerary._id} key={itinerary._id}>{itinerary.city.city} - {itinerary.name}</option>
    )

    const [open, setOpen] = useState(false)
    const newInputs = useRef({})
    const [addActivity] = useGetNewActivityMutation() 
    const itineraryId = selectItinerary.current.value
    let values = {itinerary: itineraryId}

    const handleSelect = (e) => {
        e.preventDefault()
        setOpen(true)
    }

    const handleSend = async(e) => {
        e.preventDefault()
        const formActivity = document.getElementById('Form-activity')
        const newData = Object.fromEntries(new FormData(newInputs.current))
        await addActivity({...newData, ...values})
        .then(response =>{
            formActivity.reset()
            toast.success("Activity created", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
            navigate('/cities')
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
            <div className="newActivity-container">
                <div>
                    <form id="Form-select">
                        <select onChange={handleSelect} ref={selectItinerary}>
                            <option>Select one itinerary:</option>
                            {itinerariesArray?.map(optionsSelect)}
                        </select>
                    </form>
                    { open ?
                        <form id="Form-activity" onSubmit={handleSend} ref={newInputs}>
                            <h2>NEW ACTIVITY</h2>
                            <label key="345" className="Form-label">name:
                                <input className="Form-input" type="text" name="name" placeholder="e.g. Walk tour" required />
                            </label>
                            <label key="346" className="Form-label">photo:
                                <input className="Form-input" type="photo" name="photo" placeholder="(must be a url)" required />
                            </label>
                            <div className="button-container">
                                <button className="Form-btn" type="submit">SEND</button>
                            </div>
                        </form>
                    : null
                    }
                    
                </div>
            </div>
        </main>
        </>
    );
}
