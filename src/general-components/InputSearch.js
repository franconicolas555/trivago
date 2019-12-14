import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

// generacion del componente custom de input donde se define el comportamiento de todos los inputs de busqueda
function InputSearch(props) {
    return (

        <TextField
            label={props.label}
            value={props.value}
            onBlur={(ev) => props.onHandleBlur(ev)}
            onChange={(ev) => props.onHandleChange(ev)}
            variant="outlined"
            onFocus={(ev) => props.onHandleFocus(ev)}
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )

}

export default InputSearch;