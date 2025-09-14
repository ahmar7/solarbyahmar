// material
import { Container, Stack, Typography } from "@mui/material";
// components
import Page from "../../components/Page";
import UsageStats from "./usage_stats";
import UsageTabs from "./usage_tabs";

// ----------------------------------------------------------------------

export default function Usage() {
    return (
        <Page title="Dashboard: Usage">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h4" gutterBottom>
                        Usage
                    </Typography>
                </Stack>
                <UsageStats />
                <UsageTabs />
            </Container>
        </Page>
    );
}
