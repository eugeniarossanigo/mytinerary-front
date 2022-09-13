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

const logsIn = [
    {_id: 105, name: 'SignIn', linkTo: '/auth/signin'},
    {_id: 106, name: 'SignUp', linkTo: '/auth/signup'}
]
const logsOut = [
    {_id: 107, name: 'MyTinerary', linkTo: '/mytinerary'},
    {_id: 108, name: 'SignOut', linkTo: '/'},
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

function Header() {
    let user = JSON.parse(localStorage .getItem('userLogged')) 
    // const [isLogged, setIsLogged] = useState(false)
    // console.log(user.logged)
    // if (user.logged){
    //     setIsLogged(true)
    // }else{
    //     setIsLogged(false)
    // }
    const isLogged = true

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
                <NavigationMenu pages={pages} logsIn={logsIn} logsOut={logsOut} click={handleClick} link={linkCreator} open={open} logged={isLogged}/>
                <HamburguerMenu pages={pages} logsIn={logsIn} logsOut={logsOut} click={handleClick} link={linkCreator} open={open} logged={isLogged}/>
            </header>
        </div>
    </>
    );
    }

export default Header;
