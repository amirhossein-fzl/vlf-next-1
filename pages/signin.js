import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Google from '../public/svg/social/Google';
import Github from '@mui/icons-material/GitHub';
import Telegram from '@mui/icons-material/Telegram';
import Twitter from '@mui/icons-material/Twitter';
import makeStyles from '@mui/styles/makeStyles';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import NextLink from 'next/link';
import AuthImage from '../public/img/auth-bg.jpg';

const useStyles = makeStyles((theme) => ({
    FormCard: {
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    snButton: {
        borderRadius: theme.shape.borderRadius,
        padding: '6px 16px',
    },
    sectionTitle: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        fontFamily: 'Aviny',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#263238',
        '& b': {
            display: 'block',
            MsFlex: 1,
            flex: 1,
            height: 4,
            opacity: 0.4,
            backgroundColor: '#263238',
        }
    },
    sectionTitleCenter: {
        '& span': {
            textAlign: 'center',
            margin: '0 15px',
        }
    },
    Background: {
        backgroundAttachment: 'fixed',
        background: `url(${AuthImage.src}) no-repeat center top`,
    },
    AvinyFont: {
        fontFamily: 'Aviny !important',
    },
    widthFit: {
        width: 'fit-content',
    },
}));

export default function signup() {
    const classes = useStyles();
    React.useEffect(() => {
        document.body.classList.add(classes.Background);
    }, []);
    React.useEffect(() => {
        return () => {
            document.body.classList.remove(classes.Background);
        };
    });
    return (
        <>
            <Head>
                <title>ویرولرن - ورود</title>
                <meta name="keywords" content="ویرولرن,ورود,ورود به ویرولرن" />
                <meta name="description" content="برای دسترسی به تمامی بخش های وبسایت، وارد شوید !" />
                <meta name="subject" content="ورود" />
                <meta name="language" content="FA" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Container className="mt-5 mb-5">
                <Grid container justifyContent="center">
                    <Col lg={5}>
                        <Card className={classes.FormCard + ' mt-5'} elevation={3}>
                            <Typography variant="h3" className={classes.AvinyFont} textAlign="center">ورود</Typography>
                            <Grid className="mt-5">
                                <TextField className="mt-4" InputProps={{ dir: 'ltr' }} helperText="ایمیل خود را بنویسید" variant="outlined" fullWidth size="small" label="ایمیل" />
                                <TextField className="mt-4" InputProps={{ dir: 'ltr' }} helperText="رمز عبور خود را بنویسید" variant="outlined" fullWidth size="small" type="password" label="رمز عبور" />
                                <FormControlLabel className="mt-5" control={<Checkbox />} label="مرا به خاطر بسپار" />
                            </Grid>
                            <Grid container direction="column">
                                <Button variant="contained" color="primary" className="mt-4">ورود</Button>

                                <p className={classes.sectionTitle + ' mb-4 mt-5 ' + classes.sectionTitleCenter}>
                                    <b></b>
                                    <span className={classes.sectionTitleCenter}>یا ورود با شبکه های اجتماعی</span>
                                    <b></b>
                                </p>

                                <Grid container direction="row" spacing={1} justifyContent="center">

                                    <Grid item>
                                        <IconButton size="large">
                                            <Google />
                                        </IconButton>
                                    </Grid>

                                    <Grid item>
                                        <IconButton color="github" size="large">
                                            <Github />
                                        </IconButton>
                                    </Grid>

                                    <Grid item>
                                        <IconButton color="telegram" size="large">
                                            <Telegram />
                                        </IconButton>
                                    </Grid>

                                    <Grid item>
                                        <IconButton color="twitter" size="large">
                                            <Twitter />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid container direction="column" justifyContent="center">
                                    <p className={classes.sectionTitle + ' mb-4 mt-4 ' + classes.sectionTitleCenter}>
                                        <b></b>
                                        <span className={classes.sectionTitleCenter}>یا</span>
                                        <b></b>
                                    </p>
                                    <NextLink href="/signup">
                                        <Button variant="contained" color="secondary" className="mb-5">ثبت نام</Button>
                                    </NextLink>
                                    <Grid container direction="row" justifyContent="center">
                                        <NextLink href="/">
                                            <Link underline="hover" className={classes.widthFit} color="primary">بازگشت به خانه</Link>
                                        </NextLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Col>
                </Grid>
            </Container>
        </>
    );
}
