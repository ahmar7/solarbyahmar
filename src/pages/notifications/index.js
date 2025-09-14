
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import WebhookTable from './webhook_table';
import NotificationStats from './stats';


// ----------------------------------------------------------------------

export default function Notifications() {
    return (
        <Page title="Dashboard: Notifications">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Notifications
                    </Typography>
                    <Button variant='contained' color='primary'>
                        Create Subscriptions
                    </Button>
                </Stack>
                <NotificationStats />
                <WebhookTable />
            </Container>
        </Page>
    );
}
