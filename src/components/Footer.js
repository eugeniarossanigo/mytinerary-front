import '../styles/Footer.css';
import Logo from '../images/logo-2.png'

function Footer() {
    return (
        <div className="Footer-container">
            <footer>
                <img src={Logo}></img>
                <div className="Footer-nav" >
                    <a>Terms and Conditions</a>
                    <a>Contact Us</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
