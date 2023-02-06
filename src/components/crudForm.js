import React, { useState, useEffect } from 'react';

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
            <h3>{dataToEdit ? 'Edit' : 'Add'}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name'
                onChange={handleChange} value={form.name}/>

                <input type='text' name='constellation' placeholder='constellation'
                onChange={handleChange} value={form.constellation} />

                <input type='submit' value='Send'/>
                <input type='reset' value='Clean' onClick={handleReset}/>
            </form>
        </>
    );
}

export default CrudForm;