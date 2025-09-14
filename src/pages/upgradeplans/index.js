// material
import { Container, Stack, Typography, Grid, Card, CardContent, Button, List, ListItem, Divider } from '@mui/material';
// components
import Page from '../../components/Page';

// Updated plan data
const plans = [
    {
        id: "free",
        name: "Free",
        description: "The essentials you need to build your app",
        price: "$0",
        buttonText: "Your current plan",
        disabled: true,
        featuresTitle: "What you get for free forever:",
        features: [
            "100k Credits / month",
            "2 API Keys",
            "Up to 3 Requests / sec",
            "100 Notifications / month",
            "5 Subscriptions",
            "1 Day Notification History",
            "NFT Minting",
            "Full Nodes",
            "Analytics Dashboard",
            "Debugging Tools",
            "Testnet Gas Coverage",
            "Community Support"
        ]
    },
    {
        id: "paygo",
        name: "Pay as you go",
        description: "Easily scale your app to thousands of users",
        price: "$25",
        featuresTitle: "RPC Nodes for Base and supported chains:",
        recommended: true,
        features: [
            "Global GEO load balancer",
            "200 Requests / sec",
            "Archive, Debug, Trade Methods",
            "Batch calls"
        ],
        additionalTitle: "Everything in Open Source plus:",
        additionalFeatures: [
            "48M Credits / year",
            "Unlimited API Keys",
            "200 Requests / sec",
            "200,000 Subscriptions",
            "7 Days Notification History",
            "Archive Nodes",
            "Advanced Analytics",
            "Helpdesk Priority"
        ],
        disclaimer: "After you use 48M credits, every additional API call in the same year will cost US$0.000009.",
        buttonText: "Buy plan"
    },
    {
        id: "enterprise",
        name: "Business",
        description: "Solutions tailored to your unique requirements",
        price: "Custom",
        buttonText: "Contact sales",
        featuresTitle: "Everything in Pay as You Go plus:",
        features: [
            "Unlimited API Calls",
            "Custom Requests / sec",
            "Unlimited Subscriptions",
            "30 Days Notification History or Custom",
            "Dedicated Nodes",
            "Slack Support Channel",
            "SLAs"
        ]
    }
];

const PlanCard = ({ plan }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div" color="text.primary">{plan.name}</Typography>
                {plan.recommended && (
                    <Typography variant="body2" color="secondary" sx={{ fontSize: 12 }}>Recommended</Typography>
                )}
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>{plan.description}</Typography>
                <Typography variant="h4" color="text.primary" sx={{ marginTop: 2 }}>{plan.price}</Typography>
                <Button variant="contained" fullWidth disabled={plan.disabled} sx={{ marginTop: 2 }}>
                    {plan.buttonText}
                </Button>

                {/* Displaying features */}
                <List sx={{ marginTop: 2 }}>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                        {plan.featuresTitle}
                    </Typography>
                    {plan.features.map((feature, index) => (
                        <ListItem key={index} sx={{ paddingLeft: 0 }}>
                            <Typography variant="body2">{feature}</Typography>
                        </ListItem>
                    ))}
                </List>

                {/* Additional features for Pay as You Go */}
                {plan.additionalFeatures && (
                    <>
                        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                            {plan.additionalTitle}
                        </Typography>
                        <List>
                            {plan.additionalFeatures.map((feature, index) => (
                                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                                    <Typography variant="body2">{feature}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}

                {/* Disclaimer for Pay as You Go plan */}
                {plan.disclaimer && (
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1, fontSize: 12 }}>
                        {plan.disclaimer}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default function Pricing() {
    return (
        <Page title="Pricing Plans">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Pricing Plans
                    </Typography>
                </Stack>
                <Grid container spacing={4}>
                    {plans.map(plan => (
                        <Grid item key={plan.id} xs={12} sm={6} md={4}>
                            <PlanCard plan={plan} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}
