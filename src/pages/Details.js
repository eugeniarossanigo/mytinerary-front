import "../styles/Details.css"
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from 'react-router-dom'
import ItineraryCard from "../components/ItineraryCard";
import { useGetCityIdQuery } from '../features/citiesAPI'
import { useGetItinerariesMutation } from "../features/itinerariesAPI";
import { useEffect, useState } from "react";
import { reload } from '../features/reloadSlice';
import { useSelector } from "react-redux";

export default function Details() {
    const { id } = useParams()
    const [arrayItineraries, setArrayItineraries] = useState([])
    const {data: cities} = useGetCityIdQuery(id)
    const reloaded = useSelector(state => state.reload.reloadState)
    const [showItineraries] = useGetItinerariesMutation()
    let city = cities?.response

    let date = new Date(city?.fundation)

    const handleShowItineraries = async() =>{
        try {
            let res = await showItineraries(id)
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
            <div className="detail-cont">
                <div className="detail-container">
                    <div className="img-container-detail">
                        <img src={city?.photo} alt="" />
                    </div>
                    <div className="text-detail">
                        <h2>DETAILS</h2>
                        <div className="characteristics">
                            <div>
                                <h3>City:</h3>
                                <p>{city?.city}</p>
                            </div>
                            <div>
                                <h3>Province:</h3>
                                <p>{city?.province}</p>
                            </div>
                            <div>
                                <h3>Country:</h3>
                                <p>{city?.country}</p>
                            </div>
                            <div>
                                <h3>Population:</h3>
                                <p>{city?.population}</p>
                            </div>
                            <div>
                                <h3>Fundation:</h3>
                                <p>{date.getFullYear()}</p>
                            </div>
                            <div className="description">
                                <h3>Description:</h3>
                                <p>{city?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            {arrayItineraries.map(itinerary=> <ItineraryCard itinerary={itinerary}/>)}
            <LinkRouter className="Details-btn-back" to={"/cities"}>BACK</LinkRouter>
        </main>
        </>
    )
}