import '../styles/Header.css';
import {Link as LinkRouter} from 'react-router-dom'
import { useState } from 'react';

const pages = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'},
    {_id: 103, name: 'NewCity', linkTo: '/newcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

function Header() {
    const [open, setOpen] = useState(false)
    return (
    <>
    <div className='Header-container'>
        <header>
            <h1>MyTinerary</h1>
            <nav>
                    {pages.map(linkCreator)}
                    <div>
                        <button className="Header-link"><img src='./images/add-user.png' alt="add-user"></img></button>
                        <div className='Header-logs'>
                            {
                            open
                                ? <ul>
                                    <li><LinkRouter className="Header-link" to='/'>Log in</LinkRouter></li>
                                    <li><LinkRouter className="Header-link" to='/'>Sign up</LinkRouter></li>
                                </ul>
                                : null
                            }
                        </div>
                    </div>
                </nav>
        </header>
    </div>
    </>
    );
    }

export default Header;
