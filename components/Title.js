import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        paddingLeft: 40,
        paddingRight: 40,
        margin: '90px 0 60px',
    },
    sectionTitle: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        fontFamily: 'IRANSans',
        fontWeight: 700,
        color: '#263238',
        '& b': {
            display: 'block',
            MsFlex: 1,
            flex: 1,
            height: 4,
            opacity: 0.4,
            backgroundColor: '#263238',
        }
    },
    sectionTitleContainer: {
        marginBottom: '1.5em',
    },
    sectionTitleCenter: {
        '& span': {
            textAlign: 'center',
            margin: '0 15px',
        }
    },
});

export default function Title({ title }) {
    const classes = useStyles();
    return (
        <div className={classes.container + ' ' + classes.sectionTitleContainer}>
            <h3 className={classes.sectionTitle + ' ' + classes.sectionTitleCenter}>
                <b></b>
                <span className={classes.sectionTitleCenter}>{title}</span>
                <b></b>
            </h3>
        </div>
    );
};
