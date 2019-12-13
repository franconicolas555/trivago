import React from 'react';




function Select(props) {
    console.log(props)
    return (
        <select onChange={(ev) => props.onHandleChange(ev)}>
            {props.options.map(option => {
                return (
                    <option value={option.value}>{option.name}</option>
                )
            })}
        </select>
    );

}

export default Select;