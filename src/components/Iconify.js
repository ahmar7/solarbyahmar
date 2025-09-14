// components/Iconify.js
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

Iconify.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    sx: PropTypes.object,
};

export default function Iconify({ icon, sx, ...other }) {
    return <Box component={Icon} icon={icon} sx={{ width: 24, height: 24, ...sx }} {...other} />;
}
