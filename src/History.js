import React from 'react';

const History = ({ answers }) => {
    return (
        <div className='mt-5'>
            <h3>Summary of answers:</h3>
            {answers.map(answer =>
                <div key={answer.question}>
                    <p className='fs-5'>{answer.question} - <span className='text-muted'>{answer.answer}</span></p>
                </div>
            )}
        </div>
    )
}

export default History;