import "../styles/MyTineraries.css"
import { useGetItineraryUserMutation, useGetDeleteItineraryMutation } from '../features/itinerariesAPI'
import {Link as LinkRouter} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { reload } from '../features/reloadSlice';
import { useEffect, useState } from "react";

function MyTineraries() {
    const user = useSelector(state => state.auth.user)
    const userId = user?.id
    const [arrayItineraries, setArrayItineraries] = useState([])

    const [showUserItinearies] = useGetItineraryUserMutation()
    const [deleteItinerary] = useGetDeleteItineraryMutation()
    const reloaded = useSelector(state => state.reload.reloadState)
    const dispatch = useDispatch()

    const handleDelete = async(idIt) => {
        await deleteItinerary(idIt)
        dispatch(reload())
    }

    const handleShowItineraries = async() =>{
        try {
            let res = await showUserItinearies(userId)
            setArrayItineraries(res?.data.response)           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleShowItineraries()
    }, [reloaded])


    return (
        <>
            <main>
                <div className="pag-container">
                    {arrayItineraries && arrayItineraries.length > 0 ? (
                        <div className="itinerary-container">
                            <div className="itinerary-title">
                                <h1>{arrayItineraries[0].user.name} {arrayItineraries[0].user.lastName}</h1>
                            </div>
                            <h2>My Itineraries</h2>
                            <div className="itinerary-user">
                                <div className="itinerary-card">
                                    <img src={arrayItineraries[0].user.photo} alt="photouser" />
                                    <div className="itinerary-user-data">
                                        <p><strong>EMAIL: </strong>{arrayItineraries[0].user.mail}</p>
                                        <p><strong>COUNTRY: </strong>{arrayItineraries[0].user.country}</p>
                                    </div>
                                </div>
                                <div className="itineraries">
                                    {arrayItineraries.map(itinerary => (
                                        <div key={itinerary._id} className="info-itinerary">
                                            <h2>{itinerary.city.city}</h2>
                                            <h3>{itinerary.name}</h3>
                                            <div className='myitinerary-btns'>
                                                {/* <LinkRouter className="itinerary-one" to={'/oneitinerary/'+itinerary._id}>
                                                    <p>VIEW</p>
                                                </LinkRouter> */}
                                                <LinkRouter className="itinerary-edit" to={'/patchitinerary/'+itinerary._id}>
                                                    <p>EDIT</p>
                                                </LinkRouter>
                                                { <button className="itinerary-delete" onClick={()=>handleDelete(itinerary._id)}>DELETE</button> }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>This user has 0 itineraries for now</p>
                    )
                    }
                </div>
            </main>
        </>
    );
}

export default MyTineraries;