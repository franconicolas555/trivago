import React from 'react';
import './index.scss'
import { withTranslation } from "react-i18next";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class ContentCarousel extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.hotels.map(hotels => {
                        return (
                            hotels.id === '1' ?
                                <Card key={hotels.id} style={{ display: 'inline-block' }}>
                                    <CardActionArea style={{ display: 'contents' }} >
                                        <img src={hotels.url} alt="Logo" />
                                        <CardContent>
                                            <span id="article">Hoteles en Córdoba Capital</span>
                                            <Typography component="p">
                                                1821 hoteles<strong> Promedio: $3.656</strong>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card >

                                : hotels.id === '2' ?
                                    <Card key={hotels.id} style={{ display: 'inline-block', marginLeft: '3%' }}>
                                        <CardActionArea style={{ display: 'contents' }} >
                                            <img src={hotels.url} alt="Logo" />
                                            <CardContent>
                                                <span id="article">Hoteles en Mar del Plata</span>
                                                <Typography component="p">
                                                    2006 hoteles <strong> Promedio: $6.497</strong>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card >
                                    : hotels.id === '3' ?

                                        <Card key={hotels.id} style={{ display: 'inline-block', marginLeft: '3%' }}>
                                            <CardActionArea style={{ display: 'contents' }} >
                                                <img src={hotels.url} alt="Logo" />
                                                <CardContent>
                                                    <span id="article">Hoteles en Mendoza Provincia</span>
                                                    <Typography component="p">
                                                        4310 hoteles <strong> Promedio: $6.117</strong>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card >
                                        : hotels.id === '4' ?
                                            <Card key={hotels.id} style={{ display: 'inline-block', marginLeft: '3%' }}>
                                                <CardActionArea style={{ display: 'contents' }} >
                                                    <img src={hotels.url} alt="Logo" />
                                                    <CardContent>
                                                        <span id="article">Hoteles en Miami</span>
                                                        <Typography component="p">
                                                            5609 hoteles <strong> Promedio: $42.875</strong>
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card >
                                            : ''
                        )
                    })
                }
            </div>

        );
    }
}

const componenteTraducido = withTranslation()(ContentCarousel);
export { componenteTraducido as ContentCarousel };