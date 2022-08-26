import CityCard from '../components/CityCard';
function Cities() {
    const citiesArray = [
        {_id: 1, url: "images/buenosaires.jpg", title: "Buenos Aires"},
        {_id: 2, url: "images/cordoba.jpg", title: "Córdoba"},
        {_id: 3, url: "images/mendoza.jpg", title: "Mendoza"},
        {_id: 4, url: "images/jujuy.jpg", title: "Jujuy"},
        {_id: 5, url: "images/santafe.jpg", title: "Santa Fe"},
        {_id: 6, url: "images/tierradelfuego.jpg", title: "Tierra del Fuego"},
        {_id: 7, url: "images/tucuman.jpg", title: "Tucumán"},
        {_id: 8, url: "images/santacruz.jpg", title: "Santa Cruz"},
        {_id: 9, url: "images/chubut.jpg", title: "Chubut"},
        {_id: 10, url: "images/corrientes.jpg", title: "Corrientes"},
        {_id: 11, url: "images/sanluis.jpg", title: "San Luis"},
        {_id: 12, url: "images/neuquen.jpg", title: "Neuquén"}
    ]
    return (
        <>
            <main>
            <div className="citycard-grid">
                {citiesArray.map((city)=> (

                    <CityCard data={city} />
                ))}
                </div>
            </main>
        </>
    );
}

export default Cities;
