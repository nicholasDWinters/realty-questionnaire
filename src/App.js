import './App.css';
import React, { useEffect, useState } from 'react';
import Question from './Question';
import UserForm from './UserForm';
import Client from './Client';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});
  const [current, setCurrent] = useState('do you like cake?');
  const [clients, setClients] = useState([]);


  const changeQuestion = (q) => {
    setCurrent(q);
  }

  const addUser = (user) => {
    setUser(user)
  }

  const addClient = (client) => {
    setClients([...clients, client]);
  }

  useEffect(() => {

  }, [user]);

  return (
    <div className="App container mt-5">
      <h1 className='display-1'>Realty Questionnaire</h1>
      <Switch>
        <Route exact path='/questions'>{user.name ? <Question user={user} addUser={addUser} question={current} change={changeQuestion} addClient={addClient} /> : <Redirect to='/' />}</Route>
        <Route exact path='/'><UserForm add={addUser} clients={clients} /></Route>
        <Route exact path='/clients/:phone'><Client clients={clients} /></Route>
      </Switch>





    </div>
  );
}

export default App;
