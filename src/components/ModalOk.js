import '../styles/Modals.css'

export default function ModalOk(props) {

    return (
        <>
            <div className="Modal-div">
                <h2 className="Modal-title Modal-title-ok">{props.msgOk[0]}</h2>
                <p className="Modal-paragraph">{props.msgOk[1]}</p>
                <a href="#" className="Modal-a Modal-a-ok" onClick={props.closeModal}>{props.msgOk[2]}</a>
            </div>
        </>
    );
}