import '../styles/Carrousel.css'

function Carrousel() {

    const citiesArray = [
        {url: "images/nature2.jpg", title: "Bariloche"},
        {url: "images/nature2.jpg", title: "San Martín de los Andes"},
        {url: "images/nature2.jpg", title: "Villa la Angostura"},
        {url: "images/nature2.jpg", title: "El Bolsón"}
    ]

    const citiesView = (city) => (
        <div className="Carrousel-pic">
            <img src={city.url}/>
            <h3>{city.title}</h3>
        </div>
    )

  return (
    <>
        <h2>Popular MYtineraries</h2>
        <div className="Carrousel-container">
            {citiesArray.map(citiesView)}
        </div>
    </>
  );
}

export default Carrousel;
