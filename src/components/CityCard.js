import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'


function CityCard(props) {
    var city = props.data
    return (
        <>
            <LinkRouter className="card" to={`city?id=${city._id}`}>
                <div className="card__background" style={{ backgroundImage: `url(${city.photo})`}} ></div>
                <div className="card__content">
                    <p className="card__category">City</p>
                    <h3 className="card__heading">{city.city}</h3>
                </div>
                </LinkRouter>
        </>
    )
}

export default CityCard
