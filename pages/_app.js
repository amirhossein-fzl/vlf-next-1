import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
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

function MyApp({ Component, pageProps }) {
    return (
        <MuiThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <Component {...pageProps} />
            </StylesProvider>
        </MuiThemeProvider>
    );
}

export default MyApp;
