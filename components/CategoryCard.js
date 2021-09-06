import React from 'react';
import { ButtonBase, makeStyles, Typography, useTheme  } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
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
