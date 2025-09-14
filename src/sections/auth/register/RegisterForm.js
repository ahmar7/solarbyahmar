import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, IconButton, InputAdornment, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/Iconify";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { useRegisterMutation } from "../../../store/Reducer/auth";
import { setToken, setUser } from "../../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [handleRegister] = useRegisterMutation();
    const [showPassword, setShowPassword] = useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name required"),
        lastName: Yup.string().required("Last Name required"),
        company: Yup.string(),
        region: Yup.string().required("Region required"),
        email: Yup.string()
            .email("Email must be a valid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        company: "",
        region: "",
        email: "",
        password: "",
    };

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        try {
            const res = await handleRegister(data);
            console.log(res, 'res');

            if (res.error) return;
            const { user, token } = res.data;
            // dispatch(setUser(user));
            // dispatch(setToken(token));
            navigate("/login", { replace: true });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack alignItems="flex-start" spacing={1}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="firstName" label="First Name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="lastName" label="Last Name" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="company" label="Company" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="region" label="Region" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="email" label="Email Address" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RHFTextField
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <Iconify
                                                icon={
                                                    showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                                                }
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    Register
                </LoadingButton>
            </Stack>
        </FormProvider>
    );
}
