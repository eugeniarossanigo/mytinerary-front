import "../styles/Details.css"

function City() {
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
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    console.log(id)

    function getCity(citiesArray, id) {
        var passing = "0";
        citiesArray.forEach(function(element) {
            if (element._id == id) {
                passing = element;
            }
        });
    
        return passing;
    }

    var cityData = getCity(citiesArray, id);
    return (
        <>
            <main>
                <div className="detail-container">
                <div className="img-container-detail">
                    <img src={`../${cityData.url}`} alt=""/>
                </div>
                <div className="text-detail">
                    <h2>DETAILS</h2>
                    <div className="caracteristicas">
                        <h3>City:</h3>
                        <p>{cityData.title}</p>
                        <h3>Province:</h3>
                        <p>Cordoba</p>
                        <h3>Country:</h3>
                        <p>Argentina</p>
                        <h3>Population:</h3>
                        <p>40000</p>
                        <h3>Fundation:</h3>
                        <p>1910</p>
                        <h3>Description:</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
                
            </main>
        </>
    );
}

export default City;
