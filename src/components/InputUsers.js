import '../styles/SignIn.css'

export default function InputUsers(props) {
        const inputs = props.inputObj
        const values = props.values

    return (
        <>
            <label key={inputs._id} className="Form-label">{inputs.name}:
                <input className="Form-input" type={inputs.type} name={inputs.name} defaultValue={values? values: ""} placeholder={inputs.ph} required />
            </label>
        </>
    );
}
