import '../styles/Footer.css';

function Footer() {
    return (
        <div className="Footer-container">
            <footer>
                <img src="images/logo-white.png"></img>
                <div className="Footer-nav" >
                    <a>Terms and Conditions</a>
                    <a>Contact Us</a>
                </div>
                <nav className="Footer-social">
                    <ul>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="https://api.whatsapp.com/send/?phone=5490000000000&text&app_absent=0" target="_blank"><i className="fab fa-whatsapp fa-2x"></i></a></li>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook fa-2x"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-2x"></i></a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
