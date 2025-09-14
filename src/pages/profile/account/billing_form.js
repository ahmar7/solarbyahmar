import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    Card,
    CardContent,
    TextField,
    Button,
    MenuItem,
    Typography,
    Grid,
    Snackbar,
    Alert
} from "@mui/material";
import { useUpdateBillingMutation } from "../../../store/Reducer/users";
const BillingForm = ({ propsData, updateUser }) => {
    const [updateBilling] = useUpdateBillingMutation();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            ...propsData,
        },
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const onSubmit = async (data) => {
        const res = await updateBilling({ ...data });
        if (res.data) {
            updateUser(res.data.user);
            setIsSuccess(true);
        } else {
            setIsError(true);
        }
    };


    return (
        <>
            <Card sx={{ maxWidth: "100%", mx: "auto", mt: 5, p: 3 }}>
                <CardContent>
                    <Grid container spacing={3} alignItems="center">
                        {/* Left Side Text */}
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Billing Information
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Billing and payment-related information mandatory to be able to
                                use a paid plan.
                            </Typography>
                        </Grid>

                        {/* Right Side Form */}
                        <Grid item xs={12} md={8}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={2}>
                                    {/* Company Name */}
                                    <Grid item xs={6}>
                                        <Controller
                                            name="companyName"
                                            control={control}
                                            rules={{ required: "Company name is required" }}
                                            render={({ field, fieldState }) => (
                                                <TextField
                                                    {...field}
                                                    label="Company Name / Name *"
                                                    fullWidth
                                                    size="small"
                                                    error={!!fieldState.error}
                                                    helperText={fieldState.error?.message}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Street Address */}
                                    <Grid item xs={6}>
                                        <Controller
                                            name="streetAddress"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Street Address"
                                                    fullWidth
                                                    size="small"
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* City */}
                                    <Grid item xs={4}>
                                        <Controller
                                            name="city"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="City"
                                                    fullWidth
                                                    size="small"
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Postal Code */}
                                    <Grid item xs={4}>
                                        <Controller
                                            name="postalCode"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Postal Code"
                                                    fullWidth
                                                    size="small"
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Country */}
                                    <Grid item xs={4}>
                                        <Controller
                                            name="country"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    select
                                                    label="Country"
                                                    fullWidth
                                                    size="small"
                                                >
                                                    <MenuItem value="">---</MenuItem>
                                                    <MenuItem value="USA">USA</MenuItem>
                                                    <MenuItem value="UK">UK</MenuItem>
                                                    <MenuItem value="Germany">Germany</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Grid>

                                    {/* Company ID */}
                                    <Grid item xs={6}>
                                        <Controller
                                            name="companyId"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Company ID"
                                                    fullWidth
                                                    size="small"
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Tax ID */}
                                    <Grid item xs={6}>
                                        <Controller
                                            name="taxId"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Tax ID"
                                                    fullWidth
                                                    size="small"
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Submit Button (Right-Aligned) */}
                                    <Grid item xs={12} display="flex" justifyContent="flex-end">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                        >
                                            Save Billing
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Snackbar
                open={isSuccess}
                autoHideDuration={6000}
                onClose={() => setIsSuccess(false)}
            >
                <Alert
                    severity="success"
                    onClose={() => setIsSuccess(false)}
                    sx={{ width: '100%' }}
                >
                    Billing information updated successfully!
                </Alert>
            </Snackbar>

            <Snackbar
                open={isError}
                autoHideDuration={6000}
                onClose={() => setIsError(false)}
            >
                <Alert
                    severity="error"
                    onClose={() => setIsError(false)}
                    sx={{ width: '100%' }}
                >
                    Failed to update billing information. Please try again.
                </Alert>
            </Snackbar>
        </>
    );
};

export default BillingForm;
