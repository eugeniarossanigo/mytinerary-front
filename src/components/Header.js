import '../styles/Header.css';
import {useState, useEffect} from 'react'
import NavigationMenu from './NavigationMenu';
import HamburguerMenu from './HamburguerMenu';
import { useGetUserLogoutMutation } from '../features/usersAPI';
import {Link as LinkRouter, useNavigate} from 'react-router-dom';
import ModalOk from './ModalOk';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCredentials } from '../features/userSlice';

export default function Header() {
    const modalOk = document.querySelector('.Modal-container-ok')
    const [userLogout, result] = useGetUserLogoutMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [logged, setLogged] = useState(false)
    const user = useSelector(state => state.auth.user)
    const logged = useSelector(state => state.auth.logged)

    const [open, setOpen] = useState(false)
    const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    // let userLogged = localStorage.getItem('userLogged') ? JSON.parse(localStorage.getItem('userLogged')) : {}
    let mytinerary = '/mytinerary/'+ user?.id

    // useEffect(() => {
    //     // localStorage.getItem('userLogged') && setLogged(true)
    // })

    const closeModal = (e) => {
        e.preventDefault()
        modalOk.classList.remove('Modal-container--show')
    }

    const handleOut = () => {
        let mail = user?.mail
        userLogout({ mail })
            .then(response => {
                localStorage.removeItem('token')
                dispatch(deleteCredentials())
                navigate("/",{replace:true})
            })
            .catch(error => 
                console.log(error))
    }

    // async function handleOut() {
    //     //let email = JSON.parse(localStorage.getItem('user')).email //primero busco el mail del objeto del localStorage
    //     try {
    //         await userLogout()
    //         localStorage.removeItem('token')
    //         dispatch(deleteCredentials())
    //         navigate("/",{replace:true})
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }
    
    // const handleOut = async() => {
    //     let userMail = { mail: userLogged.mail }
    //     await userLogout(userMail)
    //     localStorage.removeItem('userLogged')
    //     setLogged(false)
    //     setOpen(false)
    //     modalOk.classList.add('Modal-container--show')
    //     navigate("/", {replace:true})
    // }

    return (
        <>
            <div className='Header-container'>
                <header>
                    <h1>MyTinerary</h1>
                    <div>
                        <NavigationMenu logged={logged} role={user?.role} />
                        <HamburguerMenu logged={logged} role={user?.role} />
                        { logged ?
                            <div>
                                <button className="Header-link" onClick={handleClick}><img src={user?.photo} alt="add-user"></img></button>
                                    <div className='Header-logs'>
                                        { open? <div>
                                                <LinkRouter key="107" className="Header-link" to={mytinerary}>{user?.name}</LinkRouter>
                                                <div key="108" className="Header-link" onClick={handleOut}>SignOut</div>
                                            </div> : null }
                                    </div>
                            </div>
                        :
                            <div>
                                <button className="Header-link" onClick={handleClick}><img src='/images/add-user.png' alt="add-user"></img></button>
                                    <div className='Header-logs'>
                                        { open? <div>
                                                <LinkRouter key="105" className="Header-link" to='/auth/signin'>SignIn</LinkRouter>
                                                <LinkRouter key="106" className="Header-link" to='/auth/signup'>SignUp</LinkRouter>
                                            </div> : null }
                                    </div>
                            </div>
                            }
                    </div>
                </header>
            </div>
            <div className="Modal-container Modal-container-ok">
                <ModalOk closeModal={closeModal}  msgOk={["Bye!!", "See you soon!", "CLOSE"]}/>
            </div>
        </>
    )
}
