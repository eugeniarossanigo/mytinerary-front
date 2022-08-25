import {Link as LinkRouter} from 'react-router-dom'

export default function HamburguerMenu(props) {
    const pages = props.pages
    const open = props.open

    return (
        <>
            <nav className="HamburguerMenu">
                <button className="Header-link" onClick={props.click}><img src='./images/menu.png' alt="add-user"></img></button>
                <div>
                    {
                    open? <div className='Hamburguer-logs'>
                            {pages.map(props.link)}
                            <p>__________</p>
                            <LinkRouter className="Header-link" to='/'>Log in</LinkRouter>
                            <LinkRouter className="Header-link" to='/'>Sign up</LinkRouter>
                        </div>
                    : null
                    }
                </div>
            </nav>
        </>
    )
}
