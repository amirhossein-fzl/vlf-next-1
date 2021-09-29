import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Button, Grid, Container, IconButton, AppBar, makeStyles, Drawer, MenuItem, Popover, useScrollTrigger, alpha, InputBase, LinearProgress, Tabs, Tab, Grow, } from '@material-ui/core';
import { Button, Grid, Container, IconButton, AppBar, Drawer, MenuItem, Popover, useScrollTrigger, alpha, InputBase, LinearProgress, Tabs, Tab, } from '@mui/material';
import { makeStyles, } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Link from 'next/link';
import Image from 'next/image';
import Header2 from './Header2';
import SearchResult from './SearchResult';

const useStyles = makeStyles((theme) => {
    return {
        // App Bar Desktop Padding
        abDp: {
            padding: '5px 15px',
        },

        search: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.primary.light, 0.15),
            margin: '5px auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            [theme.breakpoints.up('sm')]: {
                // marginRight: 5,
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 1),
            height: '100%',
            // position: 'absolute',
            // pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        },
        inputRoot: {
            // color: 'inherit',
            color: theme.palette.primary.main,
            // backgroundColor: 'blue',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: 10,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        lineLoad: {
            margin: '10px 5px',
            borderRadius: 5,
        },
        tab: {
            margin: '10px 5px',
        },
        TabContent: {
            margin: 10,
            display: 'flex',
            flexFlow: 'column',
        },
    };
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

    const [tab, setTab] = React.useState(2);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

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
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setTab(2);
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
                                    <Link href={item.link} key={key}>
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

    const TabPanel = (props) => {
        return tab == props.tab ? (
            <div className={classes.TabContent}>
                {props.children}
            </div>
        ) : null;
    };

    const displayDesktop = () => {
        return (
            <ElevationScroll {...props} threshold={30}>
                <AppBar color="default" elevation={0} position="sticky" className={abDp}>
                    <Container>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Image src="/vercel.svg" width={100} height={50} />
                            <nav>
                                {nav.map((item, key) => {
                                    return <Link href={item.link} key={key}>{item.title}</Link>
                                })}
                                <a>
                                    <Link href="#" style={{ marginRight: 10 }}>
                                        <Button color="primary" size="small" variant="outlined">مدرس شوید !</Button>
                                    </Link>
                                </a>
                            </nav>
                            <div className="userbox">
                                <IconButton aria-describedby={id} onClick={handleClick} size="small" color="primary">
                                    <SearchRoundedIcon />
                                </IconButton>

                                <Popover id={id} open={open} anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'center', }}
                                    elevation={3}
                                    >
                                    <div className={classes.search}>

                                        <InputBase
                                            placeholder="سرچ ..."
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            autoFocus={true}
                                            inputProps={{ 'aria-label': 'search' }}
                                            interactive={true}
                                        />

                                        <div className={classes.searchIcon}>
                                            <IconButton size="small" color="primary">
                                                <SearchRoundedIcon />
                                            </IconButton>
                                        </div>
                                    </div>

                                    <LinearProgress className={classes.lineLoad} color="secondary" />

                                    <Tabs value={tab} onChange={handleChange} indicatorColor="primary" textColor="primary" centered={true} variant="fullWidth" className={classes.tab} TabIndicatorProps={{ style: { width: "160px", } }} >
                                        <Tab label="وبلاگ" />
                                        <Tab label="دوره ها" />
                                        <Tab label="همه" />
                                    </Tabs>

                                    <TabPanel tab={2}>
                                        <>
                                            <SearchResult image="/img/products/graphic.png" link="#" title="آموزش گرافیک تبلیغاتی پیشرفته" in="دوره ها" />
                                            <SearchResult image="/img/posts/Asp_net_core5.png" link="#" title="ویژگی های جدید Asp.Net Core 5" in="وبلاگ" loading={true} />
                                            <SearchResult image="/img/posts/nmvldt-logo.png" link="#" title="نکات مهم و کلیدی در طراحی لوگو" in="وبلاگ" />
                                        </>
                                    </TabPanel>

                                    <TabPanel tab={1}>
                                        <>
                                            <SearchResult image="/img/products/graphic.png" link="#" title="آموزش گرافیک تبلیغاتی پیشرفته" in="دوره ها" />
                                        </>
                                    </TabPanel>

                                    <TabPanel tab={0}>
                                        <>
                                            <SearchResult image="/img/posts/Asp_net_core5.png" link="#" title="ویژگی های جدید Asp.Net Core 5" in="وبلاگ" />
                                            <SearchResult image="/img/posts/nmvldt-logo.png" link="#" title="نکات مهم و کلیدی در طراحی لوگو" in="وبلاگ" />
                                        </>
                                    </TabPanel>
                                </Popover>

                                <Button variant="contained" color="primary" size="small" disableElevation>
                                    ورود
                                </Button>

                                <Link href='/signup'>
                                    <Button variant="outlined" color="secondary" size="small" disableElevation>
                                        ثبت نام
                                    </Button>
                                </Link>
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
