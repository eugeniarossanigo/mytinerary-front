import {Link as LinkRouter} from 'react-router-dom'

export default function NavigationMenu(props) {
    const pages = props.logged? props.pages : props.pages.slice(0,2)
    const logs = props.logged? props.logsOut : props.logsIn
    const open = props.open

    return (
        <>
            <nav className="NavigationMenu">
                {pages.map(props.link)}
                <div>
                    <button className="Header-link" onClick={props.click}><img src='./images/add-user.png' alt="add-user"></img></button>
                    <div className='Header-logs'>
                        {
                        open? <div>
                                {logs.map(props.link)}
                                {/* <li><LinkRouter className="Header-link-log" to='/'>Log in</LinkRouter></li>
                                <li><LinkRouter className="Header-link-log" to='/'>Sign up</LinkRouter></li> */}
                            </div> : null
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

