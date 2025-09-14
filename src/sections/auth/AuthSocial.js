// material
import { Stack, Button, Divider, Typography } from "@mui/material";
// component
import Iconify from "../../components/Iconify";
import GoogleAuth from "./gooleAuth";

// ----------------------------------------------------------------------

export default function AuthSocial() {
    return (
        <>
            <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    OR
                </Typography>
            </Divider>
            <Stack direction="row" spacing={2}>
                <GoogleAuth />

                {/* <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify
            icon="eva:facebook-fill"
            color="#1877F2"
            width={22}
            height={22}
          />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify
            icon="eva:twitter-fill"
            color="#1C9CEA"
            width={22}
            height={22}
          />
        </Button> */}
            </Stack>
        </>
    );
}
