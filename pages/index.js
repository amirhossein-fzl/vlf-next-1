import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Title from '../components/Title';
import CourseCard from '../components/CourseCard';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isHome={true} />
            <main>
                <Title title="مسیر خود را انتخاب کنید !" />
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
            </main>
        </>
    );
}
