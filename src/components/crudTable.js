import { Typography } from '@mui/material';
import React from 'react';
import CrudTableRow from './crudTableRow';

function CrudTable({data, setDataToEdit, DeleteData}){
    return(
        <>
            <br/>
            <Typography variant='h5'>Data Table</Typography>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th><Typography variant='subtitle2'>Name</Typography></th>
                        <th><Typography variant='subtitle2'>Constellation</Typography></th>
                        <th><Typography variant='subtitle2'>Actions</Typography></th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                    data.map((el) => (
                    <CrudTableRow
                    key={el.id} 
                    el={el}
                    setDataToEdit={setDataToEdit} 
                    DeleteData={DeleteData} /> ))) : 
                    (<tr><td colSpan='3'>Sin datos</td></tr>)}
                </tbody>
            </table>
        </>
    );
}

export default CrudTable;