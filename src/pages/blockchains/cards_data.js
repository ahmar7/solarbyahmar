export const top = [
    {
        icon: "mdi:ethereum",
        title: "Ethereum Sepolia",
        options: [
            {
                label: "ethereum-sepolia.gateway",
                value: "ethereum-sepolia",
                urlMapping: {
                    display: "https://ethereum-sepolia.gateway.ourname.com/",
                    original: "https://ethereum-sepolia.gateway.tatum.io/",
                },
            },
        ],
        status: "Healthy",
        tier: "Tier 1",
        networkType: "EVM",
    },
    {
        icon: "mdi:solana",
        title: "Solana",
        options: [
            {
                label: "network-5-mainnet.gateway",
                value: "network-5-mainnet",
                urlMapping: {
                    display: "https://network-5-mainnet.gateway.ourname.com/",
                    original: "https://network-5-mainnet.gateway.tatum.io/",
                },
            },
            {
                label: "network-5-testnet.gateway",
                value: "network-5-testnet",
                urlMapping: {
                    display: "https://network-5-testnet.gateway.ourname.com/",
                    original: "https://network-5-testnet.gateway.tatum.io/",
                },
            },
        ],
        status: "Healthy",
        tier: "Tier 1",
        networkType: "Other",
    },
];

export const all = [
    {
        icon: "mdi:ethereum",
        title: "Ethereum Sepolia",
        options: [
            {
                label: "ethereum-sepolia.gateway",
                value: "ethereum-sepolia",
                urlMapping: {
                    display: "https://ethereum-sepolia.gateway.ourname.com/",
                    original: "https://ethereum-sepolia.gateway.tatum.io/",
                },
            },
        ],
        status: "Healthy",
        tier: "Tier 1",
        networkType: "EVM",
    },
    {
        icon: "mdi:algorand",
        title: "Algorand",
        options: [
            {
                label: "algorand-mainnet.gateway",
                value: "algorand-mainnet",
                urlMapping: {
                    display: "https://algorand-mainnet.gateway.ourname.com/",
                    original: "https://algorand-mainnet.gateway.tatum.io/",
                },
            },
        ],
        status: "Healthy",
        tier: "Tier 1",
        networkType: "Other",
    },
    {
        icon: "mdi:arbitrum",
        title: "Arbitrum Nova",
        options: [
            {
                label: "arb-nova-mainnet.gateway",
                value: "arb-nova-mainnet",
                urlMapping: {
                    display: "https://arb-nova-mainnet.gateway.ourname.com/",
                    original: "https://arb-nova-mainnet.gateway.tatum.io/",
                },
            },
        ],
        status: "Healthy",
        tier: "Tier 3",
        networkType: "EVM",
    },
    // Add other networks here...
];