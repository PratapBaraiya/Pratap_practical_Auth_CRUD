import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { adminLogin } from "../../../Store/Auth/Action";

const theme = createTheme();

const Signin = () => {
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
            email: data.get('email'),
            password: data.get('password'),
        };

        dispatch(adminLogin(apiData))
            .then((res) => {
                if (res.status === true) {
                    navigate("/home")
                }
                console.log("🚀 ~ file: index.js:30 ~ .then ~ res", res)
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
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/registration" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Signin