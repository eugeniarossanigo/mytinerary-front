import {useState} from 'react'
import PagesHeader from './PagesHeader';

export default function HamburguerMenu(props) {
    const [open, setOpen] = useState(false)
    const handleClick = () => { open ? setOpen(false) : setOpen(true) }

    return (
        <>
            <nav className="HamburguerMenu">
                <button className="Header-link" onClick={handleClick}><img src='/images/menu.png' alt="menu"></img></button>
                <div>
                    {
                    open? <div className='Hamburguer-logs'>
                            <PagesHeader logged={props.logged} role={props.role} />
                        </div>
                    : null
                    }
                </div>
            </nav>
        </>
    )
}
