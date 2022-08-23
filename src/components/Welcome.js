import '../styles/Welcome.css'
import CallToAction from './CallToAction'

function Welcome() {
  return (
    <>
        <div className="Welcome-main">
            <div className="Welcome-text">
                <img src='images/logo-white.png' />
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                <CallToAction linkTo='cities' buttonText='START TRIP' />
            </div>
        </div>
    </>
  );
}

export default Welcome;
