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
        let options = {
            body:data, 
            headers:{"content-type": "application/json"}
        };
        data.id = Date.now();
        helpHttp().post(url, options).then((res) => {
            // console.log(res);
            if(!res.err){
                setDb([...db, res]);
            } else {
                setError(res);
            }
        });
    }

    const UpdateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        // console.log(endpoint)
        let options = {
            body:data, 
            headers:{"content-type": "application/json"}
        };

        helpHttp().put(endpoint,options).then(res =>{
            if(!res.err){
                let newData = db.map((el) => el.id === data.id ? data : el);
                setDb(newData);
            } else {
                setError(res);
            }
        })
    }

    const DeleteData = (id) => {
        let endpoint = `${url}/${id}`;
        let isDelete = window.confirm(`Are you sure you wanna delete ${id}`);

        let options = {
            headers:{"content-type": "application/json"}
        };

        if(isDelete){
            helpHttp().del(endpoint,options).then(res => {
                if(!res.err){
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData);
                } else {
                    setError(res);
                }
            })
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

