import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
    InputAdornment,
    Slide,
    Button,
    IconButton,
    TextField,
    Autocomplete,
    ClickAwayListener,
} from "@mui/material";
import Iconify from "../../components/Iconify";
import navConfig from "../dashboard/NavConfig";
import { useNavigate } from "react-router-dom";

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled("div")(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: "100%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    height: APPBAR_MOBILE,
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
    padding: theme.spacing(0, 3),
    boxShadow: theme.customShadows.z8,
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up("md")]: {
        height: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

export default function Searchbar() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState(null);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div>
                {!isOpen && (
                    <IconButton onClick={handleOpen}>
                        <Iconify icon="eva:search-fill" width={20} height={20} />
                    </IconButton>
                )}

                <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
                    <SearchbarStyle>
                        <Autocomplete
                            fullWidth
                            options={navConfig}
                            getOptionLabel={(option) => option.title}
                            value={searchValue}
                            onChange={(_, newValue) => {
                                setSearchValue(newValue);
                                navigate(newValue.path || newValue?.children[0]?.path);
                            }}
                            renderOption={(props, option) => (
                                <li {...props} key={option.title}>
                                    {option.icon} &nbsp; {option.title}
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    autoFocus
                                    variant="standard"
                                    placeholder="Search…"
                                    InputProps={{
                                        ...params.InputProps,
                                        disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Iconify
                                                    icon="eva:search-fill"
                                                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                        {/* <Button variant="contained" onClick={() => setOpen(false)}>
            Search
          </Button> */}
                    </SearchbarStyle>
                </Slide>
            </div>
        </ClickAwayListener>
    );
}
