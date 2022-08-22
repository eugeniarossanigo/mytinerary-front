import '../styles/Arrow.css'

function Arrow (props) {
    return (
        <>
            <button className="Arrow-btn" onClick={props.click}>
                <img src={props.icon} alt="arrow" />
            </button>
        </>
    )
}

export default Arrow
