import React from 'react';
import Button from '@material-ui/core/Button';
// Generacion de Custom Buttom para que se defina en un solo lugar el comportamiento de todos los botones
function ButtonTrivago(props) {
    return (
        <Button variant="contained" color={props.color}>
            Buscar
        </Button>
    );

}

export default ButtonTrivago;