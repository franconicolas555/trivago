import React from 'react';
import Button from '@material-ui/core/Button';
function ButtonTrivago(props) {
    return (
        <Button variant="contained" color={props.color}>
            Buscar
        </Button>
    );

}

export default ButtonTrivago;