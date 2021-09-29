import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    direction: 'rtl',
    palette: {
        default: {
            main: "#fff",
            dark: "#fff",
            light: "#fff",
        },
        primary: {
            main: "#0089ff",
            dark: "#0089ff",
            light: "#0089ff",
        },
        secondary: {
            main: "#bc00dd",
            dark: "#bc00dd",
            light: "#bc00dd",
        },
        error: {
            main: "#ff1d1d",
            dark: "#ff1d1d",
            light: "#ff1d1d",
        },
        
    },
    typography: {
        fontFamily: ['IRANSans'],
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;