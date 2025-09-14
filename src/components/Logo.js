import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
    disabledLink: PropTypes.bool,
    sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
    // const theme = useTheme();

    // const PRIMARY_LIGHT = theme.palette.primary.light;

    // const PRIMARY_MAIN = theme.palette.primary.main;

    // const PRIMARY_DARK = theme.palette.primary.dark;

    // OR
    // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

    const logo = (
        <Box sx={{ width: 40, height: 40, ...sx }}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="h-20"><path d="M30.378 16.852h-9.243v17.002h9.243V16.852Z" fill="#4F37FD"></path><path d="M42.253 4.19h-16.98v8.51H42.25l.004-8.51Z" fill="#2CCD9A"></path><path d="M21.136 8.343H4.174v8.51h16.962v-8.51Z" fill="#4F37FD"></path><path d="M131.619 13.874h-3.61v20.108h3.444v-13.24h.16l6.82 13.242h.131l6.846-13.243h.13v13.241h3.4V13.874h-3.282l-6.99 13.636h-.102l-6.947-13.636ZM53.756 33.983h3.41V16.867h8.983v-2.993h-8.97v2.993H46.582v2.986h7.173v14.13Zm29.96-20.108v2.695h6.469v17.413h3.444V16.575h6.462v-2.7H83.715Zm35.273 15.385c.01.228-.025.455-.101.67a1.698 1.698 0 0 1-.379.569c-.156.169-.35.298-.566.378a1.794 1.794 0 0 1-.669.102h-7.456a1.72 1.72 0 0 1-.668-.102 1.54 1.54 0 0 1-.582-.378 1.484 1.484 0 0 1-.363-.57 1.561 1.561 0 0 1-.102-.669V13.874h-3.444v15.224a4.662 4.662 0 0 0 1.186 3.354 4.643 4.643 0 0 0 3.698 1.53h8.023a4.618 4.618 0 0 0 3.345-1.189 4.664 4.664 0 0 0 1.524-3.69V13.874h-3.446v15.384ZM76.725 25.9h-6.671l3.285-8.1h.117l3.27 8.1Zm-1.452-12.025h-3.562l-8.343 20.108h3.358l2.074-5.097h9.143l2.062 5.085h3.576l-8.308-20.096Z" fill="#000"></path></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
