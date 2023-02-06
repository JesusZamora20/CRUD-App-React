import React from 'react';


function CrudTableRow({el, setDataToEdit, DeleteData}) {

    let {name, constellation, id} = el; 
    return (  
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Edit</button>
                <button onClick={() => DeleteData(id)}>Delete</button>
            </td>
        </tr>
    );
}

export default CrudTableRow;