import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import FormTable from '../components/Table/Table';
import { tableData } from '../Store/Table/Action';

const Table = () => {
    const dispatch = useDispatch();

    const apiCall = useCallback(async () => {
        dispatch(tableData());
    }, [dispatch])

    useEffect(() => {
        apiCall();
    }, [])

    return (
        <>
            <div className="container-fluid">
                <FormTable />
            </div>
        </>
    )
}

export default Table