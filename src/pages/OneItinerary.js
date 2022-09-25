import { useParams } from 'react-router-dom';
import ItineraryCard from '../components/ItineraryCard';
import { useGetItineraryIdQuery } from '../features/itinerariesAPI';
import '../styles/App.css';

export default  function OneItinerary() {
    const { id } = useParams()
    const {data: itinerary} = useGetItineraryIdQuery(id)
    
    return (
        <>
            <main>
                <ItineraryCard itinerary={itinerary?.response} />
            </main>
        </>
    );
}
