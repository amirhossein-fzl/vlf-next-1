import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Container, makeStyles, useScrollTrigger, Fab, Zoom, } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Image from 'next/image';

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

const useStyless = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyless();
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
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
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
    return (
        <Container>
            <Grid container lg={12} item className="header-2" >
                <Grid lg={6} md={6} sm={12} item container direction="column" justifyContent="center" className="text-center" >
                    <h1>با ویرولرن</h1>
                    <h2 className="mt-3">لحظه ای از تکنولوژی عقب نمانید !</h2>
                    <p className="mt-3">آموزش آنلاین توسط بهترین اساتید برای ساخت آینده کاری شما و تضمین یادگیری شما در ویرولرن</p>
                    <Grid justifyContent="space-evenly" container className="mt-5 mb-5">
                        <Button disableElevation variant="outlined" color="primary">از دوره های ما دیدن کنید</Button>
                        <Button disableElevation variant="outlined" color="secondary" className="mtxs">از فروشگاه ما دیدن کنید</Button>
                    </Grid>
                </Grid>

                <Grid lg={6} md={6} sm={12} item container justifyContent="center" >
                    <Image src="svg/online-course.svg" width={600} height={374} />
                </Grid>

            </Grid>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Container>
    )
}
