import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Backdrop } from '@mui/material';

const GlobalLoader = () => {
    const loading = useSelector((state) => state.loader.loading);

    if (!loading) return null;

    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}
        >
            {/* Spinner */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress color="primary" size={64} />
            </Box>
        </Backdrop>
    );
};

export default GlobalLoader;
