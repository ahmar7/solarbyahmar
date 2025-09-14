// material
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
// components
import Page from "../../components/Page";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function Error_Logs() {
  const [selectedKey, setSelectedKey] = useState("t-67...95eb");
  return (
    <Page title="Dashboard: Error Logs">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Error Logs
          </Typography>
        </Stack>

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
                placeholder="Filter By Key"
                onChange={(e) => setSelectedKey(e.target.value)}
                sx={{ minWidth: 300, color: 'balck' }}
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
                {/* <TextField
              placeholder="Search by txId, subscriptionId or address"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1 }}
              value={searchQuery}
              onChange={handleSearch}
            />
            <IconButton aria-label="filter">
              <Iconify icon={"majesticons:filter"} />
            </IconButton> */}
              </Box>
            </Box>
            <Divider />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="50vh"
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography fontSize={24} fontWeight="bold">
                  ≡
                </Typography>
              </Box>
              <Typography variant="h6" mt={2}>
                No Logs
              </Typography>
              <Typography variant="body2" mt={1} color="textSecondary">
                Start sending requests to see logs
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}
