import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Client = ({ clients, removeClient }) => {
    const { phone } = useParams();
    const history = useHistory();
    let client = clients.filter(client => client.user.phone === phone);
    client = client[0];


    const backHome = () => {
        history.push('/');
    }

    const goEdit = () => {
        history.push(`/clients/${client.user.phone}/edit`);
    }

    const remove = (phone) => {
        removeClient(phone);
        history.push('/');
    }
    return (
        <div className='mt-4'>


            <div className='row mt-5'>
                <div className='col-lg-5'>
                    <h2 className='display-6'>{client.user.name}</h2>
                    <h3 className='display-6 fs-3'>{client.user.propName} - {client.user.propAddress}</h3>
                    <span className='fs-5 d-block text-muted'>{client.user.phone}</span>
                    <span className='fs-5 d-block text-muted'>{client.user.email}</span>
                    <span className='fs-5 d-block text-muted mt-lg-4'>Notes: {client.user.notes}</span>
                    <button onClick={goEdit} className='btn btn-lg btn-warning mt-3' style={{ width: '100%' }}>Edit Client Info</button>
                    <button onClick={() => remove(client.user.phone)} className='btn btn-lg btn-danger mt-3' style={{ width: '100%' }}>Remove Client</button>


                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6'>
                    <h2 className='display-6 mt-4 mt-lg-0'>Summary of Questionnaire</h2>
                    {client.answers.map(answer =>
                        <span className='d-block fs-5 mt-lg-3' key={answer.question}>{answer.question} <span className='text-primary'>{answer.answer}</span></span>
                    )}

                    <span className='fs-5 d-block mt-lg-4'>Final Notes: <span className='text-primary'>{client.qNotes}</span></span>
                    <button onClick={backHome} className='btn btn-lg btn-primary mt-3' style={{ width: '100%' }}>Back to Clients</button>
                </div>
            </div>

        </div>
    )
}

export default Client;