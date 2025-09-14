import React from "react";
import {
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const PlanTable = () => {
    return (
        <Card sx={{ margin: "auto", mt: 2 }}>

            <CardContent>
                {/* Table Section */}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "rgb(249, 250, 251)" }}>
                                <TableCell>Date</TableCell>
                                <TableCell>Plan</TableCell>
                                <TableCell>Billing interval</TableCell>
                                <TableCell>Method</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    Your invoices will appear here.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default PlanTable;
