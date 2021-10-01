import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Breadcrumbs, Typography, Link, Grid, Card, TextField, FormControlLabel, Checkbox, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Container, Row, Col } from 'react-bootstrap';
import NextLink from 'next/link';
import Image from 'next/image';
import SignupSVG from '../public/svg/signup.svg';

const useStyles = makeStyles((theme) => ({
    FormCard: {
        padding: '15px 20px 40px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }
}));

export default function signup() {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>Signup</title>
            </Head>

            <Header />

            <Container className="mt-5">
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="small" />} aria-label="breadcrumb" >

                    <NextLink href="/">
                    <Link underline="hover" color="primary" >
                        خانه
                    </Link>
                    </NextLink>

                    <Typography color="text.primary">
                        ثبت نام
                    </Typography>

                </Breadcrumbs>

                <Grid container justifyContent="center">
                    <Col lg={5}>
                        <Card className={classes.FormCard + ' mt-5'} elevation={3}>
                            {/* <Image src={SignupSVG.src} width={150} height={150} /> */}
                            <Typography variant="h6" textAlign="center">ثبت نام</Typography>
                            <Grid className="mt-5">
                                <TextField variant="outlined" helperText="نام و نام خانوادگی خود را بنویسید" fullWidth size="small" label="نام و نام خانوادگی" />
                                <TextField className="mt-4" InputProps={{ dir: 'ltr' }} helperText="ایمیل خود را بنویسید" variant="outlined" fullWidth size="small" label="ایمیل" />
                                <TextField className="mt-4" InputProps={{ dir: 'ltr' }} helperText="یک رمز عبور دلخواه بنویسید ( رمز عبور را باید به خاطر داشته باشید )" variant="outlined" fullWidth size="small" type="password" label="رمز عبور" />
                                <TextField className="mt-4" InputProps={{ dir: 'ltr' }} helperText="تکرار رمز عبوری که نوشتید را بنویسید" variant="outlined" fullWidth size="small" type="password" label="تکرار رمز عبور" />
                                <FormControlLabel className="mt-5" control={<Checkbox />} label="تمامی شرایط را خوانده ام و می پذیرم" />
                            </Grid>
                        </Card>
                    </Col>
                </Grid>

            </Container>

            <Footer />
        </>
    );
}
