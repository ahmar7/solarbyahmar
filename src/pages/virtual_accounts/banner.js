import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

export default function VirtaulBanner() {
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                {/* Section 1: Beta release text */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                        Beta release!
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Get an overview on the activity of your virtual accounts, currently in
                        read-only mode. We're happy to hear your feedback!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Notice: This early release uses our API directly and may incur credit
                        charges when viewed inside this dashboard.
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="body1" display="flex" alignItems="center">
                                <span style={{ color: 'black', marginRight: 8 }}>✔</span> No blockchain fees for off-chain transfers
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="body1" display="flex" alignItems="center">
                                <span style={{ color: 'black', marginRight: 8 }}>✔</span> Automatic balance updates
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="body1" display="flex" alignItems="center">
                                <span style={{ color: 'black', marginRight: 8 }}>✔</span> Your own virtual currencies
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 2: Buttons */}
                <Grid item xs={12} md={4} display="flex" flexDirection="column" height={"100%"} justifyContent={"center"} alignItems="center" gap={2}>
                    <Button variant="outlined" sx={{ maxWidth: '250px' }}>
                        Get started with Virtual Accounts
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#6200ea',
                            color: '#fff',
                            minWidth: '250px',
                        }}
                    >
                        Send us your feedback
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
