import './App.css';
import React, { useState } from 'react';
import Question from './Question';

function App() {
  const [current, setCurrent] = useState('do you like cake?');
  const changeQuestion = (q) => {
    setCurrent(q);
  }
  return (
    <div className="App container mt-5">
      <h1 className='display-1'>Realty Questionnaire</h1>
      <Question question={current} change={changeQuestion} />
    </div>
  );
}

export default App;
