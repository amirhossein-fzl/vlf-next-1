import React, { useState } from 'react';
import { Paper, InputBase, alpha, IconButton, ButtonBase, Grid, Typography, Grow, } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { Col, Container } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    SearchContainer: {
        display: 'flex',
    },
    SearchBox: {
        width: '100%',
        // backgroundColor: alpha(theme.palette.primary.light, 0.15),
        border: '2px solid ' + alpha(theme.palette.primary.light, 0.5),
        transition: '.3s',
        borderRadius: 25,
        display: 'flex',
        padding: '5px 20px',
        alignItems: 'center',
    },
    SearchInput: {
        color: theme.palette.primary.main,
        width: '100%',
    },
    SearchButton: {
        color: '#fff !important',
        backgroundColor: theme.palette.primary.main + ' !important',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        marginRight: 10 + 'px !important',
    },
    SearchReslut: {
        width: '100%',
        // backgroundColor: 'red',
        padding: 10,
    },
    tabCenter: {
        justifyContent: 'center',
    },
    SearchItem: {
        borderRadius: theme.shape.borderRadius + 'px !important',
        padding: '6px 12px !important',
        marginTop: 6 + 'px !important',
        textAlign: 'left',
        display: 'block',
        color: theme.palette.primary.main + ' !important',
        backgroundColor: alpha(theme.palette.primary.main, 0.05) + ' !important',
    },
    badge: {
        fontFamily: 'IRANSans',
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        padding: '2px 8px',
        borderRadius: '15px',
        fontSize: '.95em',
    },
    hided: {
        position: 'fixed',
        zIndex: 1050,
        width: '100%',
        height: '100vh',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
}));

export default function SearchAjax() {
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const theme = useTheme();

    return (
        <div className="mt-5">
            <Col>
                <Container>
                    <div className={classes.SearchContainer} style={searchResult ? {position: 'relative', zIndex: 1051,} : null}>
                        <div className={classes.SearchBox} style={searchResult ? { borderColor: theme.palette.primary.main, } : null}>
                            <InputBase className={classes.SearchInput} placeholder="سرچ ..." color="secondary" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setSearchResult(true)} />
                        </div>
                        <IconButton className={classes.SearchButton} size="large" >
                            <SearchIcon />
                        </IconButton>
                    </div>
                        <>
                            {searchResult ? ( <div className={classes.hided} onClick={() => { setSearchResult(false) }}></div> ) : null}
                            <Grow in={searchResult} unmountOnExit>
                                <Paper elevation={3} className={classes.SearchReslut + ' mt-2'}  style={{ zIndex: 1051, position: 'relative', }}>
                                    <Grid container direction="column">
                                        <ButtonBase className={classes.SearchItem}>
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Typography variant="body1">آپشن 1</Typography>
                                                <span className={classes.badge}>در وبلاگ</span>
                                            </Grid>
                                        </ButtonBase>

                                        <ButtonBase className={classes.SearchItem}>
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Typography variant="body1">آپشن 2</Typography>
                                                <span className={classes.badge}>در دوره ها</span>
                                            </Grid>
                                        </ButtonBase>

                                        <ButtonBase className={classes.SearchItem}>
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Typography variant="body1">آپشن 3</Typography>
                                                <span className={classes.badge}>در وبلاگ</span>
                                            </Grid>
                                        </ButtonBase>
                                    </Grid>
                                </Paper>
                            </Grow>
                        </>
                </Container>
            </Col>
        </div>
    );
};