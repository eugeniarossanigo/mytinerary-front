import '../styles/Welcome.css'

function Welcome() {
  return (
    <>
        <div className="Welcome-main">
            <div className="Welcome-text">
                <img src='images/logo-white.png' />
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                <a className="Welcome-btn" href="#">START TRIP</a>
            </div>
        </div>
    </>
  );
}

export default Welcome;
