import '../styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'
import {useState} from 'react'
import NavigationMenu from './NavigationMenu';
import HamburguerMenu from './HamburguerMenu';

const pages = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'},
    {_id: 103, name: 'NewCity', linkTo: '/newcity'},
    {_id: 104, name: 'EditCity', linkTo: '/editcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

function Header() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
    <>
        <div className='Header-container'>
            <header>
                <h1>MyTinerary</h1>
                <NavigationMenu pages={pages} click={handleClick} link={linkCreator} open={open}/>
                <HamburguerMenu pages={pages} click={handleClick} link={linkCreator} open={open}/>
            </header>
        </div>
    </>
    );
    }

export default Header;
