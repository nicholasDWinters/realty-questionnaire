import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Client = ({ clients }) => {
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
    return (
        <div className='mt-2'>
            <div className='row'>
                <div className='col-lg-4'>
                    <button onClick={backHome} className='btn btn-lg btn-primary mt-3' style={{ width: '100%' }}>Back to Clients</button>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-4'>
                    <h2 className='display-6'>{client.user.name}</h2>
                    <span className='fs-5 d-block text-muted'>{client.user.phone}</span>
                    <span className='fs-5 d-block text-muted'>{client.user.email}</span>
                    <span className='fs-5 d-block text-muted mt-lg-4'>Notes: {client.user.notes}</span>
                    <button onClick={goEdit} className='btn btn-lg btn-warning mt-3' style={{ width: '100%' }}>Edit Client Info</button>


                </div>
                <div className='col-lg-8'>
                    <h2 className='display-6 mt-4 mt-lg-0'>Summary of Questionnaire</h2>
                    {client.answers.map(answer =>
                        <span className='d-block fs-5 mt-lg-3' key={answer.question}>{answer.question} <span className='text-primary'>{answer.answer}</span></span>
                    )}

                    <span className='fs-5 d-block mt-lg-4'>Final Notes: <span className='text-primary'>{client.qNotes}</span></span>
                </div>
            </div>

        </div>
    )
}

export default Client;