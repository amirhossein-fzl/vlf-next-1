import React from 'react';
import { ButtonBase, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px !important',
        borderRadius: theme.shape.borderRadius + 'px !important',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px !important',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
    },
    RippleColor: {
        color: theme.palette.secondary.main,
    },
}));

export default function CategoryCard(props) {
    const classes = useStyles();
    return (
        <Link href='#'>
            <ButtonBase className={classes.root} TouchRippleProps={{ classes: {ripple: classes.RippleColor} }} focusRipple={true}>
                <Image src={props.icon} width={80} height={80} />
                <Typography className="mt-3" variant="body1" component="h5" gutterBottom>{props.title}</Typography>
            </ButtonBase>
        </Link>
    )
}
