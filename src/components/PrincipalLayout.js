import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from "react-i18next";
import { appConstants } from "../constants/app.constants";
import Select from '@material-ui/core/Select'
import i18n from '../i18n';
import LogoTrivago from '../images/trivago.png'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    img: {
        width: '102px'
    },

};



//componente header que se incluyo el framework i18next para poder brindarle un marco de internacionalizacion
class PrincipalLayout extends React.Component {
    onHandleChange = async (ev) => {
        await i18n.changeLanguage(ev.target.value);
    }


    render() {
        const { classes, t } = this.props;
        const { onHandleChange } = this
        return (
            <div className={classes.root}>
                <AppBar position="static" color="inherit">
                    <Toolbar>

                        <img src={LogoTrivago} alt="Logo" className={classes.img} />
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                        </Typography>
                        <Select
                            variant="outlined"
                            onChange={onHandleChange}
                            defaultValue="es_AR"
                        >
                            {Object.keys(appConstants.languages).map(key => (
                                <option key={key} value={key}> {t(appConstants.languages[key].name)}</option>
                            ))}
                        </Select>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
//hoc withStyles de material ui para el estilado 
// Se utiliza el HOC withTranslation donde obtiene la función t y la instancia i18n dentro de su componente
const Traduccion = withTranslation()(PrincipalLayout);
const component = withStyles(styles)(Traduccion);
export { component as PrincipalLayout };