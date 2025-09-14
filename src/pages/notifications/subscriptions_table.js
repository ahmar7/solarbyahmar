import React from "react";
import {
    Card,
    CardContent,
    Box,
    Select,
    MenuItem,
    TextField,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import Iconify from "../../components/Iconify";

const SubscriptionsTable = () => {
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
                                <TableCell>ADDRESS/EVENT</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>ACTION</TableCell>
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
            </CardContent>
        </Card>
    );
};

export default SubscriptionsTable;
