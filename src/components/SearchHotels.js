import React from 'react';
import './navHeader.scss'
import M from 'materialize-css';
import Input from '../general-components/input'
import { withTranslation } from "react-i18next";
class SearchHotels extends React.Component {

    componentDidMount = () => {
    }

    onHandleChange = (ev) => {
    }

    render() {
        const { onHandleChange } = this
        const { t } = this.props
        return (
            <div>
                <h1>
                    <span >{t('app.title.principal')}</span>
                    <span >{t('app.title.secondary')}</span>
                </h1>

                <Input></Input>
            </div>
        );
    }
}

const componenteTraducido = withTranslation()(SearchHotels);
export { componenteTraducido as SearchHotels };