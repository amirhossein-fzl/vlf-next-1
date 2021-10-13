import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Typography from '@mui/material/Typography';

const Breadcrumb = (props) => {
    return (
        <Breadcrumbs separator={<NavigateBeforeIcon fontSize="small" />} aria-label="breadcrumb">
            {props.children}
            <Typography color="text.primary">
                {props.active}
            </Typography>
        </Breadcrumbs>
    );
}

export default Breadcrumb;
