
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';


// ----------------------------------------------------------------------

export default function Contact_Support() {
    return (
        <Page title="Dashboard: Contact Support">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Contact Support
                    </Typography>
                </Stack>
            </Container>
        </Page>
    );
}
