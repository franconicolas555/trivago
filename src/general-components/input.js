import React from 'react';




function Input(props) {
    console.log(props)
    return (
        <div class="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
        </div>
    )

}

export default Input;