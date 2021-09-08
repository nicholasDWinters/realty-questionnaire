import React from 'react';

const History = ({ answers }) => {
    return (
        <div className='mt-5'>
            {answers.map(answer =>
                <div>
                    <p className='fs-5'>{answer.question} - <span className='text-muted'>{answer.answer}</span></p>
                </div>
            )}
        </div>
    )
}

export default History;