import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'


function CityCard(props) {
    var city = props.data
    console.log(props)
    return (
        <>
            <LinkRouter className="card" to={`city?id=${city._id}`}>
                <div className="card__background" style={{ backgroundImage: `url(${city.url})`}} ></div>
                <div className="card__content">
                    <p className="card__category">City</p>
                    <h3 className="card__heading">{city.title}</h3>
                 T  
                </div>
                </LinkRouter>
        </>
    )
}

export default CityCard
