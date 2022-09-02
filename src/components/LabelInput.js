import '../styles/NewCity.css'
export default function Input(props) {
        const inputs = props.inputObj
        
        if (inputs.type !== "textarea") {
            return (
                <>
                    <label key={inputs._id} className="Form-label">{inputs.name}:
                        <input className="Form-input" type={inputs.type} name={inputs.name} src={inputs.src? inputs.src:""} min={inputs.min? inputs.min:null} max={inputs.max? inputs.max:null} minlength={inputs.minlength? inputs.minlength:null} required />
                    </label>
                </>
            );
        } else {
            return (
                <>
                    <label key={inputs._id} className="Form-label">{inputs.name}:
                        <textarea className="Form-input" type={inputs.type} name={inputs.name} minlength= {inputs.minlength} rows={inputs.rows} cols={inputs.cols} required />
                    </label>
                </>
            );
        }

    }
