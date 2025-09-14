// material
import {
    Container,
    Stack,
    Typography,
} from "@mui/material";
// components
import Page from "../../components/Page";
import Plan from "./plan";
import ApiKeyTable from "./api_key_table";

// ----------------------------------------------------------------------

export default function Overview() {
    return (
        <Page title="Dashboard: Overview">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h4" gutterBottom>
                        Overview
                    </Typography>
                </Stack>
                <Plan />
                <ApiKeyTable />
            </Container>
        </Page>
    );
}
