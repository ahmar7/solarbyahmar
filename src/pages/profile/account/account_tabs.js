import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import AccountSetting from "./ac_setting";
import AccountHistory from "./ac_history";


const AccountTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
                    width: "100%",
                }}
            >
                {/* Tabs Section (80%) */}
                <Box
                    sx={{
                        width: "100%",
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
                        <Tab label="SETTINGS" value={0} />
                        <Tab label="HISTORY" value={1} />
                    </Tabs>
                </Box>
            </Box>
            <Box>
                {tabIndex === 0 && <AccountSetting />}
                {tabIndex === 1 && <AccountHistory />}
            </Box>
        </>
    );
};

export default AccountTabs;
