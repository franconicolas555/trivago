import React from 'react';
import './navHeader.scss'
import { withTranslation } from "react-i18next";
import { data } from '../data.js'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import LogoMagazine from '../images/trivago-magazine.jpg';

class Article extends React.Component {
    state = {
        article: data.article
    }
    render() {
        const { article } = this.state
        const { t } = this.props
        return (
            <div>

                <div>
                    <h2>
                        <span id='title'>{t('app.subtitle.principal')}</span>

                    </h2>
                    <span id='subtitle'>{t('app.subtitle.secondary')}</span>
                </div>

                <div id='content'>
                    <img id='imgMagazine' src={LogoMagazine} alt="Logo" />
                </div>

                <div id='content-article'>
                    {
                        article.map(article => {
                            return (
                                article.id === '1' ?
                                    <Link href={'https://magazine.trivago.com.ar/theme/internacional/'}>
                                        <Card key={article.id} style={{ display: 'inline-block' }}>
                                            <CardActionArea style={{ display: 'contents' }} >
                                                <img src={article.img} alt="Logo" />
                                                <CardContent>
                                                    <span id="article">20+ artículos</span>
                                                    <Typography component="p">

                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card >
                                    </Link>
                                    : article.id === '2' ?
                                        <Link href={'https://magazine.trivago.com.ar/theme/romance/'}>
                                            <Card key={article.id} style={{ display: 'inline-block', marginLeft: '5%' }}>
                                                <CardActionArea style={{ display: 'contents' }} >
                                                    <img src={article.img} alt="Logo" />
                                                    <CardContent>
                                                        <span id="article">20+ artículos</span>
                                                        <Typography component="p">

                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card >
                                        </Link> : article.id === '3' ?
                                            <Link href={'https://magazine.trivago.com.ar/type/playa/'}>
                                                <Card key={article.id} style={{ display: 'inline-block', marginLeft: '9%' }}>
                                                    <CardActionArea style={{ display: 'contents' }} >
                                                        <img src={article.img} alt="Logo" />
                                                        <CardContent>
                                                            <span id="article">20+ artículos</span>
                                                            <Typography component="p">

                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card >
                                            </Link> : article.id === '4' ?
                                                <Link href={'https://magazine.trivago.com.ar/?_gl=1%2asczdop%2a_gcl_aw%2aR0NMLjE1NzYyNzU1NzAuQ2p3S0NBaUFpczN2QlJCZEVpd0FIWEIyOUhjTTBQbjYwWDNWVWpaaHVhNjB3QzRHOXdUd0o4TVZQclBYcFlGbkhHd1g1OHcxTkZDZFBCb0NvSk1RQXZEX0J3RQ..'}>
                                                    <Card key={article.id} style={{ display: 'inline-block', marginLeft: '14%' }}>
                                                        <CardActionArea style={{ display: 'contents' }} >
                                                            <img src={article.img} alt="Logo" />
                                                            <CardContent>
                                                                <span id="article">20+ artículos</span>
                                                                <Typography component="p">

                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card >
                                                </Link> : ''
                            )
                        })
                    }
                </div>


            </div>
        );
    }
}

const Traduccion = withTranslation()(Article);
export { Traduccion as Article };