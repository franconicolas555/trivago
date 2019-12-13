import React from 'react';
import LogoTrivago from '../images/trivago.png'
import { withTranslation } from "react-i18next";
import './navHeader.scss'
class TitleComponent extends React.Component {

    render() {
        const { t } = this.props
        return (
            <div style={{ display: 'flex', marginTop: '5%', marginLeft: '18%' }}>
                <div style={{ display: 'block' }}><img id="imgLogo" src={LogoTrivago} alt="Logo" /></div>
                <div style={{ display: 'block', marginTop: '2%', marginLeft: '6%' }}>  <span id="spanPrincipal">{t('app.title.principal')}</span>
                    <span id="spanSecondary" >{t('app.title.secondary')}</span>
                </div>
            </div>
        );
    }
}

const componenteTraducido = withTranslation()(TitleComponent);
export { componenteTraducido as TitleComponent };