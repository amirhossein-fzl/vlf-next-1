import React from 'react';
import { Grid, Fab, Typography, Container, IconButton, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Row, Col, } from 'react-bootstrap';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CountUp from 'react-countup';
import ArticleSvg from '../public/svg/ArticlesSvg';
import CapStudentSvg from '../public/svg/CapStudentSvg';
import VideoCourcesSvg from '../public/svg/VideoCourcesSvg';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
    },
    infos: {
        '& ul': {
            listStyle: 'none',
            marginRight: 12,
            '& li:first-child': {
                fontSize: 22,
            },
            '& li:last-child': {
                fontSize: 14,
            },
        }
    },
    title: {
        textAlign: 'center',
    },
    desc: {
        textAlign: 'justify',
    },
    will: {
        '& li': {
            marginTop: 15,
        }
    },
    copyright: {
        backgroundColor: '#4dacff',
        color: '#fff',
        padding: 10,
    },
    '@media only screen and (max-width: 768px)': {
        infos: {
            marginTop: 50,
        },
        title: {
            marginTop: 40,
        }
    },
    socialIcon: {
        color: '#fff !important',
    },
}));

export default function Footer() {
    const classes = useStyles();
    const toTop = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    const FromatNumber = (num) => new Intl.NumberFormat().format(num);
    return (
        <>
            <Grid className="mt-5 mb-5" container justifyContent="center">
                <Fab color="primary" size="large" onClick={toTop}>
                    <KeyboardArrowUpIcon fontSize="large" />
                </Fab>
            </Grid>
            <footer className={classes.footer}>
                <Container className="pt-5 pb-5">
                    <Row>
                        <Col lg={4} md={4} className={classes.infos + ' justify-content-center'}>
                            <Grid container direction="row" justifyContent="center">
                                <VideoCourcesSvg />
                                <ul>
                                    <li><CountUp end={5} duration={5} easingFn="easeInOutCubic" formattingFn={(number) => FromatNumber(number)} /> دوره</li>
                                    <li>
                                        تعداد دوره ها
                                    </li>
                                </ul>
                            </Grid>
                        </Col>

                        <Col lg={4} md={4} className={classes.infos + ' justify-content-center'}>
                            <Grid container direction="row" justifyContent="center">
                                <CapStudentSvg />
                                <ul>
                                    <li><CountUp end={180} duration={5} easingFn="easeInOutCubic" formattingFn={(number) => FromatNumber(number)} /> دانشجو</li>
                                    <li>
                                        تعداد دانشجویان
                                    </li>
                                </ul>
                            </Grid>
                        </Col>

                        <Col lg={4} md={4} className={classes.infos + ' justify-content-center'}>
                            <Grid container direction="row" justifyContent="center">
                                <ArticleSvg />
                                <ul>
                                    <li><CountUp end={53} duration={5} easingFn="easeInOutCubic" formattingFn={(number) => FromatNumber(number)} /> مقاله</li>
                                    <li>
                                        تعداد مطالب وبلاگ
                                    </li>
                                </ul>
                            </Grid>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        <Col lg={4} md={4} className={classes.title}>
                            <Typography variant="h6" gutterBottom>
                                درباره ما
                            </Typography>

                            <p className={classes.desc + ' mt-3'}>
                                از سال 1399 شروع کرده ایم و همواره برای بالا بردن سطح دانش همه شما عزیزان، به صورت شبانه روزی تلاش میکنیم. در مجموعه ویرولرن، بهترین اساتید بهترین دوره های آموزش را برای شما میسازند و آینده کاری شما را ضمانت میکنند.
                            </p>

                            <p className={classes.desc + ' mt-3'}>
                                سازندگان این مجموعه، با شعار " آموزش برای همه " و با هدف تکثیر علم و دانش اساتید مجرب به همه اقشار جامعه، به فعالیت خود ادامه می دهند.
                            </p>
                        </Col>

                        <Col lg={4} md={4} className={classes.title}>
                            <Typography variant="h6" gutterBottom>
                                دوره های آینده ما
                            </Typography>
                            <ul className={classes.will + " mt-3"}>
                                <li>آموزش پایتون مقدماتی</li>
                                <li>آموزش پایتون پیشرفته</li>
                                <li>آموزش کامل php</li><li>آموزش فریمورک django از صفر تا صد</li>
                                <li>آموزش Asp.net Core</li>
                            </ul>
                        </Col>

                        <Col lg={4} md={4} className={classes.title}>
                            <Typography variant="h6" gutterBottom>
                                نماد ها و افتخارات
                            </Typography>
                            <Grid container justifyContent="space-around">
                                <img src="/img/enamad.png" alt="اینماد" />
                                <img src="/img/samandehi.png" alt="ساماندهی" />
                            </Grid>
                        </Col>

                    </Row>
                </Container>
            </footer>
            <Grid container justifyContent="space-between" alignItems="center" className={classes.copyright}>
                <p>هر گونه کپی برداری از دوره ها و مطالب سایت و تکثیر و انتشار آن، غیر قانونی بوده و موجب نارضایتی دنیوی و اخروی صاحب اثر می باشد. ©</p>
                <Grid>
                    <IconButton className={classes.socialIcon}>
                        <TelegramIcon />
                    </IconButton>

                    <IconButton className={classes.socialIcon}>
                        <InstagramIcon />
                    </IconButton>

                    <IconButton className={classes.socialIcon}>
                        <TwitterIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};
