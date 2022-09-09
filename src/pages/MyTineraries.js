import "../styles/MyTineraries.css"

function MyTineraries() {

    return (
        <>
            <main>
                <div className="pag-container">
                    <div className="itinerary-container">
                        <div className="itinerary-tittle">
                            <h1>Marcos Amuchastegui </h1>
                        </div>
                        <h2>My Itineraries</h2>
                        <div className="itinerary-user">
                            <div className="itinerary-card">
                                <img src="http://drive.google.com/uc?export=view&id=1QEBekGnFzkNJJWzEAZOU18lJQwXLhq0O" alt="" />
                            </div>
                            <div className="itineraries">
                                <div className="info-itinerary">
                                    <h2>El Calafate</h2>
                                    <h3> - Ice rivers</h3>
                                </div>
                                <div className="info-itinerary">
                                    <h2>Ciudad de Buenos Aires</h2>
                                    <h3> - Argentine political history</h3>
                                    <h3> - Recreation afternoon</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MyTineraries;