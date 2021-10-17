import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Continer from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Title from '../components/Title';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    articleBody: {
        marginTop: 50,
        padding: 20,
        height: 'auto',
        '& p': {
            textAlign: 'justify',
            margin: '15px 0px',
            lineHeight: '40px',
        },

        '& h2': {
            margin: '25px 0',
        },

        '& a': {
            color: '#fca311',
            transition: '0.5s',
            '&:hover': {
                color: '#0096c7',
            }
        },
    },
    mtB: {
        marginTop: 0,
        [theme.breakpoints.down('md')]: {
            marginTop: 50,
        },
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>ویرولرن - درباره ما</title>
            </Head>
            
            <Header />
            <main>
                <Continer lg>
                    <Typography variant="h1" className="mt-5 text-center">
                        درباره ما
                    </Typography>
                    <Grid container justifyContent="center" className="mt-4">
                        <Breadcrumb active="درباره ما">
                            <NextLink href="/">
                                <Link underline="hover" >
                                    خانه
                                </Link>
                            </NextLink>
                        </Breadcrumb>
                    </Grid>
                    <Card elevation={3} className={classes.articleBody}>
                        <Row>
                            <Col lg={7}>
                                <h2>چه شد که شروع کردیم !؟</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </Col>
                            <img className="col-lg-5" src="/img/how-start.jpg" alt="how start" />
                        </Row>
                    </Card>
                    <Card elevation={3} className={classes.articleBody}>
                        <Row>
                            <img className="col-lg-5" src="/img/we-target.jpg" alt="we target" />
                            <Col lg={7}>
                                <h2>هدف ما چیست ؟</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </Col>
                        </Row>
                    </Card>
                    <Card elevation={3} className={classes.articleBody}>
                        <Row>
                            <Col lg={7}>
                                <h2>انتقاد پذیر هستیم</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </Col>
                            <img className="col-lg-5" src="/img/criticism.jpg" alt="criticism" />
                        </Row>
                    </Card>

                    <>
                        <Title title="اعضای تیم" />
                        <Grid container>

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Grid container spacing={2} direction="column" alignItems="center">
                                    <Grid item>
                                        <Avatar src="/img/Amir-developer-avatar.jpg" sx={{ width: 100, height: 100 }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4">امیرحسین فضلی</Typography>
                                        <Typography className="mt-2 text-center" variant="body" component="p">هم بنیان گذار</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.mtB}>
                                <Grid container spacing={2} direction="column" alignItems="center">
                                    <Grid item>
                                        <Avatar src="/img/Milad-mohammadi-avatar.jpg" sx={{ width: 100, height: 100 }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4">میلاد محمدی</Typography>
                                        <Typography className="mt-2 text-center" variant="body" component="p">هم بنیان گذار</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </>

                </Continer>
            </main>
            <Footer />
        </>
    );
}

export default About;
