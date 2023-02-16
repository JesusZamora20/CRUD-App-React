import { Button, Stack, Typography } from '@mui/material';
import React from 'react';


function CrudTableRow({el, setDataToEdit, DeleteData}) {

    let {name, constellation, id} = el; 
    return (  
        <tr>
            <td><Typography variant='body1'>{name}</Typography></td>
            <td><Typography>{constellation}</Typography></td>
            <td>
                <Stack spacing={1} direction='row'>
                    <Button size='small' variant='outlined' color='success' onClick={() => setDataToEdit(el)}>Edit</Button>
                    <Button size='small' variant='outlined' color='error' onClick={() => DeleteData(id)}>Delete</Button>
                </Stack>
            </td>
        </tr>
    );
}

export default CrudTableRow;