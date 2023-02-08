import React, { useState } from 'react';
import { useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './crudForm';
import CrudTable from './crudTable';
import Loader from './Loader';
import Message from './Message';


function CrudApi(){
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    let url = "http://localhost:5000/santos";

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then(res => {
            // console.log(res);
            if(!res.err){
                setDb(res);
                setError(null);
            } else {
                setDb(null);
                setError(res);
            }

            setLoading(false);
        })
    },[])

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
            {loading && <Loader />}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            {db && <CrudTable 
            data={db} 
            DeleteData={DeleteData} 
            setDataToEdit={setDataToEdit} />}
        </>
    );
}

export default CrudApi;

