import LabelInput from "../components/LabelInput";
import '../styles/EditCity.css'

const inputsArray = [
    {_id: 301, name: "Photo", type: "text"},
    {_id: 302, name: "City", type: "text"},
    {_id: 303, name: "Country", type: "text"},
    {_id: 303, name: "Population", type: "number", min: "1"},
    {_id: 303, name: "Fundation", type: "number"},
    {_id: 303, name: "Description", type: "textarea", minlength:"10", cols: "27", rows:"5"}
    ]

function EditCity() {
    return (
        <>
        <div className="editCity-container">
            <div>
            <form id="Form-city">
                <h2>EDIT CITY</h2>
                    {inputsArray.map(inputObj => <LabelInput inputObj={inputObj}/>)}
                    <div className="button-conteiner">
                        <button className="Form-btn" type="submit">SEND</button>
                    </div>
                </form>
                <div id="Form-array"></div>
            </div>
        </div>
        </>
    );
}

export default EditCity