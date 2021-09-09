import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserForm = ({ add, clients }) => {
    const history = useHistory();
    const initial = {
        name: '',
        email: '',
        phone: '',
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

    return (
        <div className='mt-3'>
            <h2 className='display-5'>Add New Client</h2>
            <form className='mb-4' onSubmit={submit}>
                <div className='row'>
                    <div className='col-lg-7'>
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
                            <textarea className="form-control" placeholder="Leave a comment here" name='notes' id="notes" value={data.notes} onChange={handleChange}></textarea>
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className='d-grid'>
                            <button className='btn btn-primary btn-lg'>Start Questionnaire</button>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4'>
                        <h3 className='display-6 mb-3 mt-4 mt-lg-0'>Current Clients</h3>
                        {clients.map(client => <button className='btn btn-lg btn-light d-block mt-2' style={{ width: '100%' }} onClick={() => viewClient(client.user.phone)} key={client.user.name}>{client.user.name}</button>)}
                    </div>
                </div>


                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            </form>

        </div>
    )
}

export default UserForm;