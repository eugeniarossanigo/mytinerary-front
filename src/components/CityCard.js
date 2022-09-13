import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'

function CityCard(props) {
    let city = props.data
    return (
        <>
            <LinkRouter className="card" to={props.linkTo}>
                <div className="card__background" style={{ backgroundImage: `url(${city.photo})`}} ></div>
                <div className="card__content">
                    <p className="card__category">{city.province}</p>
                    <h3 className="card__heading">{city.city}</h3>
                </div>
            </LinkRouter>
        </>
    )
}

export default CityCard
