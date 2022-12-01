import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from './config/AuthGuard';

const Login = lazy(() => import('./pages/Authentication/Signin'))
const Registration = lazy(() => import('./pages/Authentication/Signup'))
const Layout = lazy(() => import('./components/layout/index'))

const Home = lazy(() => import('./pages/Home/home'))
const Profile = lazy(() => import('./pages/Profile/profile'))

const Table = lazy(() => import('./pages/Table'))
// const Table = lazy(() => import('./pages/Table'))
// const Table = lazy(() => import('./pages/Table'))

const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/registration" element={<Registration />} />
            <Route path="/" element={<AuthGuard><Layout /></AuthGuard>}></Route>

            <Route index path="/home" element={<Home />} />
            <Route index path="/profile" element={<Profile />} />
            <Route index path="/table" element={<Table />} />

            {/* <Route index path="/home/tabledata_add" element={<TableDataAdd />} /> */}
            {/* <Route index path="/home/tabledataedit/:id" element={<TableDataEdit />} /> */}
            {/* <Route index path="/home/tabledataview/:id" element={<TableDataView />} /> */}
        </Routes>
    );
}

export default Routing;
