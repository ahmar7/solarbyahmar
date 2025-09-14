import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Iconify from "../../components/Iconify";

const WebhookTable = () => {
  return (
    <Card sx={{ margin: "auto", mt: 2 }}>
      <CardContent>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Select
            defaultValue="t-67...95eb"
            sx={{ minWidth: 200 }}
            variant="outlined"
          >
            <MenuItem value="t-67...95eb">
              t-67...95eb - Mainnet API key
            </MenuItem>
            <MenuItem value="t-68...abcd">
              t-68...abcd - Testnet API key
            </MenuItem>
          </Select>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              placeholder="Search by txId, subscriptionId or address"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1 }}
            />
            <IconButton aria-label="filter">
              <Iconify icon={"majesticons:filter"} />
            </IconButton>
          </Box>
        </Box>

        {/* Table Section */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "rgb(249, 250, 251)" }}>
                <TableCell>CHAIN</TableCell>
                <TableCell>TYPE</TableCell>
                <TableCell>SUBSCRIPTION</TableCell>
                <TableCell>SENT</TableCell>
                <TableCell>SUCCESS</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No notifications sent. Create a subscription to start
                  receiving notifications.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ mb: 2 }} />

        {/* Webhook Notice */}
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary", textAlign: "center" }}>
          Webhooks are retained for a day,{" "}
          <Button variant="text" color="primary" size="small">
            upgrade to have higher retention
          </Button>
          .
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WebhookTable;
