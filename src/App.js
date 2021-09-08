import './App.css';
import React, { useEffect, useState } from 'react';
import Question from './Question';
import UserForm from './UserForm';

function App() {
  const [user, setUser] = useState({});
  const [current, setCurrent] = useState('do you like cake?');


  const changeQuestion = (q) => {
    setCurrent(q);
  }

  const addUser = (user) => {
    setUser(user)
  }

  useEffect(() => {

  }, [user]);

  return (
    <div className="App container mt-5">
      <h1 className='display-1'>Realty Questionnaire</h1>
      {!user.name ?
        <UserForm add={addUser} />
        :

        <Question user={user} question={current} change={changeQuestion} />
      }



    </div>
  );
}

export default App;
