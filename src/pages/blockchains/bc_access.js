import React from "react";
import { Card, CardContent, Typography, Button, Box, Divider } from "@mui/material";

const AccessComponent = () => {
    return (
        <Card sx={{ padding: "1rem", boxShadow: 3, }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Get access to over 40 networks with high performance
                </Typography>
                <Divider sx={{ marginY: "1rem" }} />
                <Box display="flex" flexDirection="column" gap="1rem">
                    <Typography variant="body2">• Credits per month</Typography>
                    <Typography variant="body2">• Global GEO load balancer</Typography>
                    <Typography variant="body2">• Archive, debug, trace methods</Typography>
                    <Typography variant="body2">• Batch calls</Typography>
                    <Typography variant="body2">• Advanced analytics</Typography>
                </Box>
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "1rem" }}>
                    Buy Plan
                </Button>
            </CardContent>
        </Card>
    );
};

export default AccessComponent;
