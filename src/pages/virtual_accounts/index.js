// material
import { Container, Stack, Typography } from "@mui/material";
// components
import Page from "../../components/Page";
import VirtualBanner from "./banner";
import VirtualCards from "./virtual_cards";
import VirtualTabPanel from './virtual_tabs'

// ----------------------------------------------------------------------

export default function VirtualAccounts() {
    return (
        <Page title="Dashboard: Virtual Accounts">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h4" gutterBottom>
                        Virtual Accounts
                    </Typography>
                </Stack>
                <VirtualBanner />
                <VirtualCards />
                <VirtualTabPanel />
            </Container>
        </Page>
    );
}
