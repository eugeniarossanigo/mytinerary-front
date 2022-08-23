import '../styles/Footer.css';
import {Link as LinkRouter} from 'react-router-dom'

const pages = [
    {name: 'Home', linkTo: '/'},
    {name: 'Cities', linkTo: '/cities'},
    {name: 'NewCity', linkTo: '/newcity'},
    
]

const linkCreator = (page) => <LinkRouter className="Footer-link" to={page.linkTo}>{page.name}</LinkRouter>

function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className="Footer-container">
            <footer>
                <img src="images/logo-white.png" alt="logo" onClick={scrollToTop}></img>
                <div className="Footer-nav">
                    <nav>
                        {pages.map(linkCreator)}
                    </nav>
                    <div>
                        <a>Terms and Conditions</a>
                        <a>Contact Us</a>
                    </div>
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
