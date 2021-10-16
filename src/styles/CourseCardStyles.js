import makeStyles from '@mui/styles/makeStyles';

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
        marginTop: 12,
        "& span": {
            marginRight: 3,
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
            marginLeft: 5,
        }
    },
    TimeSection: {
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content',
        "& span": {
            marginRight: 5,
        }
    },
}));

export default useStyles;
