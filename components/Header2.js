import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Container, useScrollTrigger, Fab, Zoom, Tooltip, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import SearchAjax from './SearchAjax';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: props.threshold,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    ScrollButton: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        zIndex: 999,
    },
    Tooltip: {
        backgroundColor: theme.palette.primary.main + ' !important',
        fontSize: '12px !important',
    },
    header2: {
        marginTop: '100px !important',
    },
    g1: {
        padding: '0 20px',
        textAlign: 'center',
    },
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <Tooltip title="بازگشت به بالای صفحه" placement="top" classes={{ tooltip: classes.Tooltip }} interactive={true} >
                <div onClick={handleClick} role="presentation" className={classes.ScrollButton}>
                    {children}
                </div>
            </Tooltip>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header2(props) {
    const classes = useStyles();
    return (
        <Container>
            <Grid container lg={12} item className={classes.header2} >
                <Grid lg={6} md={6} sm={12} item container direction="column" className={classes.g1} >
                    <h1>با ویرولرن</h1>
                    <h2 className="mt-3">لحظه ای از تکنولوژی عقب نمانید !</h2>
                    <p className="mt-3">آموزش آنلاین توسط بهترین اساتید برای ساخت آینده کاری شما و تضمین یادگیری شما در ویرولرن</p>
                    {/* <Grid justifyContent="space-evenly" container className="mt-5 mb-5">
                        <Button disableElevation variant="outlined" color="primary">از دوره های ما دیدن کنید</Button>
                        <Button disableElevation variant="outlined" color="secondary" className="mtxs">از فروشگاه ما دیدن کنید</Button>
                    </Grid> */}
                    <SearchAjax />
                </Grid>

                <Grid lg={6} md={6} sm={12} item container justifyContent="center" alignItems="flex-start" >
                    <Image src="svg/online-course.svg" width={600} height={374} />
                </Grid>

            </Grid>
            <ScrollTop {...props}>
                <Fab color="secondary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon fontSize="large" />
                </Fab>
            </ScrollTop>
        </Container>
    )
}
