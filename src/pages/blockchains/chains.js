import React, { useState } from "react";
import {
    Container,
    Box,
    Grid,
    Typography,
    Button,
    Select,
    MenuItem,
    IconButton,
    Chip,
    Paper,
    Divider,
    Tabs,
    Tab,
    Card,
    CardContent,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon, FileCopy as FileCopyIcon, CopyAll as CopyAllIcon } from "@mui/icons-material";

const EthereumComponent = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedNetwork, setSelectedNetwork] = useState("ethereum-mainnet.gateway.tatum.io");

    // SDK Code snippets
    const sdkCodeSnippets = {
        curl: `curl --request POST \\
--url 'https://ethereum-mainnet.gateway.tatum.io/' \\
--header 'accept: application/json' \\
--header 'content-type: application/json' \\
--header 'x-api-key: t-67853e56a3925d2e4f056155-419029ca91d6465cb2c92b5a' \\
--data '{"jsonrpc":"2.0","method":"eth_blockNumber","id":1}'`,
        node: `const axios = require('axios');

axios.post('https://ethereum-mainnet.gateway.tatum.io/', {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-67853e56a3925d2e4f056155-419029ca91d6465cb2c92b5a'
  },
  data: {
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    id: 1
  }
}).then(response => console.log(response.data));`,
        python: `import requests

url = 'https://ethereum-mainnet.gateway.tatum.io/'
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 't-67853e56a3925d2e4f056155-419029ca91d6465cb2c92b5a'
}
data = {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "id": 1
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,
        ruby: `require 'net/http'
require 'json'
require 'uri'

uri = URI('https://ethereum-mainnet.gateway.tatum.io/')
header = {'accept': 'application/json', 'content-type': 'application/json', 'x-api-key': 't-67853e56a3925d2e4f056155-419029ca91d6465cb2c92b5a'}
data = { "jsonrpc": "2.0", "method": "eth_blockNumber", "id": 1 }.to_json

http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.path, header)
request.body = data
response = http.request(request)
puts response.body`,
        go: `package main

import (
  "bytes"
  "fmt"
  "net/http"
  "strings"
)

func main() {
  url := "https://ethereum-mainnet.gateway.tatum.io/"
  jsonStr := \`{"jsonrpc":"2.0","method":"eth_blockNumber","id":1}\`
  req, _ := http.NewRequest("POST", url, bytes.NewBufferString(jsonStr))
  req.Header.Set("accept", "application/json")
  req.Header.Set("content-type", "application/json")
  
  client := &http.Client{}
  resp, _ := client.Do(req)

  fmt.Println(resp.Status)
}
`,
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Code copied to clipboard!");
        });
    };

    return (
        <Container maxWidth="xl">
            {/* Main Card for All Content */}
            <Card sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                    {/* Header Section */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <IconButton color="primary" aria-label="back" size="large">
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.primary" }}>
                                Blockchains &gt; Ethereum
                            </Typography>
                        </Box>

                        {/* Network Dropdown */}
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <Select
                                value={selectedNetwork}
                                onChange={(e) => setSelectedNetwork(e.target.value)}
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    width: 250,
                                    fontSize: "1rem",
                                    boxShadow: 1,
                                    "& .MuiSelect-icon": { color: "primary.main" },
                                }}
                                size="small"
                            >
                                <MenuItem value="ethereum-mainnet.gateway.tatum.io">ethereum-mainnet.gateway.tatum.io</MenuItem>
                                <MenuItem value="ethereum-holesky.gateway.tatum.io">ethereum-holesky.gateway.tatum.io</MenuItem>
                                <MenuItem value="ethereum-sepolia.gateway.tatum.io">ethereum-sepolia.gateway.tatum.io</MenuItem>
                            </Select>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    height: 51,
                                    width: 51,
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                        boxShadow: 6,
                                    },
                                }}
                                onClick={() => { }}
                            >
                                <CopyAllIcon />
                            </Button>
                        </Box>
                    </Box>

                    {/* Ethereum Blockchain Information */}
                    <Box sx={{ marginBottom: 4 }}>
                        <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <img
                                    src="https://blockchains.tatum.io/assets/img/ethereum.svg"
                                    alt="Ethereum"
                                    style={{ width: 64, height: 64 }}
                                />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Ethereum
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 2 }}>
                                        <Button
                                            size="small"
                                            target="_blank"
                                            href="https://docs.tatum.io/reference/rpc-ethereum"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: "white",
                                                "&:hover": {
                                                    backgroundColor: "primary.light",
                                                },
                                            }}
                                        >
                                            Documentation
                                        </Button>
                                        <Button
                                            size="small"
                                            target="_blank"
                                            href="https://ethereum.org"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: "white",
                                                "&:hover": {
                                                    backgroundColor: "primary.light",
                                                },
                                            }}
                                        >
                                            Official Website
                                        </Button>
                                        <Button
                                            size="small"
                                            target="_blank"
                                            href="https://etherscan.io"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: "white",
                                                "&:hover": {
                                                    backgroundColor: "primary.light",
                                                },
                                            }}
                                        >
                                            Block Explorer
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ marginTop: 3 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    Blockchain RPC Gateway
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                                    <Chip label="Tier 1" color="success" />
                                    <Chip label="Healthy" color="primary" />
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        Requests per second: 3 RPS
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>

                    {/* Boost Your Ethereum Experience */}
                    <Box sx={{ marginBottom: 4 }}>
                        <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Boost Your Ethereum Experience
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: 2 }}>
                                Credits per month, Global GEO load balancer, Archive, debug, trace methods, and more.
                            </Typography>

                            <Grid container spacing={2} sx={{ marginTop: 3 }}>
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            padding: 3,
                                            backgroundColor: "white",
                                            borderRadius: 2,
                                            boxShadow: 1,
                                            "&:hover": {
                                                boxShadow: 4,
                                            },
                                        }}
                                    >
                                        <Typography variant="h6">Free Plan</Typography>
                                        <Typography variant="body2">100k credits</Typography>
                                        <Typography variant="body2">3 RPS</Typography>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                marginTop: 2,
                                                "&:hover": {
                                                    backgroundColor: "primary.light",
                                                },
                                            }}
                                        >
                                            Select
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            padding: 3,
                                            backgroundColor: "white",
                                            borderRadius: 2,
                                            boxShadow: 1,
                                            "&:hover": {
                                                boxShadow: 4,
                                            },
                                        }}
                                    >
                                        <Typography variant="h6">Pay as You Go</Typography>
                                        <Typography variant="body2">4M credits</Typography>
                                        <Typography variant="body2">200 RPS</Typography>
                                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                                            $25 monthly*
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{
                                                marginTop: 2,
                                                "&:hover": {
                                                    backgroundColor: "primary.dark",
                                                },
                                            }}
                                        >
                                            Select
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>

                    {/* SDK Documentation Section */}
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            Build an Ethereum App Using Tatum SDK
                        </Typography>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Integrate Ethereum with Tatum SDK to easily interact with the blockchain.
                            </Typography>

                            {/* SDK Tabs */}
                            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="SDK Tabs" sx={{ marginTop: 2 }}>
                                <Tab label="cURL" />
                                <Tab label="Node" />
                                <Tab label="Python" />
                                <Tab label="Ruby" />
                                <Tab label="Go" />
                            </Tabs>

                            <Divider sx={{ marginTop: 2 }} />
                            <Box sx={{ paddingTop: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    Code Example for {["cURL", "Node", "Python", "Ruby", "Go"][selectedTab]}
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: "black",
                                        color: "white",
                                        padding: 3,
                                        borderRadius: 2,
                                        marginTop: 2,
                                        position: "relative",
                                        fontFamily: "'Courier New', Courier, monospace",
                                    }}
                                >
                                    <pre>{sdkCodeSnippets[["curl", "node", "python", "ruby", "go"][selectedTab]]}</pre>
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.6)" },
                                        }}
                                        onClick={() => handleCopy(sdkCodeSnippets[["curl", "node", "python", "ruby", "go"][selectedTab]])}
                                    >
                                        <FileCopyIcon sx={{ color: "white" }} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default EthereumComponent;
