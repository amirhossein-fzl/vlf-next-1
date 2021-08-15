import { React, useState, useEffect } from 'react';
import { Button, Grid, Container, IconButton, AppBar, makeStyles, Drawer, MenuItem, Popover, TextField,   } from '@material-ui/core';
// import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles({
    mt5: {
        marginTop: 20,
    }
});

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

    // const MrLink = styled.a`
    //     marginRight: 15;
    // `;

    const { mt5 } = useStyles();

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
        );
    };

    const displayDesktop = () => {
        return (
            <AppBar color="transparent" elevation={0} position="sticky">
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
        <header>
            {showNav()}
            {/* <Grid container lg={12} className={mt5} >

                <Grid lg={6} md={6} sm={12} item >
                    <h1>Hii</h1>
                </Grid>

                <Grid lg={6} md={6} sm={12} item >
                    <h1>My Hii</h1>
                </Grid>
            </Grid> */}
        </header>
    )
}
