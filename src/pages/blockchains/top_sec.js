import React from "react";
import { Grid, Container, Box } from "@mui/material";
import CardComponent from "./bc_card";
import AccessComponent from "./bc_access";
import { top } from "./cards_data";

const TopSec = () => {
    return (
        <Container sx={{ marginTop: "2rem" }}>
            <Grid container spacing={2}>
                {/* Cards Section */}
                <Grid item xs={12} md={7}>
                    <Grid container spacing={2}>
                        {top.map((data, index) => (
                            <Grid item xs={12} sm={6} md={6} key={index}>
                                <CardComponent {...data} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Access Component Section */}
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            //   justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        }}
                    >
                        <AccessComponent />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopSec;
