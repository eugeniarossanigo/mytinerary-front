import React from "react";
import "../styles/Details.css"




function Details() {
    return (
        <>
            <div className="detail-container">
                <div className="img-container">
                    <img src="./jonatan-lewczuk-J5wQl4Wqal8-unsplash.jpg" alt=""/>
                </div>
                <div className="text">
                    <h2>DETAILS</h2>
                    <div className="caracteristicas">
                        <h3>City:</h3>
                        <p>La falda</p>
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
        </>
    );
}
export default Details;