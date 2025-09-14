import React, { useState } from "react";
import { Tabs, Tab, Box, Select, MenuItem, CircularProgress } from "@mui/material";
import UsageTable from "./usage_table";
import UsageCharts from "./usage_charts";

const UsageTabs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [dateRange, setDateRange] = useState("90 Days");
  const [isLoading, setIsLoading] = useState(false); // State for loading

  // Handle date range change
  const handleDateRangeChange = (e) => {
    const newDateRange = e.target.value;
    setDateRange(newDateRange);
    setIsLoading(true); // Start loading

    // Simulate a fake loading delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsLoading(false); // End loading
    }, 2000);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "#f4f5f7",
          borderRadius: 2,
        }}
      >
        {/* Tabs Section (80%) */}
        <Box
          sx={{
            width: "65%",
            bgcolor: "#e0e3eb",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            p: 0.5,
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={(e, newValue) => setTabIndex(newValue)}
            sx={{
              width: "100%",
              "& .MuiTab-root": {
                flex: 1, // 50% width for each tab
                fontWeight: 600,
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "all 0.3s",
              },
              "& .Mui-selected": {
                bgcolor: "#fff",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab label="Charts" value={0} />
            <Tab label="Report" value={1} />
          </Tabs>
        </Box>

        {/* Date Picker Section (20%) */}
        <Box sx={{ width: "30%", display: "flex", justifyContent: "flex-end" }}>
          <Select
            value={dateRange}
            onChange={handleDateRangeChange} // Updated handler
            variant="outlined"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              fontWeight: 600,
              width: "80%",
            }}
          >
            <MenuItem value="7 Days">7 Days</MenuItem>
            <MenuItem value="30 Days">30 Days</MenuItem>
            <MenuItem value="90 Days">90 Days</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Loading State */}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <CircularProgress /> {/* Material-UI loading spinner */}
        </Box>
      ) : (
        <Box>
          {tabIndex === 0 && <UsageCharts />}
          {tabIndex === 1 && <UsageTable />}
        </Box>
      )}
    </>
  );
};

export default UsageTabs;