import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import makeStyles from '@mui/styles/makeStyles';
import 'swiper/css';
import 'swiper/css/autoplay';

const useStyles = makeStyles((theme) => ({
    SliderImage: {
        width: '100%',
        height: 'auto',
        borderRadius: theme.shape.borderRadius,
    },
    SliderTitle: {
        fontSize: '16pt',
        textAlign: 'center',
    },
    SliderBeforePrice: {
        filter: 'blur(2.3px)',
        textDecoration: 'line-through',
        fontSize: '18pt',
        color: '#444444',
        textAlign: 'center',
    },
    SliderDiscount: {},
    SliderPrice: {
        color: '#e63946',
        width: 'fit-content',
        fontSize: 'x-large',
        padding: '0px 20px',
    },
    SlideDiscountDiv: {
        backgroundColor: '#e63946',
        color: '#fff',
        width: 'fit-content',
        padding: 10,
        borderRadius: 22,
    },
    SliderPagination: {
        marginTop: 35,
        display: 'flex',
        justifyContent: 'center',
        '& .swiper-pagination-bullet': {
            width: 25,
            height: 13,
            borderRadius: 15,
            border: '1px solid ' + theme.palette.primary.main,
            marginLeft: 6,
            transition: '.4s',
            '&:last-child': {
                marginLeft: 0,
            },
        },
        '& .swiper-pagination-bullet-active': {
            width: 35,
            backgroundColor: theme.palette.primary.main,
        },
    }
}));

const Slider = () => {
    const classes = useStyles();
    return (
        <>
            <Swiper dir="rtl" className="container" modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, el: '.' + classes.SliderPagination }}>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}>
                            <img src="/img/products/graphic.png" className={classes.SliderImage} alt="alt" />
                        </Col>
                        <Col lg={6}>
                            <div>

                                {/* <FlipCountdown
                                    hideYear
                                    hideMonth
                                    dayTitle='روز'
                                    hourTitle='ساعت'
                                    minuteTitle='دقیقه'
                                    secondTitle='ثانیه'
                                    titlePosition='bottom'
                                    theme="light"
                                    endAt={'2022-12-12 01:26:58'} // Date/Time
                                /> */}

                                <p className={classes.SliderTitle + " mt-4"}>آموزش گرافیک تبلیغاتی پیشرفته</p>
                                <p className={classes.SliderBeforePrice + " mt-4"}>500,000 تومان</p>
                                <Grid container justifyContent="center" className={classes.SlideDiscount + " mt-4"}>
                                    <div className={classes.SliderPrice}>250,000 تومان</div>
                                    <div className={classes.SlideDiscountDiv}>50% تخفیف</div>
                                </Grid>
                                <Grid container justifyContent="center" className="mt-4">
                                    <Button color="primary" variant="contained">مشاهده محصول</Button>
                                </Grid>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}>
                            <img src="/img/products/algoritm.png" className={classes.SliderImage} alt="alt" />
                        </Col>
                        <Col lg={6}>
                            <div>

                                {/* <FlipCountdown
                                    hideYear
                                    hideMonth
                                    dayTitle='روز'
                                    hourTitle='ساعت'
                                    minuteTitle='دقیقه'
                                    secondTitle='ثانیه'
                                    titlePosition='bottom'
                                    theme="light"
                                    endAt={'2022-12-12 01:26:58'} // Date/Time
                                /> */}

                                <p className={classes.SliderTitle + " mt-4"}>حل مسائل و تمرین های الگوریتم و فلوچارت</p>
                                <p className={classes.SliderBeforePrice + " mt-4"}>500,000 تومان</p>
                                <Grid container justifyContent="center" className={classes.SlideDiscount + " mt-4"}>
                                    <div className={classes.SliderPrice}>250,000 تومان</div>
                                    <div className={classes.SlideDiscountDiv}>50% تخفیف</div>
                                </Grid>
                                <Grid container justifyContent="center" className="mt-4">
                                    <Button color="primary" variant="contained">مشاهده محصول</Button>
                                </Grid>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <div className={classes.SliderPagination}></div>
                <div className="slider-button-prev"></div>
                <div className="slider-button-next"></div>
            </Swiper>
        </>
    );
}

export default Slider;
