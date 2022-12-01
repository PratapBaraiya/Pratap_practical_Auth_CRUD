import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router";

// import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { getUserDetail } from '../../Store/Profile/Action';
import { updateUserDetail } from '../../Store/Profile/Action';

const theme = createTheme();

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const localData = JSON.parse(localStorage.getItem('userData'))

    const { userData } = useSelector(state => state.user);
    const newUserData = userData?.user;
    const dataId = localData?.id
    console.log("🚀 ~ file: profile.js:31 ~ Profile ~ dataId", dataId)

    const apiCall = useCallback(() => {
        dispatch(getUserDetail());
    }, [dispatch])

    useEffect(() => {
        apiCall();
    }, [])

    const initialValue = {
        name: newUserData?.name,
        email: newUserData?.email,
        birth_date: newUserData?.birth_date,
        // password: newUserData,
        // password_confirmation: ,
    };

    const handleSubmit = (event) => {
        // event.preventDefault();
        const data = new FormData(event.currentTarget);

        const apiData = {
            name: data.get('name'),
            email: data.get('email'),
            _method: "PUT"
            // birth_date: data.get('birth_date'),
            // gender: data.get('gender'),
            // password: data.get('password'),
            // password_confirmation: data.get('password_confirmation'),

        };
        dispatch(updateUserDetail(apiData, dataId))
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
    };

    return (
        <Grid container>
            <Grid item sm={3} xs={false}></Grid>
            <Grid item sm={6} xs={12}>
                <Paper>
                    <Box m={5} p={3}>
                        <Typography variant="h5">User Profile</Typography>
                        <Formik
                            initialValues={initialValue}
                            onSubmit={handleSubmit}
                        >
                            {(props) => {
                                const { name } = props.values;
                                return (
                                    <Form>
                                        <TextField
                                            label="Name"
                                            name="name"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            value={name}
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            helperText={<ErrorMessage name="name" />}
                                            error={props.errors.name && props.touched.name}
                                            required
                                        />
                                        <Field
                                            as={TextField}
                                            label="Email"
                                            type="Email"
                                            name="email"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            helperText={<ErrorMessage name="email" />}
                                            error={props.errors.email && props.touched.email}
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

                                        <Field
                                            as={TextField}
                                            label="Password"
                                            name="password"
                                            type="password"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            helperText={<ErrorMessage name="password" />}
                                            error={props.errors.password && props.touched.password}
                                        />

                                        <Field
                                            as={TextField}
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            helperText={<ErrorMessage name="confirmPassword" />}
                                            error={
                                                props.errors.confirmPassword &&
                                                props.touched.confirmPassword
                                            }
                                        />

                                        <Button
                                            variant="contained"
                                            type="submit"
                                            color="primary"
                                            fullWidth
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Box>
                </Paper>
            </Grid>
            <Grid item sm={3} xs={false}></Grid>
        </Grid>
    );
}

export default Profile