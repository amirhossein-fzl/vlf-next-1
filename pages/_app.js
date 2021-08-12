import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.scss';

const theme = createTheme({
    palette: {
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
            <Component {...pageProps} />
        </MuiThemeProvider>
    );
}

export default MyApp;
