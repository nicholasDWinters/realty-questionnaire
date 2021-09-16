import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const UserForm = ({ add, clients }) => {
    const history = useHistory();
    const initial = {
        name: '',
        email: '',
        phone: '',
        propName: '',
        propAddress: '',
        notes: ''
    }
    const [data, setData] = useState(initial);

    const handleChange = e => {
        const { name, value } = e.target;

        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const submit = e => {
        e.preventDefault();
        add(data);
        setData(initial);
        history.push('/questions');
    }

    const viewClient = (client) => {
        history.push(`/clients/${client}`)
    }

    useEffect(() => {

    }, [clients]);

    return (
        <div className='mt-3 row'>
            <div className='col-lg-6 order-3 order-lg-1 mt-4 mt-lg-0'>
                <h2 className='display-5'>Add New Client</h2>
                <form className='mb-4' onSubmit={submit}>


                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" name='name' placeholder="John Smith" value={data.name} onChange={handleChange}></input>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" value={data.email} onChange={handleChange}></input>
                        <label htmlFor="floatingInput">Email Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="phone" className="form-control" id="phone" name='phone' placeholder="920-222-2827" value={data.phone} onChange={handleChange}></input>
                        <label htmlFor="phone">Phone - REQUIRED!</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="propName" name='propName' placeholder="ABC Property" value={data.propName} onChange={handleChange}></input>
                        <label htmlFor="propName">Property Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="propAddress" name='propAddress' placeholder="123 Fake St" value={data.propAddress} onChange={handleChange}></input>
                        <label htmlFor="propAddress">Property Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" name='notes' id="notes" value={data.notes} onChange={handleChange}></textarea>
                        <label htmlFor="notes">Notes</label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary btn-lg'>Start Questionnaire</button>
                    </div>

                </form>
            </div>

            <div className='col-lg-1 order-2'></div>
            <div className='col-lg-4 order-1 order-lg-3'>
                <h3 className='display-6 mb-3 mt-4 mt-lg-0'>Current Clients</h3>
                {clients.map(client => <button className='btn btn-lg btn-light d-block mt-2' style={{ width: '100%' }} onClick={() => viewClient(client.user.phone)} key={client.user.name}>{client.user.name}</button>)}
            </div>
        </div>
    )
}

export default UserForm;