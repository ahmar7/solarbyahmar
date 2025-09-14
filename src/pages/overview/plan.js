import React from "react";
import { Typography, Box, Button, Card, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import PlanStats from "./plan_stats";
export default function Plan() {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <Card>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        padding: 3,
                        // maxWidth: 600,
                        margin: "auto",
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                    }}
                >
                    {/* Header Section */}
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {/* Text Section */}
                        <Grid item xs={12} sm={8} md={6}>
                            <Typography variant="h4" fontWeight="bold">
                                Welcome {user?.username || "Mubeen"}! Let’s get started!
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Explore on your own or follow our documentation and tutorials.
                            </Typography>
                        </Grid>

                        {/* Button Section */}
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            textAlign={{ xs: "center", sm: "right" }}
                        >
                            <Button color="inherit" variant="outlined">
                                Documentation&nbsp;→
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Plan Section */}
                    <PlanStats />
                </Box>
            </Card>
        </>
    );
}
