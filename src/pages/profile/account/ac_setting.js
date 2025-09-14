import { Box, Stack } from "@mui/material";
import React from "react";
import ProfileForm from "./profile_form";
import BillingForm from "./billing_form";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

export default function AccountSetting() {
    const dispatch = useDispatch();
    const {
        user: { billingDetails, ...profile },
    } = useSelector((state) => state.user);
    const updateUser = (data) => {
        dispatch(setUser(data));
    };
    return (
        <Box>
            <Stack>
                <ProfileForm propsData={profile} updateUser={updateUser} />
                <BillingForm propsData={billingDetails} updateUser={updateUser} />
            </Stack>
        </Box>
    );
}
