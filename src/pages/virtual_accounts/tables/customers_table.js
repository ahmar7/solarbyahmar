
import React, { useState, } from "react";
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
    Button,
} from "@mui/material";
import Iconify from "../../../components/Iconify";

const CustomerTable = () => {
    const [selectedKey, setSelectedKey] = useState("t-67...95eb");
    const [searchQuery, setSearchQuery] = useState("");
    const [data,] = useState([]);

    // Handle Search Input
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

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
                        value={selectedKey}
                        onChange={(e) => setSelectedKey(e.target.value)}
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
                            value={searchQuery}
                            onChange={handleSearch}
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
                                <TableCell> ustomer ID</TableCell>
                                <TableCell>Accounting Currency</TableCell>
                                <TableCell>Customer Country</TableCell>
                                <TableCell>Provider Country</TableCell>
                                <TableCell>External ID</TableCell>
                                <TableCell>Enabled</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.length > 0 ? (
                                data.map((val, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{val.chain}</TableCell>
                                        <TableCell>{val.type}</TableCell>
                                        <TableCell>{val.subscription}</TableCell>
                                        <TableCell>{val.address}</TableCell>
                                        <TableCell>
                                            <a
                                                href={val.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {val.url}
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" size="small">
                                                Manage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} align="center">
                                        No data found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CustomerTable;
