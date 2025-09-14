import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Tooltip,
    Box,
} from "@mui/material";
import Iconify from "../../components/Iconify";

const NotificationStats = () => {
    return (
        <Grid container spacing={1} justifyContent="space-between">
            {/* Sent Notifications Card */}
            <Grid item xs={12} sm={6} md={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid container alignItems="center" justifyContent="space-between">
                            {/* Left Section: Sent Notifications */}
                            <Grid
                                container
                                sm={7}
                                alignItems="center"
                                spacing={2}
                                wrap="nowrap"
                            >
                                {/* Icon Box */}
                                <Grid item>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: "rgb(223 221 238)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 1,
                                        }}
                                    >
                                        <Iconify
                                            sx={{ width: 30, height: 30, color: "primary.main" }}
                                            icon="material-symbols-light:mail-outline"
                                        />
                                    </Box>
                                </Grid>

                                {/* Text Section */}
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        Sent notifications
                                        <Tooltip title="Total notifications sent so far" arrow>
                                            <Box
                                                component="span"
                                                sx={{
                                                    cursor: "pointer",
                                                    ml: 0.5,
                                                    color: "primary.main",
                                                }}
                                            >
                                                <Iconify
                                                    sx={{ width: 20, height: 20, color: "primary.main" }}
                                                    icon="fe:question"
                                                />
                                            </Box>
                                        </Tooltip>
                                    </Typography>
                                    <Typography variant="h4">0 / 100</Typography>
                                </Grid>
                            </Grid>

                            {/* Right Section: Success Rate */}
                            <Grid
                                item
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <Typography color="textSecondary">Success Rate</Typography>
                                <Typography variant="h4">0.0%</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            {/* Subscriptions Card */}
            <Grid item xs={12} sm={6} md={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid container alignItems="center" justifyContent="space-between">
                            {/* Left Section: Sent Notifications */}
                            <Grid
                                container
                                sm={7}
                                alignItems="center"
                                spacing={2}
                                wrap="nowrap"
                            >
                                {/* Icon Box */}
                                <Grid item>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            backgroundColor: "rgb(223 221 238)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 1,
                                        }}
                                    >
                                        <Iconify
                                            sx={{ width: 30, height: 30, color: "primary.main" }}
                                            icon="solar:refresh-square-outline"
                                        />
                                    </Box>
                                </Grid>

                                {/* Text Section */}
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        Subscriptions
                                        <Tooltip title="Total notifications sent so far" arrow>
                                            <Box
                                                component="span"
                                                sx={{
                                                    cursor: "pointer",
                                                    ml: 0.5,
                                                    color: "primary.main",
                                                }}
                                            >
                                                <Iconify
                                                    sx={{ width: 20, height: 20, color: "primary.main" }}
                                                    icon="fe:question"
                                                />
                                            </Box>
                                        </Tooltip>
                                    </Typography>
                                    <Typography variant="h4">0 / 5</Typography>
                                </Grid>
                            </Grid>

                            {/* Right Section: Success Rate */}
                            <Grid item>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                    Upgrade Plan
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default NotificationStats;
