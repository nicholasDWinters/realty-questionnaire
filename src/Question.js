import React, { useEffect, useState } from 'react';

const Question = ({ question, change }) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

    }, [question]);

    const questArr = [{ 'question': 'do you like cake?', 'yes': 'because you like cake, do you like ice cream?', 'no': 'why dont you like cake?', 'maybe': 'why cant you decide?' }];

    const submit = (e) => {
        e.preventDefault();
        setQuestions([...questions, { 'question': question, 'answer': e.target.value }])
        let q = questArr.findIndex(q => q.question === question);

        change(questArr[q][e.target.value]);
    }
    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-lg-7'>
                    <h2 className='display-4'>{question}</h2>
                </div>
                <div className='col-lg-5 d-grid gap-3 mt-3 mt-lg-0'>


                    <button className='btn btn-lg btn-success' onClick={submit} value='yes'>Yes</button>
                    <button className='btn btn-lg btn-danger' onClick={submit} value='no'>No</button>
                    <button className='btn btn-lg btn-warning' onClick={submit} value='maybe'>Maybe</button>

                </div>
            </div>


        </div>
    )
}

export default Question;