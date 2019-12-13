import React from 'react';
import Select from '@material-ui/core/Select'
import { withTranslation } from "react-i18next";
import i18n from '../i18n';
import { appConstants } from "../constants/app.constants";
import uuid from "uuidv4";
const options = [{ name: "Argentina", key: 'es_AR', }, { name: "Estados Unidos", key: 'en_US' }];
class Footer extends React.Component {

    setLanguage = async (ev) => {
        await i18n.changeLanguage(ev.target.value);
    }

    render() {
        const { t } = this.props;
        const { setLanguage } = this;
        return (
            <div>
                <div id="footer" style={{ display: 'flex' }}>
                    <div style={{ display: 'block', marginLeft: '16%' }}> trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Alemania
                    <div>
                            <ul class="footer__social-list">
                                <li style={{ display: 'inline-block' }} ><a href="https://www.facebook.com/trivagoMX" target="_blank" rel="noopener noreferrer" class="footer__social-icon">
                                    <span class="icon-ic footer__social-list-ic icon-contain icon-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24">
                                            <path class="svg-color--primary" fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 5.6h-1.5s-.6.3-.6.5v1.6H15c-.1 1.2-.3 2.3-.3 2.3h-1.9v6.8H10V12H8.7V9.7h1.4V7.8c0-.3-.1-2.6 2.9-2.6h2.1c-.1 1-.1 2.1-.1 2.4z"></path></svg>
                                    </span></a></li>
                                <li style={{ display: 'inline-block' }}><a href="https://twitter.com/trivago" target="_blank" rel="noopener noreferrer" class="footer__social-icon">
                                    <span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path class="svg-color--primary" fill="#fff" d="M13 2C7.5 2 3 6.5 3 12s4.5 10 10 10 10-4.5 10-10S18.5 2 13 2zm5.6 7.9v.4c0 4.4-3.6 7.9-8 7.9-1.6 0-3-.5-4.3-1.2h.4c1.4 0 2.7-.5 3.8-1.3h-.2c-1.2 0-2.2-.8-2.6-1.9h.5c.3 0 .5 0 .8-.1-.5-.1-1-.3-1.4-.7-.5-.5-.9-1.2-.9-2v-.1c.4.2.8.3 1.3.3-.5-.3-.8-.7-1.1-1.1V9c0-.5.1-1 .4-1.4.3.3.6.7.9.9l.2.2c.6.5 1.3.9 2.1 1.2.1 0 .2.1.3.1.3.1.7.2 1 .3.1 0 .2 0 .3.1.3 0 .6.1 1 .1-.1-.2-.1-.5-.1-.7 0-.4.1-.8.2-1.1.1-.3.3-.6.5-.8.1-.1.2-.2.3-.2.3-.3.7-.5 1.1-.6.3-.1.5-.1.7-.1.8 0 1.5.4 2.1.9.1 0 .2-.1.4-.1.5-.1 1-.3 1.4-.6 0 .1 0 .2-.1.2-.2.6-.6 1-1.1 1.3v.1c.5-.1 1-.2 1.5-.5-.4.6-.9 1.1-1.4 1.6z"></path></svg></span></a></li>
                                <li style={{ display: 'inline-block' }}><a href="https://instagram.com/trivago/" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><circle class="svg-color--primary" fill="#FFF" cx="12" cy="12" r="2.25"></circle><path class="svg-color--primary" fill="#FFF" d="M17.49 9.27c-.03-.65-.14-1.01-.23-1.25-.12-.31-.27-.54-.51-.77-.23-.24-.46-.39-.77-.51-.24-.09-.6-.2-1.25-.23-.72-.03-.93-.04-2.73-.04s-2.01.01-2.73.04c-.65.03-1.01.14-1.25.23-.31.12-.54.27-.77.51-.24.23-.39.46-.51.77-.09.24-.2.6-.23 1.25-.03.72-.04.93-.04 2.73s.01 2.01.04 2.73c.03.65.14 1.01.23 1.25.12.31.27.54.51.77.23.24.46.39.77.51.24.09.6.2 1.25.23.72.03.93.04 2.73.04s2.01-.01 2.73-.04c.65-.03 1.01-.14 1.25-.23.31-.12.54-.27.77-.51.24-.23.39-.46.51-.77.09-.24.2-.6.23-1.25.03-.72.04-.93.04-2.73s-.01-2.01-.04-2.73zM12 15.46c-1.91 0-3.46-1.55-3.46-3.46S10.09 8.54 12 8.54s3.46 1.55 3.46 3.46-1.55 3.46-3.46 3.46zm3.6-6.25c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81.45 0 .81.36.81.81 0 .45-.36.81-.81.81z"></path><path class="svg-color--primary" fill="#FFF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.7 12.78c-.03.72-.14 1.21-.31 1.64-.17.44-.4.82-.78 1.19-.37.38-.75.61-1.19.78-.43.17-.92.28-1.64.31-.72.04-.95.05-2.78.05s-2.06-.01-2.78-.05c-.72-.03-1.21-.14-1.64-.31-.44-.17-.82-.4-1.19-.78-.38-.37-.61-.75-.78-1.19-.17-.43-.28-.92-.31-1.64-.04-.72-.05-.95-.05-2.78s.01-2.06.05-2.78c.03-.72.14-1.21.31-1.64.17-.44.4-.82.78-1.19.37-.38.75-.61 1.19-.78.43-.17.92-.28 1.64-.32.72-.03.95-.04 2.78-.04s2.06.01 2.78.04c.72.04 1.21.15 1.64.32.44.17.82.4 1.19.78.38.37.61.75.78 1.19.17.43.28.92.31 1.64.04.72.05.95.05 2.78s-.01 2.06-.05 2.78z"></path></svg></span></a></li>
                                <li style={{ display: 'inline-block' }}><a href="https://www.youtube.com/user/trivago" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path class="svg-color--primary" fill="#fff" d="M10 9l5 3-5 3V9zm12 3c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-3-2.6S19 7 16.6 7H7.4S5 7 5 9.4v5.2S5 17 7.4 17h9.2s2.4 0 2.4-2.4V9.4z"></path></svg></span></a></li>
                                <li style={{ display: 'inline-block' }} ><a href="https://www.linkedin.com/company/trivagonv/" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path class="svg-color--primary" fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM8.7 17.4H6.2V9.7h2.6v7.7zM7.4 8.7C6.6 8.7 6 8.1 6 7.3 6 6.6 6.6 6 7.5 6s1.4.6 1.4 1.3c0 .8-.6 1.4-1.5 1.4zM18 17.4h-2.6v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3.9-.1.2-.1.4-.1.6v4.3h-2.6V9.7h2.6v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.4z"></path></svg></span></a></li>
                            </ul></div>
                    </div>
                    <div style={{ backgroundColor: '#eee', height: '46px', marginLeft: '16%', display: 'block' }}>
                        <Select
                            onChange={(ev) => {
                                setLanguage(ev);
                            }}
                            defaultValue="es_AR"
                        >
                            {Object.keys(appConstants.languages).map(key => (
                                <option key={uuid} value={key}> {t(appConstants.languages[key].name)}</option>
                            ))}
                        </Select>
                    </div>
                </div>


                <div id="footerTriv">
                    <svg version="1.1" width="102" height="32" viewBox="0 0 102 32" class="footer__logo" aria-labelledby="footer-logo-id" role="img" focusable="false" tabindex="-1"><title id="footer-logo-id">trivago</title><path d="M33.706,6.989h5.441l4.133,11.149h0.066l3.83-11.149h5.071L45.8,23.377h-5.34" fill="#f48f00"></path><path d="M13.971,11.018H9V16.5c0,0.93.082,2.119,0.959,2.655a4.649,4.649,0,0,0,2.9.283,2.242,2.242,0,0,0,1.107-.386v4.2a10.114,10.114,0,0,1-1.938.4c-3.556.359-8.54-.253-8.54-4.838v-7.8H0V6.988H3.492V2.153H9V6.989h4.97v4.03Zm14.1-4.03h4.97V23.377h-4.97V6.989Zm-0.2-4.311a2.676,2.676,0,1,1,5.351,0,2.677,2.677,0,0,1-5.353,0" fill="#007faf"></path><path d="M90.124,15.195c0,2.215,1.289,4.13,3.648,4.13s3.647-1.915,3.647-4.131-1.287-4.133-3.647-4.133-3.647,1.917-3.648,4.134m-4.556,0a8.224,8.224,0,0,1,14.711-5.43,9.491,9.491,0,0,1,.687,9.766,8.214,8.214,0,0,1-15.4-4.336" fill="#c94a38"></path><path d="M80.24,6.973v2.2H80.164a3.041,3.041,0,0,0-.574-0.613c-3.254-2.8-8.812-2.238-10.915,1.679a11.506,11.506,0,0,0-.924,6.812c0.283,2.077,1.05,4.275,2.879,5.478a7.739,7.739,0,0,0,6.936.71,4.8,4.8,0,0,0,2.075-1.572H79.7v1.588a3.9,3.9,0,0,1-.984,2.881c-1.449,1.493-4.218,1.4-6.079.894a9.223,9.223,0,0,1-2.914-1.307l-2.451,3.6a11.307,11.307,0,0,0,3.906,1.9c3.583,0.949,8.543.928,11.312-1.921,1.561-1.606,2.2-3.96,2.2-7.06V6.971H80.242ZM78.984,18.2a3.707,3.707,0,0,1-5.4,0,5.013,5.013,0,0,1,0-6,3.707,3.707,0,0,1,5.4,0,5.011,5.011,0,0,1,0,6c-0.639.763,0.641-.763,0,0v0Z" fill="#c94a38"></path><path d="M15.314,6.989h5.105V9.675h0.051A5.715,5.715,0,0,1,22.384,7.4a6.338,6.338,0,0,1,4.482-.6v4.6c-1.029-.278-3.2-0.715-4.717.211-0.96.586-1.731,1.288-1.731,4.929v6.839H15.313V6.989h0Z" fill="#007faf"></path><path d="M56.992,16.844c-1,.62-1.683,1.829-0.763,2.775,0.9,0.922,2.522.829,3.632,0.441a2.98,2.98,0,0,0,2.2-2.784V16.258c0.017,0-3.794-.208-5.069.585h0Zm5.07,4.518H61.969a5.079,5.079,0,0,1-2.232,1.852c-3.563,1.464-8.748-.019-8.75-4.492,0-4.655,5.07-5.606,8.784-5.712,0.817-.021,1.572-0.034,2.267-0.034a2.62,2.62,0,0,0-.957-2.132,4.243,4.243,0,0,0-4.535-.268A6.2,6.2,0,0,0,54.716,12L52.028,9.248A9.255,9.255,0,0,1,55.32,7.282a11.844,11.844,0,0,1,7.044-.27,5.625,5.625,0,0,1,3.952,4.437,17.479,17.479,0,0,1,.314,3.61v8.317H62.063V21.362h0Z" fill="#f48f00"></path></svg>
                    <div> <small>

                        Copyright 2019 trivago | Todos los derechos reservados.</small> </div>
                </div>


            </div>

        );
    }
}


const componenteTraducido = withTranslation()(Footer);
export { componenteTraducido as Footer };