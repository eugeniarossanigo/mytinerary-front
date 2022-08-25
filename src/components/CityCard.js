import '../styles/CityCard.css'

function CityCard(props) {
    var city = props.data
    console.log(props)
    return (
        <>
            <a class="card" href="#">
                <div className="card__background" style={{ backgroundImage: `url(${city.url})`}} ></div>
                <div className="card__content">
                    <p className="card__category">City</p>
                    <h3 className="card__heading">{city.title}</h3>
                </div>
            </a>
        </>
    )
}

export default CityCard
