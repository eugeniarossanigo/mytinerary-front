import '../styles/NewCity.css'

export default function InputCities(props) {
        const inputs = props.inputObj
        const values = props.values

        if (inputs.type !== "textarea") {
            let value = values && inputs.type === "date"? new Date(values).toISOString().substring(0,10) : values
            return (
                <>
                    <label key={inputs._id} className="Form-label">{inputs.name}:
                        <input className="Form-input" type={inputs.type} name={inputs.name} min={inputs.min? inputs.min : null} max={inputs.max? inputs.max : null} defaultValue={value? value: ""} required />
                    </label>
                </>
            );
        } else {
            return (
                <>
                    <label key={inputs._id} className="Form-label">{inputs.name}:
                        <textarea className="Form-input" type={inputs.type} name={inputs.name} minlength= {inputs.minlength} rows={inputs.rows} cols={inputs.cols} defaultValue={values? values: ""} required />
                    </label>
                </>
            );
        }

    }
