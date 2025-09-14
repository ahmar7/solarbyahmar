
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';


// ----------------------------------------------------------------------

export default function Documentation() {
  return (
    <Page title="Dashboard: Documentation">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Documentation
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}
