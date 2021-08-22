import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Container, IconButton, AppBar, makeStyles, Drawer, MenuItem, Popover, TextField, useScrollTrigger, } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Link from 'next/link';
import Image from 'next/image';
import Header2 from './Header2';

const useStyles = makeStyles({
    // App Bar Desktop Padding
    abDp: {
        padding: '5px 15px',
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

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header(props) {
    const nav = [
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
    ];

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

                        <Drawer anchor="left" open={menu.isOpen} onClose={() => setMenu({ isOpen: false })} >
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

                        <Drawer anchor="right" open={user.isOpen} onClose={() => setUser({ isOpen: false })} >
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
    const isHome = props.isHome == undefined ? false : props.isHome;
    return (
        <>
            <div id="back-to-top-anchor"></div>
            {showNav()}
            {isHome ? <Header2 /> : null}
        </>
    )
}
