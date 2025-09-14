import React, { useState } from "react";
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
import Iconify from "../../components/Iconify";
const defaultData = [
  {
    time: "31 Jan 2025, 22:00",
    type: "API Calls",
    subtype: "General",
    chain: "t-6797c...bc095eb",
    api_key: "t-6797c...bc095eb",
    counts: 4,
    credits: 13,
  },

];
const UsageTable = () => {
  const [selectedKey, setSelectedKey] = useState("t-67...95eb");
  const [searchQuery, setSearchQuery] = useState("");
  const [data] = useState(defaultData);

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
            <Button variant="contained" color="primary">
              Download CSV
            </Button>
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
                <TableCell>Time</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Subtype</TableCell>
                <TableCell>Chain</TableCell>
                <TableCell>API Key</TableCell>
                <TableCell>Counts</TableCell>
                <TableCell>Credits</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.map((val, index) => (
                  <TableRow key={index}>
                    <TableCell>{val.time}</TableCell>
                    <TableCell>{val.type}</TableCell>
                    <TableCell>{val.subtype}</TableCell>
                    <TableCell>{val.chain}</TableCell>
                    <TableCell>{val.api_key}</TableCell>
                    <TableCell>{val.counts}</TableCell>
                    <TableCell>{val.credits}</TableCell>
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

export default UsageTable;
