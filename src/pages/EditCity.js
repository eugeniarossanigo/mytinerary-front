import LabelInput from "../components/LabelInput";
import '../styles/EditCity.css'
import { useRef, useState, useEffect} from 'react'
import axios from "axios";

const year = new Date().getFullYear()

const inputsArray = [
                    {_id: 300, name: "_id", type: "hidden"},
                    {_id: 301, name: "city", type: "text"},
                    {_id: 302, name: "province", type: "text"},
                    {_id: 303, name: "country", type: "text"},
                    {_id: 304, name: "photo", type: "text"},
                    {_id: 305, name: "population", type: "number", min: "1000", max: "100000000"},
                    {_id: 306, name: "fundation", type: "date"},
                    {_id: 307, name: "description", type: "textarea", minlength:"10", cols: "27", rows:"5"}
                    ]

function EditCity() {
    const formCity = document.getElementById('Form-city-edit')
    const formSelect = document.getElementById('Form-select')
    const [citiesArray, setCitiesArray] = useState([])
    const selectCity = useRef("")

    useEffect(() => {
        axios.get('http://localhost:4000/cities')
        .then(response => {
            setCitiesArray(response.data.response)
        })
    }, [])

    const optionsSelect = (city) => (
        <option value={city._id} key={city._id}>{city.city}</option>
    )
    
    const [cityData, setCityData] = useState({})
    // const {_id, city, province, country, photo, population, fundation, description} = cityData
    const newCityData = useRef({})

    const handleSelect = (e) => {
        e.preventDefault()
        console.log(selectCity.current.value)
        axios.get('http://localhost:4000/cities/'+ (selectCity.current.value))
            .then(response => {
                setCityData(response.data.response)
        })
    }

    useEffect(() => {
        axios.put('http://localhost:4000/cities/'+ (selectCity.current.value),
            cityData
            )
            .then(response => {
                console.log(response.data)
        })
    }, [cityData])

    //{city, province, country, photo, population, fundation, description}
    
    const handleChanged = (e) => {
        e.preventDefault()
        const formObject = Object.fromEntries(new FormData(newCityData.current))
        setCityData(formObject)
        // axios.put('http://localhost:4000/cities/'+ (selectCity.current.value),
        //     {_id, city, province, country, photo, population, fundation, description}
        //     )
        //     .then(response => {
        //         console.log(response.data)
        // })
        newCityData.current.reset()
        formCity.reset()
        // formSelect.reset()
    }

    return (
        <>
        <div className="editCity-container">
            <div>
                <form id="Form-select">
                    <select onChange={handleSelect} ref={selectCity}>
                        <option>Select one city:</option>
                        {citiesArray.map(optionsSelect)}
                    </select>
                </form>
                <form id="Form-city-edit" onSubmit={handleChanged} ref={newCityData}>
                    <h2>EDIT CITY</h2>
                        {inputsArray.map((inputObj,i) => {
                            return <LabelInput inputObj={inputObj} values={Object.values(cityData)[i]}/>
                            }
                        )}
                        <div className="button-container">
                            <button className="Form-btn" type="submit">SEND</button>
                        </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default EditCity


// {inputsArray.map(inputObj => <LabelInput inputObj={inputObj}/>)}

// {inputsArray.map((inputObj,i) => {
//         return <LabelInput inputObj={inputObj} values={Object.values(cityData)[i+1]}/>
//         }
//     )}
// {/* <div id="Form-array"></div> */}

// let resultado = Object.jey(data).reduce(function (prev, current) {
//     prev[current] = data[current]
//     return prev
// }, {})