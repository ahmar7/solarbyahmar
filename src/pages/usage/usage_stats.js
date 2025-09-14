import React from "react";
import { Grid, Card, CardContent, Typography, Box, Button } from "@mui/material";

import Iconify from "../../components/Iconify";

const data = [
  { label: "Cost", value: "$0", icon: "💰" },
  { label: "Sent Notifications", value: "0", icon: "✉️" },
  { label: "API Calls", value: "0", icon: "📡" },
  { label: "Deployments", value: "0", icon: "📄" },
  { label: "Gas Pump", value: "0", icon: "⛽" },
  { label: "Custodial Wallet", value: "0", icon: "👛" },
  { label: "NFT Express", value: "0", icon: "🖼️" },
  { label: "Other Fee Covering", value: "0", icon: "💲" }
];

const UsageStats = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", paddingLeft: 1 }}>
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
                {item.icon}
              </Box>
              <CardContent>
                <Typography variant="body2  " color={"textSecondary"}>
                  {item.label}
                </Typography>
                <Typography variant="h6">{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* Special case for RPC Calls */}
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <Typography variant="h5" sx={{ mr: 2 }}>
              🔬
            </Typography>
            <CardContent>
              <Typography variant="body1" fontWeight="bold">
                RPC Calls
              </Typography>
              <Typography variant="h6">Available for paid users</Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ mt: 1 }}
                // startIcon={<Iconify icon={""}/>}
              >
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default UsageStats;
