import "../styles/MyTineraries.css"
import { useParams } from "react-router-dom";
import { useGetItineraryUserQuery } from '../features/itinerariesAPI'
import {Link as LinkRouter} from 'react-router-dom'

function MyTineraries() {
    const { id } = useParams()
    const { data: itineraries } = useGetItineraryUserQuery(id)
    let userItineraries = itineraries?.response

    return (
        <>
            <main>
                <div className="pag-container">
                    {userItineraries && userItineraries.length > 0 ? (
                        <div className="itinerary-container">
                            <div className="itinerary-tittle">
                                <h1>{userItineraries[0].user.name} {userItineraries[0].user.lastName}</h1>
                            </div>
                            <h2>My Itineraries</h2>
                            <div className="itinerary-user">
                                <div className="itinerary-card">
                                    <img src={userItineraries[0].user.photo} alt="photouser" />
                                </div>
                                <div className="itineraries">
                                    {userItineraries.map(itinerary => (
                                        <div key={itinerary._id} className="info-itinerary">
                                            <h2>{itinerary.city.city}</h2>
                                            <h3>{itinerary.name}</h3>
                                            <LinkRouter className="itinerary-edit" to={'/patchitinerary/' + itinerary._id}>
                                                <p>EDIT</p>
                                            </LinkRouter>
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