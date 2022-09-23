import '../styles/Header.css';
import {useState} from 'react'
import NavigationMenu from './NavigationMenu';
import HamburguerMenu from './HamburguerMenu';
import { useGetUserLogoutMutation } from '../features/usersAPI';
import {Link as LinkRouter, useNavigate} from 'react-router-dom';
import Modal from './Modal';
import '../styles/Modals.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCredentials } from '../features/userSlice';

export default function Header() {
    const modal = document.querySelector('.Modal-container-ok')
    const [userLogout] = useGetUserLogoutMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)
    const logged = useSelector(state => state.auth.logged)

    const [open, setOpen] = useState(false)
    const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    let mytinerary = '/mytinerary/'+ user?.id

    const closeModal = (e) => {
        e.preventDefault()
        modal.classList.remove('Modal-container--show')
    }

    const handleOut = () => {
        let mail = user?.mail
        userLogout({ mail })
            .then(response => {
                localStorage.removeItem('token')
                dispatch(deleteCredentials())
                modal.classList.add('Modal-container--show')
                navigate("/", {replace:true})
            })
            .catch(error => 
                console.log(error))
    }

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
                <Modal closeModal={closeModal} msg1={"Bye!!"} msg2={"See you soon!"} msg3={"CLOSE"}/>
            </div>
        </>
    )
}
