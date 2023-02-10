import React from 'react';
import CrudTableRow from './crudTableRow';

function CrudTable({data, setDataToEdit, DeleteData}){
    return(
        <>
            <h3>Data Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>constellation</th>
                        <th>Actions</th>
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