import React, { useState } from 'react';
import CrudForm from './crudForm';
import CrudTable from './crudTable';


function CrudApi(){
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    const CreateData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    }

    const UpdateData = (data) => {
        let newData = db.map((el) => el.id === data.id ? data : el);
        setDb(newData);
    }

    const DeleteData = (id) => {
        let isDelete = window.confirm(`Are you sure you wanna delete ${id}`);

        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    }

    return(
        <>
            <h2>CRUD API</h2>
            <CrudForm 
            CreateData={CreateData} 
            UpdateData={UpdateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            <CrudTable 
            data={db} 
            DeleteData={DeleteData} 
            setDataToEdit={setDataToEdit} />
        </>
    );
}

export default CrudApi;

