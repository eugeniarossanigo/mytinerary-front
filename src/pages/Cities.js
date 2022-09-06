import axios from 'axios';
import CityCard from '../components/CityCard';
import { useEffect, useState } from 'react';
import InputForm from '../components/inputForm';
import apiURL from '../api';

function Cities() {

    const [citiesArray, setCitiesArray] = useState([])
    const [inputParam, setInputParam] = useState("")

    useEffect(() => {
        axios.get(apiURL +'/cities?city='+inputParam)
        .then(response => {
            setCitiesArray(response.data.response)
        })
    }, [inputParam])

    const searchParam = (param) => {
        setInputParam(param)
    }

    return (
        <>
            <main>
                <InputForm searchParam={searchParam} />
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
