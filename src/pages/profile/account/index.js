// material
import {
    Box,
    Card,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
// components
import Page from "../../../components/Page";
import { useSelector } from "react-redux";
import AccountTabs from "./account_tabs";

// ----------------------------------------------------------------------

export default function Account() {
    const { user } = useSelector((state) => state.user);
    return (
        <Page title="Dashboard: Account">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h4" gutterBottom>
                        Account
                    </Typography>
                </Stack>
                <Card sx={{ p: 3, mt: 2 }}>
                    <Stack direction={"row"} alignItems={"center"} spacing={3}>
                        <Box>
                            <Typography variant="h3">{user?.username}</Typography>
                            <Typography variant="h6">{user?.email}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                        <Box>
                            <Typography variant="body2" color="textSecondary">
                                MEMBER SINCE
                            </Typography>
                            <Typography variant="body2">
                                {user?.createdAt
                                    ? new Date(user.createdAt).toLocaleDateString()
                                    : "N/A"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="textSecondary">
                                LAST SIGN IN
                            </Typography>
                            <Typography variant="body2">
                                {user?.createdAt
                                    ? new Date(user.updatedAt).toLocaleDateString()
                                    : "N/A"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="textSecondary">
                                Account ID
                            </Typography>
                            <Typography variant="body2">{user.id}</Typography>
                        </Box>
                    </Stack>
                </Card>
                <AccountTabs />
            </Container>
        </Page>
    );
}
