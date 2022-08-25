import {Link as LinkRouter} from 'react-router-dom'

function CallToAction(props) {
    return (
        <>
            <LinkRouter className="Welcome-btn" to={props.linkTo}>{props.buttonText}</LinkRouter>
        </>

    );
}

export default CallToAction;