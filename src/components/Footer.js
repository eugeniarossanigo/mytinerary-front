import '../styles/Footer.css';
import {Link as LinkRouter} from 'react-router-dom'

const pages = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'},
    {_id: 103, name: 'NewCity', linkTo: '/newcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Footer-link" to={page.linkTo}>{page.name}</LinkRouter>

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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
                        <a href="https://www.google.com/search?channel=fs&client=ubuntu&q=terminos+y+condiciones" rel="noopener">Terms and Conditions</a>
                        <a href="mailto:mytinerary@gmail.com">Contact Us</a>
                    </div>
                </div>
                <nav className="Footer-social">
                    <ul>
                        <li><a href="https://www.instagram.com/" rel="noopener"><i className="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="https://api.whatsapp.com/send/?phone=5490000000000&text&app_absent=0" rel="noopener"><i className="fab fa-whatsapp fa-2x"></i></a></li>
                        <li><a href="https://www.facebook.com/" rel="noopener"><i className="fab fa-facebook fa-2x"></i></a></li>
                        <li><a href="https://twitter.com/" rel="noopener"><i className="fab fa-twitter fa-2x"></i></a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
