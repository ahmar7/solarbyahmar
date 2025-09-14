import React from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import TranscationTable from "./tables/transaction_table";
import DepositeTable from "./tables/deposite_table";
import WithdrawalsTable from "./tables/withdrawal_table";
import AccountsTable from "./tables/accounts_table";
import CustomerTable from "./tables/customers_table";
import VirtualCurrencyTable from "./tables/virtual_currencies_table";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{}}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

function TabsWithPanels({ tabs }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} aria-label="Dynamic tabs">
                {tabs.map((tab, index) => (
                    <Tab label={tab.label} key={index} />
                ))}
            </Tabs>
            {tabs.map((tab, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
}

TabsWithPanels.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default function App() {
    return (
        <TabsWithPanels
            tabs={[
                {
                    label: "Transactions",
                    content: <TranscationTable />,
                },
                {
                    label: "Deposits",
                    content: <DepositeTable />,
                },
                {
                    label: "Withdrawals",
                    content: <WithdrawalsTable />,
                },
                {
                    label: "Accounts",
                    content: <AccountsTable />,
                },
                {
                    label: "Customers",
                    content: <CustomerTable />,
                },
                {
                    label: "Virtual Currencies",
                    content: <VirtualCurrencyTable />,
                },
            ]}
        />
    );
}
