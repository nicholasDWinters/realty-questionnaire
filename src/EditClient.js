import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditClient = ({ clients, editClient }) => {
    const { phone } = useParams();
    const history = useHistory();
    let client = clients.filter(client => client.user.phone === phone);
    client = client[0];
    const initial = {
        name: client.user.name,
        email: client.user.email,
        phone: client.user.phone,
        propName: client.user.propName,
        propAddress: client.user.propAddress,
        notes: client.user.notes
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
        const newClient = {
            'user': data,
            'answers': client.answers,
            'qNotes': client.qNotes
        }

        editClient(client.user.phone, newClient);

        setData(initial);

        history.push(`/clients/${newClient.user.phone}`);

    }

    return (
        <div>
            <h1>Edit client</h1>
            <form className='mb-4' onSubmit={submit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="name" name='name' placeholder="John Smith" value={data.name} onChange={handleChange}></input>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" value={data.email} onChange={handleChange}></input>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="phone" className="form-control" id="phone" name='phone' placeholder="920-222-2827" value={data.phone} onChange={handleChange}></input>
                            <label htmlFor="phone">Phone</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="propName" name='propName' placeholder="Abc property" value={data.propName} onChange={handleChange}></input>
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
                        <div className='d-grid gap-3'>
                            <button className='btn btn-warning btn-lg'>Edit Client</button>
                            <button className='btn btn-secondary btn-lg' onClick={() => history.push(`/clients/${client.user.phone}`)}>Back to Clients</button>
                        </div>
                    </div>


                </div>

            </form>

        </div>
    )
}

export default EditClient;