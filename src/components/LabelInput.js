import '../styles/NewCity.css'
export default function Input(props) {
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

// import '../styles/NewCity.css'
// export default function Input(props) {
//         const inputs = props.inputObj
//         const values = props.values
        
//         if (inputs.type === "hidden") {
//             return (
//                 <>
//                     <label key={inputs._id} className="Form-label">{inputs.name}:
//                         <input className="Form-input" type={inputs.type} name={inputs.name} defaultValue={values} />
//                     </label>
//                 </>
//             );
//         } else if (inputs.type === "date") {
//             let value = new Date(values).toISOString().substring(0,10)
//             return (
//                 <>
//                     <label key={inputs._id} className="Form-label">{inputs.name}:
//                         <input className="Form-input" type={inputs.type} name={inputs.name} max={inputs.max} defaultValue={value} required />
//                     </label>
//                 </>
//             );
//         } else if (inputs.type !== "textarea") {
//             return (
//                 <>
//                     <label key={inputs._id} className="Form-label">{inputs.name}:
//                         <input className="Form-input" type={inputs.type} name={inputs.name} min={inputs.min? inputs.min:null} max={inputs.max? inputs.max:null} defaultValue={values} required />
//                     </label>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     <label key={inputs._id} className="Form-label">{inputs.name}:
//                         <textarea className="Form-input" type={inputs.type} name={inputs.name} minlength= {inputs.minlength} rows={inputs.rows} cols={inputs.cols} defaultValue={values? values: ""} required />
//                     </label>
//                 </>
//             );
//         }

//     }


    // else if (inputs.type === "date") {
    //     const date = new Date(values).getFullYear()
    //     return (
    //         <>
    //             <label key={inputs._id} className="Form-label">{inputs.name}:
    //                 <input className="Form-input" type={inputs.type} name={inputs.name} max={inputs.max} defaultValue={date} required />
    //             </label>
    //         </>
    //     );

// import '../styles/NewCity.css'
// export default function Input(props) {
//         const inputs = props.inputObj
//         const cities = props.citiesArray
//         console.log(cities)
        
//         if (inputs.type !== "textarea") {
//             return (
//                 <>
//                     <label key={inputs._id} className="Form-label">{inputs.name}:
//                         <input className="Form-input" type={inputs.type} name={inputs.name} src={inputs.src? inputs.src:""} min={inputs.min? inputs.min:null} max={inputs.max? inputs.max:null} minlength={inputs.minlength? inputs.minlength:null} required/>
//                     </label>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     <label key={inputs._id} className="Form-label">{inputs.name}:
//                         <textarea className="Form-input" type={inputs.type} name={inputs.name} minlength= {inputs.minlength} rows={inputs.rows} cols={inputs.cols} required />
//                     </label>
//                 </>
//             );
//         }

//     }


