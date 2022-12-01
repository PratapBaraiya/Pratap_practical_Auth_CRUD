import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import DataTable from "react-data-table-component";
import moment from "moment";


import { tableData } from '../../Store/Table/Action';

const customStyles = {
    headCells: {
        style: {
            paddingTop: '8px',
            paddingBottom: '8px',
        },
    },
    cells: {
        style: {
            paddingTop: '8px',
            paddingBottom: '8px',
        },
    },
};

const FormTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tableDataList } = useSelector(state => state.tableData)
    const dataTable = tableDataList?.data


    useEffect(() => {
        dispatch(tableData())
    }, [dispatch])

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
        },
        {
            name: 'Selling',
            selector: row => row.selling,
            sortable: true,
        },
        {
            name: 'Created Date',
            selector: row => <> {moment(row.created_at).format(" D MMM YYYY, ")}</>,
            minWidth: '100%',
            width: "250px",
            sortable: true,
        },
        {
            name: 'Updated Date',
            selector: row => <> {moment(row.updated_at).format(" D MMM YYYY, ")}</>,
            minWidth: '100%',
            width: "250px",
            sortable: true,
        },

        {
            name: 'Action',
            selector: row => row.action,
            minWidth: '180px',
            cell: (row) => <div className='action-box' >
                {/* <Link to={`/home/tabledataview/${row._id}`} className='btn right' title='view'> <View />   </Link> */}
                {/* <span className='btn wrong' title='delete' onClick={() => handlerDelete(row._id)} > <Delete /> </span> */}
                {/* <Link to={`/home/tabledataedit/${row._id}`} className='btn right' title='edit' > Edit</Link> */}
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    return (
        <>
            <div className="event-section">
                <div className='section-inner'>
                    <div className='d-flex flex-wrap event-inner-box align-items-end justify-content-between' >
                        <div className='div-btn-box'>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h1 className="date-lable">Practical Task Table</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DataTable
                        border
                        columns={columns}
                        data={dataTable}
                        // onSort={onSortChange}
                        pagination
                        paginationServer
                        // paginationTotalRows={totalRecords}
                        // onChangeRowsPerPage={handlePerRowsChange}
                        // customStyles={customStyles}
                        // onChangePage={handlePageChange}
                        dense
                    />
                </div>
            </div>

        </>
    )
}

export default FormTable