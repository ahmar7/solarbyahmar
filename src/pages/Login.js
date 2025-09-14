import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography, Box } from "@mui/material";
// hooks
import useResponsive from "../hooks/useResponsive";
// components
import Page from "../components/Page";
import Logo from "../components/Logo";
// sections
import LoginForm from "../sections/auth/login/LoginForm";
import AuthSocial from "../sections/auth/AuthSocial";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    padding: theme.spacing(3),
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: "40vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2, 0, 2, 2),
    backgroundImage: `url('/static/bg/auth-bg.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
}));

const ContentStyle = styled("div")(({ theme }) => ({
    maxWidth: 480,
    margin: "auto",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");

    return (
        <Page title="Login">
            <RootStyle>
                <HeaderStyle>
                    <Logo />

                    {smUp && (
                        <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                            Don’t have an account? {""}
                            <Link variant="subtitle2" component={RouterLink} to="/register">
                                Get started
                            </Link>
                        </Typography>
                    )}
                </HeaderStyle>

                {mdUp && (
                    <SectionStyle>
                        <Box sx={{ px: 5, mt: 10, mb: 5 }}>
                            <Typography variant="h4">
                                <b>
                                    Easily Track, Measure,
                                    <br /> and Scale.
                                </b>
                            </Typography>
                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Explore your Tatum{" "}
                                    <Typography component="span" variant="h5">
                                        Dashboard
                                    </Typography>{" "}
                                    today.
                                </Typography>
                                <ul style={{ paddingLeft: "20px" }}>
                                    <li>
                                        <Typography variant="body1">
                                            Instantly understand app usage
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1">
                                            Get access to convenient debugging tools
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1">
                                            Manage payments and scale your app
                                        </Typography>
                                    </li>
                                </ul>
                            </Box>
                        </Box>

                        {/* <img
              src="/static/illustrations/illustration_login.png"
              alt="login"
            /> */}
                    </SectionStyle>
                )}

                <Container maxWidth="sm">
                    <ContentStyle>
                        <Typography variant="h4" gutterBottom>
                            Sign in to
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 5 }}>
                            your Tatum dashboard.
                        </Typography>
                        <LoginForm />
                        <AuthSocial />
                        {!smUp && (
                            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                                Don’t have an account?{" "}
                                <Link variant="subtitle2" component={RouterLink} to="/register">
                                    Get started
                                </Link>
                            </Typography>
                        )}
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
