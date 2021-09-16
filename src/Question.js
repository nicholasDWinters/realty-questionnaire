import React, { useEffect, useState } from 'react';
import NotesForm from './NotesForm';
import History from './History';
import './App.css';

const Question = ({ question, change, user, addClient, addUser, questArr }) => {

    const [answers, setAnswers] = useState([]);
    const [notes, setNotes] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setAnswers([...answers, { 'question': question.question, 'answer': notes }])

        let nextQ = questArr.filter(q => q.question === question.next);
        change(nextQ[0]);
        setNotes('');
    }

    const handleChange = e => {
        const { value } = e.target;

        setNotes(value);
    }

    useEffect(() => {

    }, [question]);



    const submit = (e) => {
        e.preventDefault();
        setAnswers([...answers, { 'question': question.question, 'answer': e.target.value }])
        let nextQ = questArr.filter(q => q.question === question[e.target.value]);
        change(nextQ[0]);
    }

    return (
        <div className='mt-3'>
            <div className='row'>
                <h3 className='display-6'>Questions for {user.name}</h3>
                <p>Notes: {user.notes}</p>
                <div className='col-lg-6 order-2 order-lg-1'>
                    <History answers={answers} />
                </div>
                {question.question === 'end of questionnaire' ?

                    <div className='col-lg-5 Question order-1 order-lg-2'>
                        <h3 className='fs-1'>Thank you for your time.</h3>
                        <NotesForm addUser={addUser} addClient={addClient} answers={answers} user={user} change={change} />
                    </div>




                    :

                    <div className='col-lg-5 Question order-1 order-lg-2'>
                        <h3 className='fs-2'>{question.question}</h3>

                        {question.type === 'yesNo' ?
                            <div className='d-grid gap-3 mt-3'>
                                <button className='btn btn-lg btn-success' onClick={submit} value='yes'>Yes</button>
                                <button className='btn btn-lg btn-danger' onClick={submit} value='no'>No</button>
                            </div>
                            :
                            <div className='mt-3'>
                                <form onSubmit={submitForm}>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Leave a comment here" name='notes' id="notes" value={notes} onChange={handleChange}></textarea>
                                        <label htmlFor="notes">Notes</label>
                                    </div>
                                    <div className='d-grid'>
                                        <button className='btn btn-primary btn-lg'>Next Question</button>
                                    </div>


                                </form>
                            </div>
                        }



                    </div>
                }
            </div>




        </div>
    )
}

export default Question;