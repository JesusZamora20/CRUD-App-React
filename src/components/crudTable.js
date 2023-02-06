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
                    {data.length === 0 ? <tr><td colSpan='3'>Sin datos</td></tr> : 
                    data.map(el => <CrudTableRow key={el.id} el={el}
                    setDataToEdit={setDataToEdit} DeleteData={DeleteData} />) }
                </tbody>
            </table>
        </>
    );
}

export default CrudTable;