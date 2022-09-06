import "../styles/Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link as LinkRouter } from 'react-router-dom'
import apiURL from '../api';

export default function Details() {
    const { id } = useParams()
    const [cityData, setCityData] = useState({})
    
    useEffect(() => {
        axios.get(apiURL +'/cities/' + id)
        .then(response => {
            setCityData(response.data.response)
        })
    }, [])
    
    let date = new Date(cityData.fundation)

    return (
        <>
        <main>
            <div className="detail-cont">
                <div className="detail-container">
                    <div className="img-container-detail">
                        <img src={cityData.photo} alt="" />
                    </div>
                    <div className="text-detail">
                        <h2>DETAILS</h2>
                        <div className="characteristics">
                            <div>
                                <h3>City:</h3>
                                <p>{cityData.city}</p>
                            </div>
                            <div>
                                <h3>Province:</h3>
                                <p>{cityData.province}</p>
                            </div>
                            <div>
                                <h3>Country:</h3>
                                <p>{cityData.country}</p>
                            </div>
                            <div>
                                <h3>Population:</h3>
                                <p>{cityData.population}</p>
                            </div>
                            <div>
                                <h3>Fundation:</h3>
                                <p>{date.getFullYear()}</p>
                            </div>
                            <div className="description">
                                <h3>Description:</h3>
                                <p>{cityData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <LinkRouter className="Details-btn-back" to={"/cities"}>BACK</LinkRouter>
        </main>
        </>
    )
}