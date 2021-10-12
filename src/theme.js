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
        telegram: {
            main: "#54a9eb",
            dark: "#54a9eb",
            light: "#54a9eb",
        },
        twitter: {
            main: "#5aa4eb",
            dark: "#5aa4eb",
            light: "#5aa4eb",
        },
        github: {
            main: "#333333",
            dark: "#333333",
            light: "#333333",
        },

    },
    typography: {
        fontFamily: ['IRANSans'],
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTextField: {
            variants: [
                {
                    props: { size: 'small' },
                    style: {
                        input: {
                            padding: '10px 14px',
                        },
                    }
                }
            ]
        }
    },
    socialIcons: {
        telegram: {
            color: 'blue'
        },
        twitter: {
            color: 'blue'
        },
        github: {
            color: '#000'
        },
    },
});

export default theme;