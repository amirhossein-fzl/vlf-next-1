import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Zoom from '@mui/material/Zoom';
import makeStyles from '@mui/styles/makeStyles';
import useStyles from '../src/styles/CourseCardStyles';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStylesComponent = makeStyles((theme) => ({
    Card: {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.87)',
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
        overflow: 'hidden',
    },
    SliderPagination: {
        marginTop: 35,
        display: 'flex',
        justifyContent: 'center',
        '& .swiper-pagination-bullet': {
            width: 10,
            height: 10,
            borderRadius: 15,
            cursor: 'pointer',
            backgroundColor: theme.palette.primary.main,
            marginLeft: 6,
            transition: '.4s',
            '&:last-child': {
                marginLeft: 0,
            },
        },
        '& .swiper-pagination-bullet-active': {
            width: 25,
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

function CourseCard(props) {
    const classes = useStyles();
    return (
        <>
            {props.discount ? (<img src="/svg/discount.svg" alt="" className={classes.discountLogo} />) : null}
            <img src={props.img} alt={props.title} className={classes.image} />
            <CardContent className={classes.paddingInto}>

                <Link href={props.link}>
                    <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: classes.Tooltip, arrow: classes.ArrowTooltip }} interactive="true">
                        <a className={classes.title}>{props.title}</a>
                    </Tooltip>
                </Link>

                <Link href={props.teacher.link}>
                    <a className={classes.TeacherSection}>
                        <Typography variant="body2" gutterBottom className={classes.TeacherSection}>
                            <PersonIcon />
                            <span>{props.teacher.name}</span>
                        </Typography>
                    </a>
                </Link>

                <Typography align="right" variant="button" gutterBottom className={classes.Price} component="p">
                    <span>{new Intl.NumberFormat().format(props.price)}</span>
                    تومان
                </Typography>

            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" className={classes.TimeSection}>
                        <AccessTimeIcon />
                        <span>{props.time} ساعت</span>
                    </Typography>
                    <Link href={props.link}>
                        <Button variant="contained" size="small" color="primary">
                            مشاهده دوره
                        </Button>
                    </Link>
                </Grid>
            </CardActions>
        </>
    );
}

const Bestteacher = () => {
    const classesComponent = useStylesComponent();
    return (
        <div>
            <Swiper dir="rtl" style={{ padding: '15px 0', }} className="swiper-container" modules={[EffectCoverflow, Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, el: '.' + classesComponent.SliderPagination }} coverflowEffect={{ depth: 500, modifier: 1, rotate: 0, slideShadows: true, stretch: 0, }} centeredSlides={true} effect="coverflow" slidesPerView="auto" watchOverflow={true} grabCursor={true}>
                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="حل مسائل و تمرین های الگوریتم و فلوچارت"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/algoritm.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش گرافیک تبلیغاتی پیشرفته"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/graphic.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/html-css-jquery.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="برنامه نویس شی گرا در جاوااسکریپت"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/javascriptOOP.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش متریال بوت استرپ (mdbootstrap)"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/mdbootstrap.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش امنیت در PHP"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/php-security.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="تحلیل و پیش بینی بورس در پایتون"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/Stock-analysis.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className={classesComponent.Card} style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش Selenium در سی شارپ از صفر تا صد"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/seleniumc-sharp.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>
                <div className={classesComponent.SliderPagination}></div>
                <div className="slider-button-prev"></div>
                <div className="slider-button-next"></div>
            </Swiper>
        </div>
    );
}

export default Bestteacher;
