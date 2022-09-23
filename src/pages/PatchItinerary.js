import '../styles/PatchItinerary.css'
import React, { useRef } from "react";
import { useGetItineraryIdQuery, useGetPatchItineraryMutation } from '../features/itinerariesAPI';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function PatchItinerary() {
    const { id } = useParams()
    const {data: itinerary} = useGetItineraryIdQuery(id)
    const itineraryObject = itinerary?.response
    const userLogged = useSelector(state => state.auth.user)
    const userId = userLogged?.id
    const [updateItinerary] = useGetPatchItineraryMutation()
    const newInputs = useRef({})

    const handleEdit = async(e) => {
        e.preventDefault()
        const newData = Object.fromEntries(new FormData(newInputs.current))
        const objitinerary = {
                id: id,
                user: userId,
                city: itineraryObject?.city._id,
                ...newData
            }
        objitinerary.tags = objitinerary.tags.split(',')
        await updateItinerary(objitinerary)
    }

    return (
        <>
            <main>
                <form id="Form-patchitinerary" onSubmit={handleEdit} ref={newInputs}>
                    <h2>EDIT ITINERARY</h2>
                    <label className="Form-label">name:
                        <input className="Form-input" type="text" name="name" defaultValue={itineraryObject?.name} required />
                    </label>
                    <label className="Form-label">price:
                        <input className="Form-input" type="number" name="price" defaultValue={itineraryObject?.price} required />
                    </label>
                    <label className="Form-label">tags:
                        <input className="Form-input" type="array" name="tags" defaultValue={itineraryObject?.tags} required />
                    </label>
                    <label className="Form-label">duration:
                        <input className="Form-input" type="number" name="duration" defaultValue={itineraryObject?.duration} required />
                    </label>
                    <div className="button-container">
                        <button className="Form-btn" type="submit">SEND</button>
                    </div>
                </form>
            </main>
        </>
    );
}