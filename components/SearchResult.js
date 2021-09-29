import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ContentLoader from 'react-content-loader';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles({
    srCard: {
        width: '100%',
    },
    srContentCard: {
        width: '100%',
        display: 'flex',
    },
    srCardContent: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0,
        }
    },
    SearchInfo: {
        display: 'flex',
        padding: '10px 15px',
        flexDirection: 'column',
    },
    srTitle: {
        fontSize: '1.1rem',
        maxWidth: 100,

    },
    srIn: {
        // fontSize: 12,
        marginTop: 14,
        marginBottom: 14,
        textAlign: 'left',
    },
    ct: {
        '&:first-child': {
            marginTop: 0,
        },
        marginTop: 13,
    },
});

const Loader = (props) => {
    const { ct } = useStyles();
    return (
        <ContentLoader
            speed={2}
            width={468}
            height={123}
            viewBox="0 0 468 123"
            backgroundColor="#f3f3f3"
            foregroundColor="#dedede"
            className={ct}
            {...props}
        >
            <rect x="333" y="0" rx="4" ry="4" width="130" height="123" />
            <rect x="83" y="3" rx="4" ry="4" width="235" height="28" />
            <rect x="277" y="53" rx="4" ry="4" width="41" height="19"></rect>
            <rect x="255" y="86" rx="4" ry="4" width="64" height="30"></rect>
        </ContentLoader>
    )
};

export default function SearchResult(props) {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    
    return loading ? (<Loader />) : (
        <Card className={classes.ct} variant="outlined">
            <CardContent className={classes.srCardContent}>
                <div className={classes.srContentCard}>
                    <Image src={props.image} width={130} height={93} />
                    <div className={classes.SearchInfo}>
                        <Link href={props.link} className={classes.srTitle}>{props.title}</Link>
                        <Typography className={classes.srIn} variant="caption">در <b>{props.in}</b></Typography>
                        <Button color="secondary" variant="contained" size="small" disableElevation style={{ width: 'fit-content' }}>مشاهده</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
};
