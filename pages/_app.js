import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Grid, } from '@mui/material';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});


import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css';
import '../styles/globals.scss';

const Loader = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <CircularProgress size={80} color="secondary" />
        </Grid>
    );
};

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
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
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <CacheProvider value={cacheRtl}>
                    <Component {...pageProps} />
                </CacheProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
