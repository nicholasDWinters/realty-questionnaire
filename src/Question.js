import React, { useEffect, useState } from 'react';
import NotesForm from './NotesForm';
import History from './History';
import './App.css';

const Question = ({ question, change, user, addClient, addUser, questArr }) => {

    const [answers, setAnswers] = useState([]);
    const [notes, setNotes] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setAnswers([...answers, { 'question': question, 'answer': notes }])
        let q = questArr.findIndex(q => q.question === question);

        change(questArr[q]['next?']);
    }

    const handleChange = e => {
        const { value } = e.target;

        setNotes(value);
    }

    useEffect(() => {

    }, [question]);



    const submit = (e) => {
        e.preventDefault();
        setAnswers([...answers, { 'question': question, 'answer': e.target.value }])
        let q = questArr.findIndex(q => q.question === question);

        change(questArr[q][e.target.value]);
    }
    return (
        <div className='mt-5'>
            <h3 className='display-6'>Questions for {user.name}</h3>
            <p>Notes: {user.notes}</p>

            {question === 'end of questionnaire' ?
                <div className='row mt-5 Question'>
                    <div className='col-lg-7'>
                        <h3 className='fs-1'>Thank you for your time.</h3>
                    </div>
                    <div className='col-lg-5 mt-3 mt-lg-0'>
                        <NotesForm addUser={addUser} addClient={addClient} answers={answers} user={user} change={change} />

                    </div>
                </div>
                :
                <div className='row mt-5 Question'>
                    <div className='col-lg-7'>
                        <h3 className='fs-1'>{question}</h3>
                    </div>

                    {/* add another ternary operator in here checking the question type, and displaying either yes/no choices, or a text area */}
                    {question.type === 'yesNo' ?
                        <div className='col-lg-5 d-grid gap-3 mt-3 mt-lg-0'>
                            <button className='btn btn-lg btn-success' onClick={submit} value='yes'>Yes</button>
                            <button className='btn btn-lg btn-danger' onClick={submit} value='no'>No</button>
                        </div>
                        :
                        <form onSubmit={submitForm}>



                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" name='notes' id="notes" rows='5' value={notes} onChange={handleChange}></textarea>
                                <label htmlFor="notes">Notes</label>
                            </div>
                            <div className='d-grid'>
                                <button className='btn btn-primary btn-lg'>Next Question</button>
                            </div>


                        </form>
                    }



                </div>
            }

            <History answers={answers} />
        </div>
    )
}

export default Question;