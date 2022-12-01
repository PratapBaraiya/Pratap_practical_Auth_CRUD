import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import {
    Container,
    Typography,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../Store/Profile/Action';
import FormTable from '../../components/Table/Table';

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (!isLoggedIn) navigate('/login', { replace: true });
    }, [isLoggedIn, navigate])

    const handleLogoutClick = () => {
        localStorage.clear();
        window.location.reload();
        navigate("/login")
    };

    const handleProfile = () => {
        navigate("/profile")
        dispatch(getUserDetail());
    };

    return (
        <>
            <Container>
                <Typography style={{ float: "right" }}>
                    <AccountCircleRoundedIcon fontSize="large" onClick={handleProfile} color="primary" style={{ margin: "10px 20px 0px 0px" }} />
                    <LogoutIcon fontSize="large" onClick={handleLogoutClick} />
                </Typography>

                <FormTable />
            </Container>
        </>
    )
}

export default Home
