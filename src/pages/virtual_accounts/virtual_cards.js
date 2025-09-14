import React from "react";
import { Box, Grid, Typography, Tooltip } from "@mui/material";
import Iconify from "../../components/Iconify";

const data = [
    {
        title: "Customers",
        icon: "👤",
        count: 0,
        tooltip: "Total number of customers",
    },
    {
        title: "Accounts",
        icon: "📂",
        count: 0,
        tooltip: "Total number of accounts",
    },
    {
        title: "Transactions",
        icon: "➡",
        count: 0,
        tooltip: "Total number of transactions",
    },
];

export default function VirtualCards() {
    return (
        <Box
            sx={{
                mt: 3,
                mb: 2,
                // p: 4,
                // backgroundColor: '#f5f5f5',
            }}
        >
            <Grid container spacing={3}>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 3,
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#e0e0ff",
                                    borderRadius: "8px",
                                    width: "50px",
                                    height: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "16px",
                                }}
                            >
                                <Typography variant="h5" sx={{ color: "#6200ea" }}>
                                    {item.icon}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {item.title}
                                    <Tooltip title={item.tooltip} arrow>
                                        <span
                                            style={{
                                                color: "#6200ea",
                                                marginLeft: 4,
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Iconify
                                                sx={{ width: 20, height: 20, color: "primary.main" }}
                                                icon="fe:question"
                                            />
                                        </span>
                                    </Tooltip>
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                    {item.count}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
