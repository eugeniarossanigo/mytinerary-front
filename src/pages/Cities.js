import axios from 'axios';
import { useState } from 'react';
import CityCard from '../components/CityCard';
import InputForm from '../components/inputForm';
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../features/citiesAPI'

export default function Cities() {
    const [inputParam, setInputParam] = useState("")
    const searchParam = (param) => {
        setInputParam(param)
    }

    const {data: cities} = useGetAllCitiesQuery()
    const {data: cityQuery} = useGetCityNameQuery(inputParam)
    let citiesArray = cityQuery? cityQuery : cities

    return (
        <>
            <main>
                <InputForm searchParam={searchParam} />
                <div className="Citycard-grid">
                    {citiesArray?.response.map(city => <CityCard data={city} linkTo={city._id} />)}
                </div>
            </main>
        </>
    );
}
