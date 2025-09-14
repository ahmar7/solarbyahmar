import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Use named import
import { Box, Button } from "@mui/material";
import { useGoogleLoginMutation } from "../../store/Reducer/auth";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
const GoogleAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clientId = process.env.REACT_APP_GOOGLE_CLIENTID; // Ensure the variable name is correct
    const [googleLogin] = useGoogleLoginMutation();
    // If clientId is missing, log an error
    if (!clientId) {
        console.error("Google Client ID is missing.");
        return <div>Google Client ID is not configured properly.</div>;
    }

    const onSubmit = async (data) => {
        try {
            const res = await googleLogin(data);
            if (!res.data || res.error) return;
            let { user, token } = res.data;
            dispatch(setUser(user));
            dispatch(setToken(token));
            navigate("/dashboard/overview", { replace: true });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Box sx={{ textAlign: "center", width: "100%" }}>
                <Button>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            const firstName = decoded.given_name || "";
                            const lastName = decoded.family_name || "";
                            const email = decoded.email || "";
                            onSubmit({ firstName, lastName, email });
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </Button>
            </Box>
        </GoogleOAuthProvider>
    );
};

export default GoogleAuth;
