import React, { useState } from 'react';

const NotesForm = ({ addClient, user, answers, addUser, change }) => {
    const [notes, setNotes] = useState('');

    const submit = (e) => {
        e.preventDefault();

        const client = {
            'user': user,
            'answers': answers,
            'qNotes': notes
        }
        addClient(client);
        change({ 'type': 'yesNo', 'question': 'Do you own this property?', 'yes': 'What is your plan for it?', 'no': 'Any others that you own in the area?' });
        addUser({});
    }

    const handleChange = e => {
        const { value } = e.target;

        setNotes(value);
    }

    return (
        <div>
            <h4 className='fs-2'>Anything to add?</h4>
            <form onSubmit={submit}>



                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" name='notes' id="notes" value={notes} onChange={handleChange}></textarea>
                    <label htmlFor="notes">Notes</label>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary btn-lg'>Submit Answers</button>
                </div>


            </form>
        </div>
    )
}

export default NotesForm;