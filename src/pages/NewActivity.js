import InputItineraries from "../components/inputItineraries";
import '../styles/NewActivity.css'
import { useRef, useState, useEffect} from 'react'
import axios from "axios";

const inputsArray = [
    {_id: 301, name: "name", type: "text"},
    {_id: 302, name: "photo", type: "text"},
    {_id: 303, name: "itinerary", type: "text"}
    ]

export default function NewActivity() {
    const formActivity = document.getElementById('Form-activity-edit')
    const formSelect = document.getElementById('Form-select')
    const [itinerariesArray, setItinerariesArray] = useState([])
    const selectItinerary = useRef("")

    useEffect(() => {
        axios.get('http://localhost:4000/itineraries')
        .then(response => {
            setItinerariesArray(response.data.response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const optionsSelect = (itinerary) => (
        <option value={itinerary._id} key={itinerary._id}>{itinerary.name}</option>
    )
    
    const [activityData, setActivityData] = useState({})
    const {_id, name, photo, itinerary} = activityData
    const  newActivityData = useRef({})

    const [open, setOpen] = useState(false)
    
    const handleSelect = (e) => {
        e.preventDefault()
        axios.get('http://localhost:4000/itineraries/'+ (selectItinerary.current.value))
            .then(response => {
                setOpen(true)
                setActivityData(response.data.response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.put('http://localhost:4000/itineraries/'+ (selectItinerary.current.value),
            {_id, name, photo, itinerary}
            )
            .then(response => {
                console.log(response.data.response)
        })
    }, [activityData])
    
    const handleChanged = (e) => {
        e.preventDefault()
        const formObject = Object.fromEntries(new FormData(newActivityData.current))
        setActivityData(formObject)
        setOpen(false)
        newActivityData.current.reset()
        formActivity.reset()
    }

    return (
        <>
        <main>
            <div className="newActivity-container">
                <div>
                    <form id="Form-select">
                        <select onChange={handleSelect} ref={newActivityData}>
                            <option>Select one activity:</option>
                            {itinerariesArray.map(optionsSelect)}
                        </select>
                    </form>
                    {
                        open? <form id="Form-activity-edit" onSubmit={handleChanged} ref={selectItinerary}>
                                <h2>NEW ACTIVITY</h2>
                                    {inputsArray.map((inputObj,i) => {
                                        return <InputItineraries inputObj={inputObj} values={Object.values(activityData)[i]}/>
                                        }
                                    )}
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
