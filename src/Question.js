import React, { useEffect, useState } from 'react';
import History from './History';
import './App.css';

const Question = ({ question, change, user }) => {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {

    }, [question]);

    const questArr = [{ 'question': 'do you like cake?', 'yes': 'because you like cake, do you like ice cream?', 'no': 'why dont you like cake?', 'maybe': 'why cant you decide?' }];

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
            <History answers={answers} />
        </div>
    )
}

export default Question;