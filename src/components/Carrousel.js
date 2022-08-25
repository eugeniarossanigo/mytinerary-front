import '../styles/Carrousel.css'
import Arrow from './Arrow';
import {useState, useEffect} from 'react'

function Carrousel(props) {
    const cities = props.data
    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [idInterval, setIdInterval] = useState()
    const interval = props.interval * 1000
    
    useEffect(() => {
        let idNew = setInterval(function () {
            nextSlide()
        }, interval)
        setIdInterval(idNew)
        return () => clearInterval(idNew)
    }, [start])

    let previousSlide = () => {
        if (start >= range) {
            setStart(start-range)
            setEnd(end-range)
        } else {
            setStart(cities.length-range)
            setEnd(cities.length)
        }
        clearInterval(idInterval)
    }

    let nextSlide = () => {
        if (end < cities.length) {
            setStart(start+range)
            setEnd(end+range)
        } else {
            setStart(0)
            setEnd(range)
        }
        clearInterval(idInterval)
    }

    const citiesView = (city) => (
        <div key={city._id} className="Carrousel-pic">
            <img src={city.url} alt="city"/>
            <h3>{city.title}</h3>
        </div>
    )

  return (
    <>
        <div className="Carrousel-main">
        <h2>Popular MyTineraries</h2>
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
