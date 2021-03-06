import React from 'react';
import { Card, Tooltip, CardActions, CardContent, Button, Typography, Zoom, Grid, IconButton, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const useStyles = makeStyles((theme) => ({
    paddingInto: {
        padding: '7px 10px 0px',
    },
    img: {
        width: '100%',
        height: 'auto',
    },
    title: {
        fontSize: 15,
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        whiteSpace: 'nowrap',
        cursor: 'pointer'
    },
    Tooltip: {
        backgroundColor: theme.palette.primary.main + ' !important',
        fontSize: '14px !important',
    },
    ArrowTooltip: {
        color: theme.palette.primary.main + ' !important',
    },
    TeacherSection: {
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content',
        fontSize: '0.8rem',
        "& span": {
            marginRight: 3,
        },
    },
    BorderTop: {
        borderTop: '1px solid #676767',
    },
    Views: {
        cursor: 'pointer',
        transition: '.3s',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        '& span': {
            marginLeft: 3,
            fontWeight: 'bold',
        }
    },
    excerpts: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
    },
}));

export default function PostCard(props) {
    const classes = useStyles();
    return (
        <Col {...props.grid}>
            <Card elevation={3} className="mt-5">
                <img src={props.img} className={classes.img} alt={props.title} />
                <CardContent className={classes.paddingInto}>

                    <Link href={props.link}>
                        <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: classes.Tooltip, arrow: classes.ArrowTooltip }} interactive="true">
                            <a className={classes.title}>{props.title}</a>
                        </Tooltip>
                    </Link>

                    <Typography className={['mt-3', classes.excerpts].join(' ')} variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>

                    <Grid container className="mt-3" justifyContent="space-between">
                        <Link href={props.author.link}>
                            <a className={classes.TeacherSection}>
                                <Typography variant="body2" gutterBottom className={classes.TeacherSection}>
                                    <PersonIcon fontSize="small" />
                                    <span>{props.author.name}</span>
                                </Typography>
                            </a>
                        </Link>
                        <span className={[classes.TeacherSection, classes.Views].join(' ')}>
                            <span>{new Intl.NumberFormat().format(props.views)}</span>
                            <VisibilityOutlinedIcon fontSize="small" />
                        </span>
                    </Grid>

                </CardContent>
                <CardActions className={['mt-3', classes.BorderTop].join(' ')}>
                    <Grid container justifyContent="space-between">

                        <IconButton size="small" color="primary">
                            <BookmarkBorderOutlinedIcon />
                        </IconButton>

                        <Link href={props.link}>
                            <Button size="small" color="primary" variant="contained">
                                ?????????? ????????
                            </Button>
                        </Link>

                    </Grid>
                </CardActions>
            </Card>
        </Col>
    );
};
