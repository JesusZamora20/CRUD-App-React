import React, { useState, useEffect } from 'react';
import {Button, Stack, TextField, Typography} from '@mui/material';

const initialDb = {
    name:'',
    constellation:'',
    id: null
}

function CrudForm({CreateData, UpdateData, dataToEdit, setDataToEdit  }){
    
    const [form, setForm] = useState(initialDb);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        } else{
            setForm(initialDb);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.constellation){
            alert('datos incompletos');
            return;
        }

        if(form.id === null){
            CreateData(form);
        } else {
            UpdateData(form);
        }

        handleReset();
    }
    const handleReset = (e) => {
        setForm(initialDb);
        setDataToEdit(null)
    }

    return(
        <>
            <br/>
            <Typography variant='h5'>{dataToEdit ? 'Edit' : 'Add'}</Typography>
            <br/>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction='row'>

                <TextField label='Name' size='small' color='primary' 
                onChange={handleChange} 
                value={form.name} 
                type='text' 
                name='name'/>

                <TextField label='Constellation' size='small' color='primary' 
                onChange={handleChange} 
                value={form.constellation} 
                type='text' 
                name='constellation'/>

                

                <Button type='submit' size='small' variant='contained'>Send</Button>
                <Button type='reset' size='small' color='primary' onClick={handleReset}>Clean</Button>
                </Stack>
            </form>
        </>
    );
}

export default CrudForm;