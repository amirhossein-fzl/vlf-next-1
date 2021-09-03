import React, { useEffect, useState } from 'react';
import { createTheme, MuiThemeProvider, StylesProvider, jssPreset, CircularProgress, Grid, } from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
import '../styles/globals.scss';

const theme = createTheme({
    direction: 'rtl',
    palette: {
        default: {
            main: "#fff",
            dark: "#fff",
            light: "#fff",
        },
        primary: {
            main: "#4361ee",
            dark: "#4361ee",
            light: "#4361ee",
        },
        secondary: {
            main: "#bc00dd",
            dark: "#bc00dd",
            light: "#bc00dd",
        },
    },
    typography: {
        fontFamily: ['IRANSans'],
    },
});

const Loader = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <CircularProgress size={80} color="secondary" />
        </Grid>
    );
};

function MyApp({ Component, pageProps }) {

    useEffect(() => {

        const detectIEEdge = () => {
            let ua = window.navigator.userAgent;

            let msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            let trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                let rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            let edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;
        }

        if (detectIEEdge()) {
            alert('جهت عملکرد بهتر وبسایت، از مرورگر های جدید و مدرن و بروز استفاده کنید. مانند: گوگل کروم، فایرفکس، اوپرا و ...');
        }
    });

    return (
        <MuiThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <Component {...pageProps} />
            </StylesProvider>
        </MuiThemeProvider>
    );
}

export default MyApp;
