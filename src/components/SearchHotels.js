import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';

import { withTranslation } from "react-i18next";
import { data } from '../data.js'
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as moment from 'moment';
import 'moment/locale/es';
//import CardHotels from './CardHotels.js';
import MomentUtils from "@date-io/moment";
import InputSearch from '../general-components/InputSearch.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import SelectTrivago from '../general-components/SelectTrivago'
import ButtonTrivago from '../general-components/ButtonTrivago'
import Grid from '@material-ui/core/Grid';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]




const styles = {
    root: {
        flexGrow: 1,
        marginTop: '5%'
    }
}

class SearchHotels extends React.Component {
    state = {
        start: new Date(),
        end: new Date(),
        open: false,
        cities: data.cities,
        hotels: data.hotels,
        listFilter: [],
        hotelFilter: [],
        optSelected: '',
        IsOpen: false,
        locale: 'es',
        loading: false
    }
    //mock de los datos de la ciudad
    componentDidMount = () => {

        this.setState({ citiesFilter: data.cities })
    }

    handleDateChangeSalida = async (dateselect) => {
        await this.setState({ stard: dateselect })
        await this.setState({ end: dateselect })
        await this.setState({ IsOpen: true })

    }

    handleDateChangeLlegada = (dateselect) => {
        this.setState({ end: dateselect })
        this.setState({ IsOpen: false })
    }


    onHandleFocus = () => {
        //cambia de estado a true para abir el buscador y poder seleccionar una ciudad
        this.setState({ open: true })
    }

    onHandleBlur = () => {
        //cambia de estado a false para cerrar el buscador
        this.setState({ open: false })
    }

    //recorre una lista ,  compara el codigo para guardar el hotel
    onClickSelect = (city) => {

        this.setState({ optSelected: city.name })
        let hotels = this.state.hotels
        let filter = []

        // eslint-disable-next-line 
        hotels.map(hotel => {
            if (parseInt(hotel.codCity) === parseInt(city.codCity)) {
                let obj = hotel
                filter.push(obj)
            }
        })
        this.setState({ hotelFilter: filter })
    }

    // realizo el filtrado del valor que se ingresa en el input
    onHandleChange = (ev) => {
        this.setState({ loading: true })
        let search = ev.target.value
        let cities = this.state.cities
        let filter = []
        // eslint-disable-next-line
        try {
            cities.map(city => {
                if (city.name.toLowerCase().startsWith(search.toLowerCase())) {
                    let obj = {}
                    obj.name = city.name
                    obj.description = city.description
                    filter.push(obj)
                }
            })
            this.setState({ citiesFilter: filter })
            this.setState({ optSelected: ev.target.value })

        } catch (error) {
            console.log(error)
        }

        this.setState({ loading: false })

    }

    render() {
        const { stard, end, open, optSelected, IsOpen, locale, citiesFilter, loading } = this.state
        const { classes, t } = this.props
        const { onHandleBlur, onHandleChange, onHandleFocus } = this
        return (
            <div className={classes.root}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}   >
                        <InputSearch
                            label={t('app.btn.search')}
                            value={optSelected}
                            onHandleBlur={onHandleBlur}
                            onHandleChange={onHandleChange}
                            onHandleFocus={onHandleFocus}
                        />



                        {open ?
                            loading ?
                                <Paper style={{ width: 'fit-content', position: 'absolute', marginTop: '4%' }}>
                                    <CircularProgress></CircularProgress>
                                </Paper>
                                :
                                <Paper style={{ width: 'fit-content', position: 'absolute', marginTop: '%' }}>
                                    {citiesFilter.map((city, index) => {
                                        return (
                                            <MenuItem value={city.name} onMouseDown={ev => this.onClickSelect(city)} key={index} className={classes.menuItem}>
                                                <ListItemIcon className={classes.icon}>
                                                    <span class="icon-ic ssg-suggestion__icon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="24" height="24" viewBox="0 0 24 24"><g class="svg-color--primary" fill="#007FAD" fill-rule="evenodd">
                                                        <path d="M12 5C9.8 5 8 6.8 8 9s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 7c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z"></path>
                                                        <path d="M18 8.2C17.6 5.3 15 3 12 3S6.4 5.3 6 8.2V9c0 .7.1 1.4.4 2.1l4.8 9.4c.2.3.5.5.9.5s.7-.2.9-.5l4.8-9.4c.1-.7.2-1.4.2-2.1v-.8zm-1.3 2.5L12 20l-4.7-9.3C7.1 10.2 7 9.6 7 9v-.6C7.4 5.9 9.5 4 12 4s4.6 1.9 5 4.4V9c0 .6-.1 1.2-.3 1.7z"></path>
                                                    </g></svg></span>
                                                </ListItemIcon>
                                                <ListItemText classes={{ primary: classes.primary }} inset primary={city.name} secondary={city.description} />
                                            </MenuItem>)
                                    })}
                                </Paper>
                            : ''
                        }

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale} >

                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                disableToolbar
                                inputVariant="outlined"
                                label={t('app.label.start')}
                                format="DD/MM/YYYY"
                                value={stard}
                                disablePast
                                locale={locale}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => this.handleDateChangeSalida(date)}
                            />


                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                disableToolbar
                                inputVariant="outlined"
                                label={t('app.label.end')}
                                format="DD/MM/YYYY"
                                value={end}
                                locale={locale}
                                disablePast
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => this.handleDateChangeLlegada(date)}
                                open={IsOpen}

                            />

                        </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid item xs={6} sm={6} md={12} lg={1} xl={1}>
                        <SelectTrivago
                            options={options}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
                        <ButtonTrivago
                            color="primary"
                        />
                    </Grid>

                </Grid>
            </div >

        )
    }
}
//hoc withStyles de material ui para el estilado
// Se utiliza el HOC withTranslation donde obtiene la función t y la instancia i18n dentro de su componente
const componenteTraducido = withTranslation()(SearchHotels);
const componente = withStyles(styles)(componenteTraducido);
export { componente as SearchHotels };