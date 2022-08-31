import '../styles/CityCard.css'

function CityCard(props) {
    var city = props.data
    return (
        <>
            <a className="card" href="#">
                <div className="card__background" style={{ backgroundImage: `url(${city.photo})`}} ></div>
                <div className="card__content">
                    <p className="card__category">City</p>
                    <h3 className="card__heading">{city.city}</h3>
                </div>
            </a>
        </>
    )
}

export default CityCard
