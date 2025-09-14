
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import TopSec from './top_sec';


// ----------------------------------------------------------------------

export default function Blockchains() {
    return (
        <Page title="Dashboard: Blockchains">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blockchains
                    </Typography>
                </Stack>
            </Container>
            <TopSec />
            {/* <BCTabs/> */}
        </Page>
    );
}
