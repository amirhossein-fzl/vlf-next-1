import React, { useState, useEffect } from 'react';
import { Card, CardContent, makeStyles, Tooltip, Grid, Typography, Button, CardActions, Zoom } from '@material-ui/core';
import Link from 'next/link';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ContentLoader from 'react-content-loader';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css';

const Loader = (props) => (
    <ContentLoader
        rtl
        speed={2}
        width={288}
        height={387}
        viewBox="0 0 288 387"
        backgroundColor="#f2f2f2"
        foregroundColor="#dedede"
        {...props}
    >
        <rect x="0" y="0" rx="4" ry="4" width="288" height="205" />
        <rect x="10" y="222" rx="4" ry="4" width="267" height="24" />
        <rect x="10" y="276" rx="4" ry="4" width="92" height="24" />
        <rect x="10" y="357" rx="4" ry="4" width="103" height="24" />
        <rect x="207" y="357" rx="4" ry="4" width="68" height="22" />

    </ContentLoader>
)

const useStyles = makeStyles((theme) => ({
    discountLogo: {
        width: 60,
        height: 'auto',
        position: 'absolute',
        top: '-20px',
        left: '-15px',
        userSelect: 'none',
    },
    prd: {
        position: 'relative',
    },
    paddingInto: {
        padding: '7px 10px 0px',
    },
    image: {
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
        backgroundColor: theme.palette.primary.main,
        fontSize: 14,
    },
    ArrowTooltip: {
        color: theme.palette.primary.main,
    },
    TeacherSection: {
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content',
        marginTop: 12,
        "& span": {
            marginLeft: 3,
        },
    },
    Price: {
        color: '#0096c7',
        fontSize: 15,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        "& span": {
            fontSize: 20,
            marginRight: 5,
        }
    },
    TimeSection: {
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content',
        "& span": {
            marginLeft: 5,
        }
    },
}));



export default function CourseCard(props) {
    const [loading, setLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (imageLoading) {
                setLoading(false);
            }
        }, 3000);
    });
    const classes = useStyles();
    return (
        <Col {...props.grid} className={classes.prd}>
            <Card elevation={3} className="mt-5" >
                {props.discount ? (<img src="/svg/discount.svg" alt="" className={classes.discountLogo} />) : null}
                <img src={props.img} alt={props.title} className={classes.image} onLoad={() => setImageLoading(true)} />
                <CardContent className={classes.paddingInto}>

                    <Link href={props.link}>
                        <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: classes.Tooltip, arrow: classes.ArrowTooltip }} interactive>
                            <a className={classes.title}>{props.title}</a>
                        </Tooltip>
                    </Link>

                    <Link href={props.teacher.link}>
                        <a className={classes.TeacherSection}>
                            <Typography variant="body2" gutterBottom className={classes.TeacherSection}>
                                <PersonIcon />
                                <span>{props.teacher.name}</span>
                            </Typography>
                        </a>
                    </Link>

                    <Typography align="right" variant="button" gutterBottom className={classes.Price} component="p">
                        <span>{new Intl.NumberFormat().format(props.price)}</span>
                        تومان
                    </Typography>

                </CardContent>
                <CardActions>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" className={classes.TimeSection}>
                            <AccessTimeIcon />
                            <span>{props.time} ساعت</span>
                        </Typography>
                        <Link href={props.link}>
                            <Button variant="contained" size="small" color="primary">
                                مشاهده دوره
                            </Button>
                        </Link>
                    </Grid>
                </CardActions>
            </Card>
        </Col>
    );
}


