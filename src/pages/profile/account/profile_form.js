import { useForm, Controller } from "react-hook-form";
import {
    Card,
    CardContent,
    TextField,
    Button,
    MenuItem,
    Typography,
    Grid,
} from "@mui/material";
import { useUpdateProfileMutation } from "../../../store/Reducer/users";

const ProfileForm = ({ propsData: { firstName, lastName, region, company }, updateUser }) => {
    const [updateProfie] = useUpdateProfileMutation();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            firstName, lastName, region, company
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await updateProfie({ ...data });
            if (!res.data || res.error) return;
            updateUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card sx={{ maxWidth: "100%", mx: "auto", mt: 5, p: 3 }}>
            <CardContent>
                <Grid container spacing={3} alignItems="center">
                    {/* Left Side Text */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Profile
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Personal information settings, visible only to you and Tatum.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Helps us personalize and give you the best experience.
                        </Typography>
                    </Grid>

                    {/* Right Side Form */}
                    <Grid item xs={12} md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                {/* First Name */}
                                <Grid item xs={6}>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        rules={{ required: "First name is required" }}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                label="First Name *"
                                                fullWidth
                                                size="small"
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                            />
                                        )}
                                    />
                                </Grid>

                                {/* Last Name */}
                                <Grid item xs={6}>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        rules={{ required: "Last name is required" }}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                label="Last Name *"
                                                fullWidth
                                                size="small"
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                            />
                                        )}
                                    />
                                </Grid>

                                {/* Company */}
                                <Grid item xs={6}>
                                    <Controller
                                        name="company"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Company"
                                                fullWidth
                                                size="small"
                                            />
                                        )}
                                    />
                                </Grid>

                                {/* Region */}
                                <Grid item xs={6}>
                                    <Controller
                                        name="region"
                                        control={control}
                                        rules={{ required: "Region is required" }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                select
                                                label="Region *"
                                                fullWidth
                                                size="small"
                                            >
                                                <MenuItem value="Europe">Europe</MenuItem>
                                                <MenuItem value="Asia">Asia</MenuItem>
                                                <MenuItem value="America">America</MenuItem>
                                            </TextField>
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
                                        Save Profile
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProfileForm;
