import axios from 'axios';
import CityCard from '../components/CityCard';
import { useEffect, useState } from 'react';

function Cities() {   
    
    const [citiesArray, setCitiesArray] = useState([]) 

    useEffect(() => {
        axios.get('http://localhost:4000/cities/')
        .then(response => {
            setCitiesArray(response.data.response)
        })
    }, [])

    return (
        <>
            <main>
                <div className="Citycard-grid">
                    {citiesArray.map((city)=> (
                        <CityCard data={city} linkTo={city._id} />
                    ))}
                </div>
            </main>
        </>
    );
}

export default Cities;
