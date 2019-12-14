import React from 'react';
import './index.scss'
import { withTranslation } from "react-i18next";
import { data } from '../data.js'
import Carousel from 'react-material-ui-carousel'
import { ContentCarousel } from './ContentCarousel';

class CarouselImage extends React.Component {
    state = {
        hotels: data.hotels
    }
    render() {
        const { hotels } = this.state
        const { t } = this.props
        return (
            <div>

                <h2 style={{ fontSize: '20px' }}>
                    <span >{t('app.subtitle.principal')}</span>
                </h2>

                <div>

                    <Carousel>
                        <div>
                            <ContentCarousel
                                hotels={hotels}
                            />
                        </div>
                        <div>
                            <ContentCarousel
                                hotels={hotels}
                            />
                        </div>
                    </Carousel>
                </div>
            </div>



        );
    }
}

const traduccion = withTranslation()(CarouselImage);
export { traduccion as CarouselImage };