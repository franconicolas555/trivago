import React from 'react';
import Select from 'react-select'
function SelectTrivago(props) {

    const searchStyles = {
        menuPortal: base => ({ ...base, zIndex: 9999 }),
        valueContainer: base => ({
            ...base,
            overflow: 'unset'
        })
    }



    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            name="color"
            defaultValue={props.defaultValue}
            options={props.options}
            placeholder={props.placeholder}
            styles={searchStyles}
            menuPortalTarget={document.body}
        />


    );

}

export default SelectTrivago;