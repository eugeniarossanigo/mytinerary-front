import '../styles/Welcome.css'

function Welcome() {
  return (
    <>
        <div className="Welcome-main">
            <div className="Welcome-text">
                <img src='images/logo-2.png' />
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                <a className="Welcome-btn" href="#">ENTRAR</a>
            </div>
        </div>
    </>
  );
}

export default Welcome;
