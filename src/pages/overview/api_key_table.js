import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

const data = [
    {
        name: "Mainnet API key",
        key: "t-6797****c095eb",
        environment: "Mainnet",
        plan: "Free",
        region: "Europe",
        type: "V4",
    },
    {
        name: "Testnet API key",
        key: "t-6797****4ea281",
        environment: "Testnet",
        plan: "Free",
        region: "Europe",
        type: "V4",
    },
];

const ApiKeyTable = () => {
    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    API Keys
                </Typography>
                <TableContainer component={Paper} elevation={0}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "rgb(249, 250, 251)" }}>
                                <TableCell>Name</TableCell>
                                <TableCell>Key</TableCell>
                                <TableCell>Environment</TableCell>
                                <TableCell>Plan</TableCell>
                                <TableCell>Region</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.key}</TableCell>
                                    <TableCell>{row.environment}</TableCell>
                                    <TableCell>{row.plan}</TableCell>
                                    <TableCell>{row.region}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default ApiKeyTable;
