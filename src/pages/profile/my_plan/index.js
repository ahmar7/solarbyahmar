// material
import { Box, Card, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../../../components/Page";
import PlanStats from "../../overview/plan_stats";
import PlanTable from "./plan_table";

// ----------------------------------------------------------------------

export default function MyPlan() {
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
                        MyPlan
                    </Typography>
                </Stack>
                <Card sx={{ p: 3 }}>
                    <PlanStats />
                </Card>
                <Card sx={{ p: 3, mt: 2 }}>
                    <Stack direction={"row"} alignItems={"center"} spacing={3}>
                        <Box>
                            <Typography color="textSecondary">Limit Reset</Typography>
                            <Typography variant="body2">27/02/2025</Typography>
                        </Box>
                        <Box>
                            <Typography color="textSecondary">Account ID</Typography>
                            <Typography variant="body2">6797c5fc212b5b9a7790f37d</Typography>
                        </Box>
                    </Stack>
                </Card>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5">
                        Payment history
                    </Typography>
                    <PlanTable />
                </Box>
            </Container>
        </Page>
    );
}
