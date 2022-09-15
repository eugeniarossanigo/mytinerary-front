import '../styles/Header.css';
import {useState, useEffect} from 'react'
import NavigationMenu from './NavigationMenu';
import HamburguerMenu from './HamburguerMenu';
import { useGetUserLogoutMutation } from '../features/usersAPI';
import {Link as LinkRouter, useNavigate} from 'react-router-dom';


export default function Header() {
    // let logged = false

    const [logged, setLogged] = useState(false)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    const [userLogout, result] = useGetUserLogoutMutation()
    let userLogged = localStorage.getItem('userLogged') ? JSON.parse(localStorage.getItem('userLogged')) : {}

    useEffect(() => {
        localStorage.getItem('userLogged') && setLogged(true)
    })

    const handleOut = async() => {
        let userMail = { mail: userLogged.mail }
        await userLogout(userMail)
        localStorage.removeItem('userLogged')
        setLogged(false)
        setOpen(false)
        navigate("/", {replace:true})
    }

    return (
        <>
            <div className='Header-container'>
                <header>
                    <h1>MyTinerary</h1>
                    <div>
                        <NavigationMenu logged={logged}/>
                        <HamburguerMenu logged={logged}/>
                        { logged ?
                            <div>
                                <button className="Header-link" onClick={handleClick}><img src={userLogged.photo} alt="add-user"></img></button>
                                    <div className='Header-logs'>
                                        { open? <div>
                                                <LinkRouter key="107" className="Header-link" to='/mytinerary'>{userLogged.name}</LinkRouter>
                                                <div key="108" className="Header-link" onClick={handleOut}>SignOut</div>
                                            </div> : null }
                                    </div>
                            </div>
                        :
                            <div>
                                <button className="Header-link" onClick={handleClick}><img src='./images/add-user.png' alt="add-user"></img></button>
                                    <div className='Header-logs'>
                                        { open? <div>
                                                <LinkRouter key="105" className="Header-link" to='/auth/signin'>SignIn</LinkRouter>
                                                <LinkRouter key="106" className="Header-link" to='/auth/signin'>SignUp</LinkRouter>
                                            </div> : null }
                                    </div>
                            </div>
                            }
                    </div>
                </header>
            </div>
        </>
    )
}
