import '../styles/Welcome.css'
import Logo from '../images/logo-2.png'
import Home from '../pages/Home'

function Welcome() {
  return (
    <>
        <div className="Welcome-main">
            <div className="Welcome-text">
                <img src={Logo}></img>
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                <a className="Welcome-btn" href={Home}>ENTRAR</a>
            </div>
        </div>
    </>
  );
}

export default Welcome;
