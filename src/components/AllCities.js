// import axios from "axios"
// import { useState, useEffect } from "react"
// import InputForm from "./inputForm"

// export default function InputForm() {
//     const [citiesArray, setCitiesArray] = useState([])
//     const [inputParam, setInputParam] = useState("")

//     useEffect(() => {
//         axios.get('http://localhost:4000/cities/search?city='+inputParam)
//         .then(response => {
//             setCitiesArray(response.data.response)
//         })
//     }, [inputParam])

//     const searchParam = (name) => {
//         setInputParam(name)
//     }

//     return (
//         <>
            
//         </>
//     )
// }