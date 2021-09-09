import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Client = ({ clients }) => {
    const { phone } = useParams();
    const history = useHistory();
    let client = clients.filter(client => client.user.phone === phone);
    client = client[0];
    console.log(client);

    const backHome = () => {
        history.push('/');
    }
    return (
        <div className='mt-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2 className='display-6'>{client.user.name}</h2>
                    <span className='fs-5 d-block text-muted'>{client.user.phone}</span>
                    <span className='fs-5 d-block text-muted'>{client.user.email}</span>
                    <span className='fs-5 d-block text-muted mt-lg-4'>Notes: {client.user.notes}</span>


                </div>
                <div className='col-lg-6'>
                    <h2 className='display-6 mt-4 mt-lg-0'>Summary of Questionnaire</h2>
                    {client.answers.map(answer =>
                        <span className='d-block fs-5 mt-lg-3' key={answer.question}>{answer.question} - {answer.answer}</span>
                    )}

                    <span className='fs-5 d-block text-muted mt-lg-4'>Q Notes: {client.qNotes}</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <button onClick={backHome} className='btn btn-lg btn-primary mt-3' style={{ width: '100%' }}>Back to Clients</button>
                </div>
            </div>
        </div>
    )
}

export default Client;