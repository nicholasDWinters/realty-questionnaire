import './App.css';
import React, { useEffect, useState } from 'react';
import Question from './Question';
import UserForm from './UserForm';
import Client from './Client';
import EditClient from './EditClient';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const questArr = [
    { 'type': 'yesNo', 'question': 'Do you own this property?', 'yes': 'What is your plan for it?', 'no': 'Any others that you own in the area?' },
    { 'type': 'yesNo', 'question': 'Any others that you own in the area?', 'yes': 'Would you be open to selling any in the near future?', 'no': 'end of questionnaire' },
    { 'type': 'yesNo', 'question': 'Would you be open to selling any in the near future?', 'yes': 'Can you tell me more about which one(s)?', 'no': 'Can I get your email to check in on occasion?' },
    { 'type': 'noteTaking', 'question': 'What is your plan for it?', 'next': 'Are you open to considering offers?' },
    { 'type': 'yesNo', 'question': 'Are you open to considering offers?', 'yes': 'Can I meet you at the property / get more info - financials, condition, etc?', 'no': 'Can I get your email to check in on occasion?' },
    { 'type': 'noteTaking', 'question': 'Can I get your email to check in on occasion?', 'next': 'end of questionnaire' },
    { 'type': 'noteTaking', 'question': 'Can I meet you at the property / get more info - financials, condition, etc?', 'next': 'Set time to meet or follow up:' },
    { 'type': 'noteTaking', 'question': 'Set time to meet or follow up:', 'next': 'end of questionnaire' },
    { 'type': 'noteTaking', 'question': 'Can you tell me more about which one(s)?', 'next': 'Can I meet you at the property / get more info - financials, condition, etc?' },
    { 'question': 'end of questionnaire' }
  ];
  const [user, setUser] = useState({});
  const [current, setCurrent] = useState({ 'type': 'yesNo', 'question': 'Do you own this property?', 'yes': 'What is your plan for it?', 'no': 'Any others that you own in the area?' });
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

  const editClient = (phone, client) => {
    let newClients = clients.filter(c => c.user.phone !== phone);
    newClients = [...newClients, client];

    setClients([...newClients]);

  }

  const removeClient = (phone) => {
    let newClients = clients.filter(c => c.user.phone !== phone);
    setClients([...newClients]);
  }

  useEffect(() => {

  }, [user, clients]);

  return (
    <div className="App container mt-5 mb-5">
      <h1 className='display-1'>Realty Questionnaire</h1>
      <Switch>
        <Route exact path='/questions'>{user.name ? <Question questArr={questArr} user={user} addUser={addUser} question={current} change={changeQuestion} addClient={addClient} /> : <Redirect to='/' />}</Route>
        <Route exact path='/'><UserForm add={addUser} clients={clients} /></Route>
        <Route exact path='/clients/:phone'><Client removeClient={removeClient} clients={clients} /></Route>
        <Route exact path='/clients/:phone/edit'><EditClient clients={clients} editClient={editClient} /></Route>
      </Switch>





    </div>
  );
}

export default App;
