import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

let AuthGuard = ({ children }) => {
    const navigate = useNavigate();

    const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (!isLoggedIn) navigate('/login', { replace: true });
    }, [isLoggedIn, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard;
