import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = props => {
    return (
        <>
            <div id="main-content" className="app-main d-flex flex-column" style={{ overflowX: 'hidden' }}>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;