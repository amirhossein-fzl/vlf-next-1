import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Title from '../components/Title';
import CourseCard from '../components/CourseCard';
import { Container, Row, Col, } from 'react-bootstrap';
import { makeStyles, Button, Grid, TextField, } from '@material-ui/core';
import Image from 'next/image';
import CategoryCard from '../components/CategoryCard';
import PostCard from '../components/PostCard';
import EmailSvg from '../public/svg/EmailSvg';
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css';

const useStyles = makeStyles({
    CourseCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '@media only screen and (max-width: 768px)': {
        smResp: {
            width: '90%',
        }
    },
    ni: {
        width: '100pt',
        color: '#ff9100',
    },
    nlp: {
        textAlign: 'center',
    }
});

export default function Home() {
    const [validEmail, setValidEmail] = useState(false);

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return setValidEmail(!re.test(String(email).toLowerCase()));
    }

    const classes = useStyles();
    let categories = [
        {
            title: "هوش مصنوعی",
            icon: "/svg/categories/ai.svg",
            link: "#",
        },
        {
            title: "اندروید",
            icon: "/svg/categories/android.svg",
            link: "#",
        },
        {
            title: "سیستم ها مدیریت محتوا",
            icon: "/svg/categories/cms.svg",
            link: "#",
        },
        {
            title: "ارز دیجیتال",
            icon: "/svg/categories/cryptocurrency.svg",
            link: "#",
        },
        {
            title: "گرافیک",
            icon: "/svg/categories/graphic.svg",
            link: "#",
        },
        {
            title: "جاوااسکریپت",
            icon: "/svg/categories/javascript.svg",
            link: "#",
        },
        {
            title: "شبکه",
            icon: "/svg/categories/network.svg",
            link: "#",
        },
        {
            title: "PHP",
            icon: "/svg/categories/php.svg",
            link: "#",
        },
        {
            title: "پایتون",
            icon: "/svg/categories/python.svg",
            link: "#",
        },
        {
            title: "استارتاپ و کسب و کار",
            icon: "/svg/categories/startup.svg",
            link: "#",
        },
        {
            title: "رابط کاربری",
            icon: "/svg/categories/ui.svg",
            link: "#",
        },
        {
            title: "برنامه نویسی وب",
            icon: "/svg/categories/web.svg",
            link: "#",
        },
    ];

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isHome={true} />
            <main>
                <>
                    <Title title="مسیر خود را انتخاب کنید !" />
                    <Container>
                        <Row>
                            {
                                categories.map((category, key) => {
                                    return (
                                        <Col lg={2} sm={4} xs={6} className={classes.CourseCard} key={key}>
                                            <CategoryCard icon={category.icon} title={category.title} link={category.link} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </>

                <>
                    <Title title="جدید ترین دوره ها" />
                    <Container fluid="lg">
                        <Row className="mb-5">

                            <CourseCard
                                title="حل مسائل و تمرین های الگوریتم و فلوچارت"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/algoritm.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش گرافیک تبلیغاتی پیشرفته"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/graphic.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/html-css-jquery.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="برنامه نویس شی گرا در جاوااسکریپت"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/javascriptOOP.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش متریال بوت استرپ (mdbootstrap)"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/mdbootstrap.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش امنیت در PHP"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/php-security.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="تحلیل و پیش بینی بورس در پایتون"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/Stock-analysis.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش Selenium در سی شارپ از صفر تا صد"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/seleniumc-sharp.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                        </Row>
                    </Container>
                </>

                <>
                    <Title title="مدرس شوید !" />
                    <Container className={classes.smResp}>
                        <Row>
                            <Col lg={6}>
                                <Image src="/svg/become-teacher.svg" width={513} height={327} />
                            </Col>
                            <Col lg={6}>
                                <p> بله ! شما میتوانید در مجموعه ویرولرن در هر حوزه ای، تدریس کنید و به درآمد های عالی دست پیدا کنید ! هدف مجموعه ویرولرن، تکثیر دانش افراد متخصص، به افراد مبتدی است. </p>
                                <Button className="mt-5" color="secondary" variant="outlined" size="small">مدرس شوید !</Button>
                            </Col>
                        </Row>
                    </Container>
                </>

                <>
                    <Title title="وبلاگ ویرولرن" />
                    <Container>
                        <Row>

                            <PostCard
                                grid={{ lg: 4, md: 6 }}
                                link="#"
                                title="ویژگی جدید در ASP.Net Core 5.0"
                                img="/img/posts/Asp_net_core5.png"
                                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                author={{ name: 'امیرحسین فضلی', link: '#' }}
                                views={95000}
                            />

                            <PostCard
                                grid={{ lg: 4, md: 6 }}
                                link="#"
                                title="نکات مهم و کلیدی در طراحی لوگو"
                                img="/img/posts/nmvldt-logo.png"
                                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                author={{ name: 'میلاد محمدی', link: '#' }}
                                views={95000}
                            />

                            <PostCard
                                grid={{ lg: 4, md: 6 }}
                                link="#"
                                title="مهم ترین تکنیک های سئو"
                                img="/img/posts/seo.png"
                                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                author={{ name: 'امیرحسین فضلی', link: '#' }}
                                views={95000}
                            />

                            <PostCard
                                grid={{ lg: 4, md: 6 }}
                                link="#"
                                title="چند نکته مهم برای امنیت در شبکه های اجتماعی"
                                img="/img/posts/social_network.png"
                                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                author={{ name: 'میلاد محمدی', link: '#' }}
                                views={95000}
                            />

                            <PostCard
                                grid={{ lg: 4, md: 6 }}
                                link="#"
                                title="دستیار صوتی چیست؟"
                                img="/img/posts/voice-assistant.png"
                                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                author={{ name: 'امیرحسین فضلی', link: '#' }}
                                views={95000}
                            />

                            <PostCard
                                grid={{ lg: 4, md: 6 }}
                                link="#"
                                title="5 مورد از بهترین Vscode Extention ها برای توسعه دهندگان جاوااسکریپت"
                                img="/img/posts/VS_Code_Extension.png"
                                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                                author={{ name: 'میلاد محمدی', link: '#' }}
                                views={95000}
                            />

                        </Row>
                        <Grid container justifyContent="center" className="mt-5">
                            <Button variant="outlined" color="secondary">مشاهده بیشتر</Button>
                        </Grid>
                    </Container>
                </>
                <>
                    <Container>
                        <Grid className="mt-5" container direction="column" justifyContent="center" alignItems="center">
                            <EmailSvg className={classes.ni} />
                            <p className={"mt-3 mb-4 " + classes.nlp}>عضو خبرنامه ما شوید تا از آخرین تخفیف ها و اطلاعیه ها جا نمانید !</p>
                            <Col lg={4} sm={6} xs={10}>
                                <TextField error={validEmail} fullWidth id="outlined-basic" type="email" label="ایمیل شما" placeholder="ایمیل خود را اینجا وارد کنید ..." onChange={(e) => validateEmail(e.target.value)} size="small" variant="outlined" />
                            </Col>
                            ‌<Button variant="contained" color="primary">عضویت در خبرنامه</Button>
                        </Grid>
                    </Container>
                </>
            </main>
        </>
    );
}
