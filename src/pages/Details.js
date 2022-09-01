import "../styles/Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link as LinkRouter } from 'react-router-dom'

export default function Details() {
    const { id } = useParams()
    console.log(useParams())
    console.log(id)

    const [cityData, setCityData] = useState({})
    
    useEffect(() => {
        axios.get('http://localhost:4000/cities/' + id)
        .then(response => {
            console.log(response.data.response)
            setCityData(response.data.response)
        })
    }, [])
    
    let date = new Date(cityData.fundation)

    return (
        <>
        <div className="detail-cont">
            <div className="detail-container">
                <div className="img-container-detail">
                    <img src={cityData.photo} alt="" />
                </div>
                <div className="text-detail">
                    <h2>DETAILS</h2>
                    <div className="caracteristicas">
                        <h3>City:</h3>
                        <p>{cityData.city}</p>
                        <h3>Province:</h3>
                        <p>{cityData.province}</p>
                        <h3>Country:</h3>
                        <p>{cityData.country}</p>
                        <h3>Population:</h3>
                        <p>{cityData.population}</p>
                        <h3>Fundation:</h3>
                        <p>{date.getFullYear()}</p>
                        <h3>Description:</h3>
                        <p>{cityData.description}</p>
                    </div>
                </div>
            </div>
        </div>    
                <LinkRouter className="button-container" to={"/cities"}>
                    <p className="button-back">BACK</p>
                </LinkRouter>
        </>
    )
}