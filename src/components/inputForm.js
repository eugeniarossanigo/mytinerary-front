import React from "react"

export default function InputForm(props) {
    const searchParam = props.searchParam
    
    const findParam = (e) => {
        searchParam(e.target.value)
    }

    return (
        <>
            <div>
                <input id="input-form" type="search" placeholder="🔍 e.g. Rosario" onChange={findParam}></input>
            </div>
        </>
    )
}
