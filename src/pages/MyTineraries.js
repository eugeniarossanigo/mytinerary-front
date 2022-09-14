import "../styles/MyTineraries.css"
import { useParams } from "react-router-dom";
import { useGetItineraryUserQuery } from '../features/itinerariesAPI'


function MyTineraries() {
    const { id } = useParams()

    const { data: itineraries } = useGetItineraryUserQuery(id)
    return (
        <>
            <main>
                <div className="pag-container">
                    <div className="itinerary-container">
                        <div className="itinerary-tittle">
                            <h1>{itineraries?.response[0].user.name}</h1>
                        </div>
                        <h2>My Itineraries</h2>
                        <div className="itinerary-user">
                            <div className="itinerary-card">
                                <img src={itineraries?.response[0].user.photo} alt="photouser" />
                            </div>
                            <div className="itineraries">
                                {itineraries?.response.map(itinerary => (
                                    <div className="info-itinerary">
                                        <h2>{itinerary.city.city}</h2>
                                        <h3>{itinerary.name}</h3>
                                    </div>
                            
                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MyTineraries;