import '../styles/Carrousel.css'
import Arrow from './Arrow';
import {useState, useEffect} from 'react'

function Carrousel(props) {
    const cities = props.data
    const range = props.range
    const interval = props.interval * 1000
    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(start + range)
    let [idInterval, setIdInterval] = useState()
    
    // useEffect(() => {
    //     let idNew = setInterval(function () {
    //         nextSlide()
    //     }, interval)
    //     setIdInterval(idNew)
    //     return () => clearInterval(idInterval)
    // }, [start])

    let previousSlide = () => {
        if (start >= range) {
            setStart(start-range)
            setEnd(end-range)
        } else {
            start = cities.length
            end = start + range
            previousSlide()
        }
    }

    let nextSlide = () => {
        if (end < cities.length) {
            setStart(start+range)
            setEnd(end+range)
        } else {
            start = 0 - range
            end = start + range
            nextSlide()
        }
    }

    const citiesView = (city) => (
        <div key={city._id} className="Carrousel-pic">
            <img src={city.url}/>
            <h3>{city.title}</h3>
        </div>
    )

  return (
    <>
        <div className="Carrousel-main">
        <h2>Popular MYtineraries</h2>
        <div className="Carrousel-container">
            <Arrow icon={"./images/arrow-left.png"} click={previousSlide} />
            <div className="Carrousel-img-container">
                {cities.slice(start, end).map(citiesView)}
            </div>
            <Arrow icon={"./images/arrow-right.png"} click={nextSlide}/>
        </div>
        </div>
    </>
  );
}

export default Carrousel;
