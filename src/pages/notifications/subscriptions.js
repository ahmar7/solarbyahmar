
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import SubscriptionsTable from './subscriptions_table';


// ----------------------------------------------------------------------

export default function Subscriptions() {
    return (
        <Page title="Dashboard: Subscriptions">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Subscriptions
                    </Typography>
                    <Button variant='contained' color='primary'>
                        Create Subscriptions
                    </Button>
                </Stack>
                <SubscriptionsTable />
            </Container>
        </Page>
    );
}
