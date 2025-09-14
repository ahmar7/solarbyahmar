import { Button, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import PlanBar from "../overview/plan_bar";
import Iconify from "../../components/Iconify";
import { useNavigate } from "react-router-dom";  // Import useNavigate

export default function PlanStats() {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleUpgrade = () => {
        navigate("/dashboard/upgradeplans");  // Navigate to the upgrade plans route
    };

    return (
        <>
            <Grid container spacing={2} alignItems="center">
                {/* Plan Description */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Free plan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        100,000 credits included
                        <Tooltip title="Credits explanation" arrow>
                            <Typography
                                component="span"
                                sx={{
                                    cursor: "pointer",
                                    marginLeft: 0.5,
                                    color: "primary.main",
                                }}
                            >
                                <Iconify
                                    sx={{
                                        width: "20px",
                                        height: "20px",
                                        color: "primary.main",
                                    }}
                                    icon={"fe:question"}
                                />
                            </Typography>
                        </Tooltip>
                    </Typography>
                </Grid>

                {/* Plan Bar Progress */}
                <Grid item xs={12} sm={5}>
                    <PlanBar />
                    <Typography
                        color={"rgb(44, 205, 154)"}
                        variant="body2"
                        sx={{ marginTop: 1 }}
                    >
                        0 included credits used
                    </Typography>
                </Grid>

                {/* Upgrade Button */}
                <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "right" }}>
                    <Button size="large" variant="contained" onClick={handleUpgrade}>
                        Upgrade plan
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
