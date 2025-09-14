import React from "react";
import { Card, Typography, Box, Select, MenuItem, IconButton, Chip } from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Iconify from "../../components/Iconify";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CardComponent = ({ icon, title, options, status, tier, networkType }) => {
    const [selectedOption, setSelectedOption] = React.useState(options[0]?.value || "");
    const navigate = useNavigate();

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCopy = () => {
        const originalUrl = `https://${selectedOption}.gateway.tatum.io/`;
        navigator.clipboard.writeText(originalUrl).then(() => {
            alert("URL copied to clipboard!");
        });
    };

    const getDisplayUrl = () => {
        return `https://${selectedOption}.gateway.ourname.com/`;
    };

    const handleChevronClick = () => {
        navigate("/dashboard/ethereum");
    };

    return (
        <Card
            sx={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                borderRadius: "8px",
                boxShadow: 3,
                backgroundColor: "#fff",
            }}
        >
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap="1rem">
                    <Icon icon={icon} width="36" height="36" />
                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                        {title}
                    </Typography>
                </Box>
                <Chip
                    label={status}
                    size="small"
                    sx={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "16px",
                    }}
                />
            </Box>

            {/* Dropdown and Copy Button */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} width="100%">
                <Select
                    value={selectedOption}
                    onChange={handleSelect}
                    size="small"
                    sx={{
                        flexGrow: 1,  // Ensures Select takes the available space
                        fontSize: "1rem",
                        borderRadius: "4px",
                        borderColor: "#ddd",
                        '& .MuiSelect-icon': {
                            color: "#555",
                        },
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <IconButton onClick={handleCopy} sx={{ color: "#1976d2" }}>
                    <Iconify icon={"solar:copy-outline"} />
                </IconButton>
            </Box>


            {/* Display Custom URL */}
            <Typography variant="body2" color="text.secondary" mt={2}>
                <strong>Display URL:</strong> {getDisplayUrl()}
            </Typography>

            {/* Footer with tier and network type */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
                <Typography variant="body2" color="text.secondary">
                    {tier}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {networkType}
                </Typography>
            </Box>

            {/* Chevron Right at the bottom right */}
            <IconButton
                onClick={handleChevronClick}
                sx={{
                    position: "absolute",
                    bottom: "16px",    // Ensures it's 16px from the bottom of the card
                    right: "0px",     // Ensures it's 16px from the right of the card
                    left: "8px",
                    fontSize: "2.5rem",
                    color: "#1976d2",
                    '&:hover': {
                        backgroundColor: "transparent", // No background color on hover
                    },
                }}
            >
                <ChevronRightIcon />
            </IconButton>

        </Card>
    );
};

export default CardComponent;
