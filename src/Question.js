import React, { useEffect, useState } from 'react';
import NotesForm from './NotesForm';
import History from './History';
import './App.css';

const Question = ({ question, change, user, addClient, addUser }) => {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {

    }, [question]);

    const questArr = [{ 'question': 'do you like cake?', 'yes': 'because you like cake, do you like ice cream?', 'no': 'do you enjoy pie instead?', 'maybe': 'why cant you decide? are you hungry?' }, { 'question': 'why cant you decide? are you hungry?', 'yes': 'end of questionnaire', 'no': 'end of questionnaire', 'maybe': 'end of questionnaire' }, { 'question': 'because you like cake, do you like ice cream?', 'yes': 'end of questionnaire', 'no': 'end of questionnaire', 'maybe': 'end of questionnaire' }, { 'question': 'do you enjoy pie instead?', 'yes': 'end of questionnaire', 'no': 'end of questionnaire', 'maybe': 'end of questionnaire' }];

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
                        <h3 className='fs-1'>End of Questionnaire!</h3>
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
                    <div className='col-lg-5 d-grid gap-3 mt-3 mt-lg-0'>


                        <button className='btn btn-lg btn-success' onClick={submit} value='yes'>Yes</button>
                        <button className='btn btn-lg btn-danger' onClick={submit} value='no'>No</button>
                        <button className='btn btn-lg btn-warning' onClick={submit} value='maybe'>Maybe</button>

                    </div>
                </div>
            }

            <History answers={answers} />
        </div>
    )
}

export default Question;