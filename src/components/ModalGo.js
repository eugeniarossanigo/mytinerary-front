import '../styles/Modals.css'

export default function ModalGo(props) {

    return (
        <>
            <div className="Modal-div">
                <h2 className="Modal-title Modal-title-go">{props.msgGo[0]}</h2>
                <p className="Modal-paragraph">{props.msgGo[1]}</p>
                <a href="/" className="Modal-a Modal-a-go">{props.msgGo[2]}</a>
            </div>
        </>
    );
}