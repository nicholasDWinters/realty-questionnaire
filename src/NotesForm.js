import React, { useState } from 'react';

const NotesForm = ({ addClient, user, answers, addUser, change }) => {
    const [notes, setNotes] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log(notes);
        console.log(answers);
        console.log(user);
        const client = {
            'user': user,
            'answers': answers,
            'qNotes': notes
        }
        addClient(client);
        change('do you like cake?');
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
                    <textarea className="form-control" placeholder="Leave a comment here" name='notes' id="notes" rows='5' value={notes} onChange={handleChange}></textarea>
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