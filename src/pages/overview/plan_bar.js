import React from "react";
import { Box } from "@mui/material";

const PlanBar = () => {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                overflow: "hidden",
                borderRadius: "8px",
                backgroundColor: "rgb(226, 232, 240)", // Slate-200 equivalent
                height: "42px",
            }}
        >
            {/* Progress Bar */}
            <Box
                sx={{
                    position: "relative",
                    flex: 1,
                    height: "100%",
                    backgroundColor: "rgb(226, 232, 240)", // Green progress
                    width: "0.07583%", // Progress width
                }}
            />

            {/* Marker */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: "83.3333%", // Marker position
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        top: 0,
                        height: "100%",
                        width: "3px", // Red line width
                        backgroundColor: "rgb(225, 5, 5)", // Red line color
                        opacity: 1,
                    }}
                />
            </Box>
        </Box>
    );
};

export default PlanBar;
