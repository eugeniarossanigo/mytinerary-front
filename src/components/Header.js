import '../styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'

const pages = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'},
    {_id: 103, name: 'NewCity', linkTo: '/newcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

function Header() {
    return (
    <>
    <div className='Header-container'>
        <header>
            <h1>MyTinerary</h1>
            <nav>
                {pages.map(linkCreator)}
                <LinkRouter className="Header-link" to='/'><img src='./images/add-user.png' alt="add-user"></img></LinkRouter>
            </nav>
        </header>
    </div>
    </>
    );
    }

export default Header;
