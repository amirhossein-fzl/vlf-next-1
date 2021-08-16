// import React from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Container, IconButton, AppBar, makeStyles, Drawer, MenuItem, Popover, TextField, useScrollTrigger, Fab, Zoom, } from '@material-ui/core';
// import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles({
    // App Bar Desktop Padding
    abDp: {
        padding: '12px 0px',
    }
});

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

export default function Header(props) {
    const [nav, setNav] = useState([
        {
            title: "صفحه اصلی",
            link: "#",
        },
        {
            title: "وبلاگ",
            link: "#",
        },
        {
            title: "درباره ما",
            link: "#",
        },
        {
            title: "تماس باما",
            link: "#",
        },
    ]);

    const [menu, setMenu] = useState({
        isOpen: false,
    });

    const [user, setUser] = useState({
        isOpen: false,
    });

    const toggleMenu = () => {
        setMenu({
            isOpen: !menu.isOpen
        });
    }

    const toggleUser = () => {
        setUser({
            isOpen: !menu.isOpen
        });
    }

    const { abDp } = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const displayMobile = () => {
        return (
            <ElevationScroll {...props} threshold={50}>
                <AppBar position="sticky">
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <IconButton color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleMenu}>
                            <MenuRoundedIcon />
                        </IconButton>

                        <Drawer anchor="right" open={menu.isOpen} onClose={() => setMenu({ isOpen: false })} >
                            {nav.map((item, key) => {
                                return (
                                    <Link href={item.link}>
                                        <MenuItem>{item.title}</MenuItem>
                                    </Link>
                                );
                            })}
                        </Drawer>

                        {/* <Link href="#"> */}
                        <Image src="/vercel.svg" width={100} height={50} />
                        {/* </Link> */}

                        <IconButton color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleUser}>
                            <PersonRoundedIcon />
                        </IconButton>

                        <Drawer anchor="left" open={user.isOpen} onClose={() => setUser({ isOpen: false })} >
                            <MenuItem>
                                <h1>Hi</h1>
                            </MenuItem>
                        </Drawer>
                    </Grid>
                </AppBar>
            </ElevationScroll>
        );
    };

    const displayDesktop = () => {
        return (
                <ElevationScroll {...props} threshold={30}>
                    <AppBar color="default" elevation={0} position="sticky" className={abDp}>
                        <Container>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                {/* <Link href="#">
                            <a> */}
                                <Image src="/vercel.svg" width={100} height={50} />
                                {/* </a>
                        </Link> */}
                                <nav>
                                    {nav.map((item, key) => {
                                        return <Link href={item.link} key={key}>{item.title}</Link>
                                    })}
                                    {/* <MrLink> */}
                                    <a>
                                        <Link href="#" style={{ marginRight: 10 }}>
                                            <Button color="primary" size="small" variant="outlined">مدرس شوید !</Button>
                                        </Link>
                                    </a>
                                    {/* </MrLink> */}
                                </nav>
                                <div className="userbox">
                                    <IconButton aria-describedby={id} onClick={handleClick} size="small" color="primary">
                                        <SearchRoundedIcon />
                                    </IconButton>

                                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} transformOrigin={{ vertical: 'top', horizontal: 'center', }}>
                                        <TextField id="standard-basic" label="استاندارد" autoFocus />
                                    </Popover>

                                    <Button variant="contained" color="primary" size="small" disableElevation>
                                        ورود
                                    </Button>

                                    <Button variant="outlined" color="secondary" size="small" disableElevation>
                                        ثبت نام
                                    </Button>
                                </div>
                            </Grid>
                        </Container>
                    </AppBar>
                </ElevationScroll>
        );
    };

    const showNav = () => {
        let isMobile = useMediaQuery({ maxWidth: 790 });
        let isDesktop = useMediaQuery({ minWidth: 790 });
        if (isMobile) {
            return displayMobile();
        } else if (isDesktop) {
            return displayDesktop();
        }
    };

    return (
        <>
            <div id="back-to-top-anchor"></div>
            {showNav()}
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
        </>
    )
}
