import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from "../../../Store/Auth/Action";

const theme = createTheme();

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(({ auth: { isLoggedIn } }) => ({ isLoggedIn }))

    if (isLoggedIn) {
        return <Navigate to="/home" />
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const apiData = {
            name: data.get('name'),
            email: data.get('email'),
            birth_date: data.get('birth_date'),
            gender: data.get('gender'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        };

        dispatch(register(apiData))
            .then((res) => {
                console.log("🚀 ~ file: index.js:30 ~ .then ~ res", res)
                if (res.status === true) {
                    navigate("/home")
                }
            })
            .catch(
                (err) => {
                    console.log("err", err)
                    return
                }
            )
        // console.log("🚀 ~ file: index.js:24 ~ handleSubmit ~ apiData", apiData)
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            name="birth_date"
                            // defaultValue=""
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="gender"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password_confirmation"
                            label="Password Confirmation"
                            type="password"
                            id="password_confirmation"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Link to="/login" variant="body2">
                                {"Already have an account? Sign in"}
                            </Link>
                        </Grid>


                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp