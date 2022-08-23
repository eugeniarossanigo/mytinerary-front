import '../styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'

const pages = [
    {name: 'Home', linkTo: '/'},
    {name: 'Cities', linkTo: '/cities'},
    {name: 'NewCity', linkTo: '/newcity'},
    
]

const linkCreator = (page) => <LinkRouter className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

function Header() {
    return (
    <>
    <div className='Header-container'>
        <header>
            <h1>MyTinerary</h1>
            <nav>
                {pages.map(linkCreator)}
                <LinkRouter className="Header-link" to='/'><img src='./images/add-user.png'></img></LinkRouter>
            </nav>
        </header>
    </div>
    </>
    );
    }

export default Header;
