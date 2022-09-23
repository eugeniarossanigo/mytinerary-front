
import '../styles/Modals.css'

export default function Modal(props) {

    return (
        <>
            <div className="Modal-div">
                <h2 className="Modal-title Modal-title-go">{props.msg1}</h2>
                <p className="Modal-paragraph">{props.msg2}</p>
                <a href="/" className="Modal-a Modal-a-go">{props.msg3}</a>
            </div>
        </>
    );
}